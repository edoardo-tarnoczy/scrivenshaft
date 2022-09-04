<script lang="ts" setup>
import { useContentful } from "~/composables/useContentful";
import { onBeforeMount, useRoute } from "#imports";
import { useAsyncState, useTimeAgo } from "@vueuse/core";
import Skeleton from "~/components/Skeleton.vue";

const { blogPost } = useContentful();
const route = useRoute();
const { state: posts, execute } = useAsyncState(
  () =>
    blogPost.getAll({
      "fields.fandom.fields.fandom": route.params.fandom,
      "fields.fandom.sys.contentType.sys.id": "fandoms",
    }),
  null,
  { immediate: false }
);
onBeforeMount(() => execute());
</script>

<template>
  <div v-if="posts" class="p-4 h-auto grid">
    <div class="grid grid-cols-2 gap-4">
      <div
        @click="$router.push(route.fullPath + '/' + id)"
        class="col-span-1 bg-slyth-50 rounded-3xl p-4 h-auto cursor-pointer"
        v-for="{ title, summary, id, createdAt, updatedAt } in posts"
      >
        <h1 class="text-slyth-400 font-bold max-w-5xl uppercase">
          {{ title }}
        </h1>
        <div class="separator"></div>
        <p class="text-slyth-900">
          {{ summary }}
        </p>
        <div class="separator"></div>
        <div class="flex text-xs">
          <p class="text-slyth-500 mr-auto">
            <span class="font-bold">Creato il:</span>
            {{ useTimeAgo(createdAt) }}
          </p>
          <p class="text-slyth-500">
            <span class="font-bold">Ultimo aggiornamento:</span>
            {{ useTimeAgo(updatedAt) }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-4" v-else>
    <Skeleton height="h-40" class="mb-8 col-span-1" />
    <Skeleton height="h-40" class="mb-8 col-span-1" />
    <Skeleton height="h-40" class="mb-8 col-span-1" />
    <Skeleton height="h-40" class="mb-8 col-span-1" />
    <Skeleton height="h-40" class="mb-8 col-span-1" />
    <Skeleton height="h-40" class="mb-8 col-span-1" />
  </div>
</template>

<style lang="scss" scoped>
.separator {
  @apply bg-slyth-900/20 w-full h-[1px] my-2;
}
</style>
