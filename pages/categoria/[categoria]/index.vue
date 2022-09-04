<script lang="ts" setup>
import { useContentful } from "~/composables/useContentful";
import { onBeforeMount, useRoute } from "#imports";
import { useAsyncState } from "@vueuse/core";
import Skeleton from "~/components/Skeleton.vue";

const { fandoms } = useContentful();
const route = useRoute();
const categoria = route.params.categoria as string;
const { state: fandomsArray, execute } = useAsyncState(
  () =>
    fandoms.getAll({
      "fields.category": categoria.replace("-&-", "e"),
    }),
  null,
  { immediate: false }
);
onBeforeMount(() => execute());
</script>

<template>
  <div v-if="fandomsArray" class="p-4 h-auto">
    <h1 class="text-slyth-900 text-4xl">
      {{ categoria.toUpperCase().split("-").join(" ") }}
    </h1>
    <div class="separator"></div>
    <div class="grid gap-4 grid-cols-4">
      <div
        @click="$router.push(route.fullPath + '/' + fandom)"
        class="text-center bg-slyth-50 col-span-1 rounded-3xl border border-slyth-300 overflow-hidden h-80 cursor-pointer"
        v-for="{ fandom, cover } in fandomsArray"
      >
        <img
          class="object-cover w-full h-[80%]"
          :src="cover.url"
          :alt="cover.description"
        />
        <p class="my-4 text-slyth-400 font-bold max-w-5xl uppercase">
          {{ fandom }}
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
