<script lang="ts" setup>
import { UseContentful } from "~/composables/useContentful";
import { onBeforeMount, onMounted, useRoute } from "#imports";
import { useAsyncState, useTimeAgo } from "@vueuse/core";
import Skeleton from "~/components/Skeleton.vue";

const { blogPost } = UseContentful();
const route = useRoute();
const { state: posts, execute } = useAsyncState(
  () => blogPost.getAll({ "fields.category": route.params.genre }),
  null,
  { immediate: false }
);
onBeforeMount(() => execute());
</script>

<template>
  <div v-if="posts" class="p-4 h-auto">
    <div
      @click="$router.push(route.fullPath + '/' + id)"
      class="bg-slyth-50 rounded-3xl p-4 h-auto w-6/12 overflow-ellipsis cursor-pointer"
      v-for="{ title, body, id, createdAt, updatedAt } in posts"
    >
      <h1 class="text-slyth-400 font-bold max-w-5xl uppercase">
        {{ title }}
      </h1>
      <div class="separator"></div>
      <div
        class="text-slyth-900"
        v-html="body.slice(0, 300).concat('...')"
      ></div>
      <div class="separator"></div>
      <div class="flex text-xs">
        <p class="text-slyth-500 mr-auto">
          <span class="font-bold">Creato il:</span> {{ useTimeAgo(createdAt) }}
        </p>
        <p class="text-slyth-500">
          <span class="font-bold">Ultimo aggiornamento:</span>
          {{ useTimeAgo(updatedAt) }}
        </p>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-4" v-else>
    <Skeleton height="h-40" width="w-5/6" class="mb-8" />
    <Skeleton />
    <Skeleton />
    <Skeleton class="mb-4" />
  </div>
</template>

<style lang="scss" scoped>
.separator {
  @apply bg-slyth-900/20 w-full h-[1px] my-2;
}
</style>
