<script lang="ts" setup>
import { useContentful } from "~/composables/useContentful";
import { onBeforeMount, onMounted, useRoute } from "#imports";
import { useAsyncState } from "@vueuse/core";
import Skeleton from "~/components/Skeleton.vue";

const { blogPost } = useContentful();
const { state: post, execute } = useAsyncState(
  () => blogPost.getOneById(useRoute().params.id as string),
  null,
  { immediate: false }
);
onBeforeMount(() => execute());
</script>

<template>
  <div v-if="post" class="max-w-4xl mx-auto h-auto">
    <div class="p-4 h-auto">
      <h1 class="text-slyth-400 font-bold text-5xl max-w-5xl uppercase">
        {{ post.title }}
      </h1>
      <div class="separator"></div>
      <div class="body__text" v-html="post.body"></div>
      <div v-if="post.notes">
        <div class="separator"></div>
        <p class="text-slyth-400 text-xl mb-2">
          <strong>Note dell'autrice:</strong>
        </p>
        <div class="body__text" v-html="post.notes"></div>
      </div>
    </div>
  </div>
  <div class="flex gap-4" v-else>
    <Skeleton height="h-24" width="w-5/6" class="mb-8" />
    <Skeleton />
    <Skeleton />
    <Skeleton class="mb-4" />
    <Skeleton />
    <Skeleton />
    <Skeleton class="mb-4" />
    <Skeleton />
    <Skeleton />
    <Skeleton class="mb-4" />
    <Skeleton />
    <Skeleton />
    <Skeleton class="mb-4" />
  </div>
</template>

<style lang="scss" scoped>
.separator {
  @apply bg-slyth-900 w-full h-0.5 my-6;
}

.body__text {
  @apply text-slyth-900 text-justify text-lg;
}
</style>
