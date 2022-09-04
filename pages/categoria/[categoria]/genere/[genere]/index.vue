<script lang="ts" setup>
import { useContentful } from "~/composables/useContentful";
import { onBeforeMount, useRoute } from "#imports";
import { useAsyncState } from "@vueuse/core";
import Skeleton from "~/components/Skeleton.vue";

const { blogPost } = useContentful();
const route = useRoute();
const { state: posts, execute } = useAsyncState(
  () =>
    blogPost.getAll({
      "fields.genre": route.params.genere,
    }),
  null,
  { immediate: false }
);
onBeforeMount(() => execute());
</script>

<template>
  <div v-if="posts" class="p-4 h-auto">
    <h1 class="text-slyth-900 text-4xl">
      {{ route.params.genere.toUpperCase() }}
    </h1>
    <div class="separator"></div>
    <div class="grid gap-4 grid-cols-4">
      <div
        @click="$router.push(route.fullPath + '/' + fandom)"
        class="text-center bg-slyth-50 col-span-1 rounded-3xl border border-slyth-300 overflow-hidden h-80 cursor-pointer"
        v-for="{ fandom, cover } in posts"
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
