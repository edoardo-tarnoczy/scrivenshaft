<script lang="ts" setup>
import { useContentful } from "~/composables/useContentful";
import { onBeforeMount, useRoute } from "#imports";
import { useAsyncState } from "@vueuse/core";
import Skeleton from "~/components/Skeleton.vue";

const { fandoms } = useContentful();
const route = useRoute();
const { state: fandomsArray, execute } = useAsyncState(
  () => fandoms.getAll(),
  null,
  { immediate: false }
);
onBeforeMount(() => execute());
</script>

<template>
  <div v-if="fandomsArray" class="p-4 h-auto">
    <h1 class="text-slyth-900 text-4xl">
      {{ route.fullPath.replace("/", "").toUpperCase() }}
    </h1>
    <div class="separator"></div>
    <div class="grid gap-4 grid-cols-4">
      <div
        @click="
          $router.push(
            route.fullPath +
              '/' +
              category.replace(/(anime)(.*)(manga)/gim, '$1-&-$3')
          )
        "
        class="text-center bg-slyth-50 col-span-1 rounded-3xl border border-slyth-300 overflow-hidden cursor-pointer"
        v-for="{ category } in fandomsArray"
      >
        <p class="my-4 text-slyth-400 font-bold max-w-5xl uppercase">
          {{ category.replace(/(anime)(.*)(manga)/gim, "$1 & $3") }}
        </p>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-4" v-else>
    <Skeleton height="h-24" width="w-5/6" class="mb-8" />
    <Skeleton />
    <Skeleton />
    <Skeleton class="mb-4" />
  </div>
</template>

<style lang="scss" scoped>
.separator {
  @apply bg-slyth-900/20 w-full h-[1px] my-6;
}
</style>
