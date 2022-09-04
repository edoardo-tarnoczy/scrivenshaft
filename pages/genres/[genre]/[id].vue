<script lang="ts" setup>
import { UseContentful } from "~/composables/useContentful";
import { onBeforeMount, onMounted, useRoute } from "#imports";
import { useAsyncState } from "@vueuse/core";
import Skeleton from "~/components/Skeleton.vue";

const { blogPost } = UseContentful();
const { state: post, execute } = useAsyncState(
  () => blogPost.getOneById(useRoute().params.id as string),
  null,
  { immediate: false }
);
onBeforeMount(() => execute());
</script>

<template>
  <div v-if="post" class="h-auto">
    <div class="p-4 h-auto">
      <h1 class="text-slyth-400 font-bold text-5xl max-w-5xl uppercase">
        {{ post.title }}
      </h1>
      <div class="separator"></div>
      <div class="text-slyth-900" v-html="post.body"></div>
      <div v-if="post.notes">
        <div class="separator"></div>
        <p class="text-slyth-400"><strong>Note dell'autrice:</strong></p>
        <div class="text-slyth-900" v-html="post.notes"></div>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-4" v-else>
    <Skeleton height="h-40" width="w-5/6" class="mb-8" />
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
  @apply bg-slyth-900 w-6/12 h-0.5 my-6;
}
</style>
