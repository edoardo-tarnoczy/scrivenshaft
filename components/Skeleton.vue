<script lang="ts" setup>
withDefaults(
  defineProps<{
    height?: string;
    width?: string;
  }>(),
  {
    height: "h-4",
  }
);
</script>

<template>
  <div
    :class="height + ' ' + width"
    class="rounded max-w-full h-4 bg-slyth-200 animate-pulse"
  ></div>
</template>
