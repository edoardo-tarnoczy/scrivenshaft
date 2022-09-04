<script lang="ts" setup>
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
import { computed } from "#imports";
const props = defineProps<{
  path: string;
}>();

const pathArray = computed(() => props.path.split("/").slice(1, -1));

const calcPath = (idx: number) =>
  "/" + pathArray.value.slice(0, idx + 1).join("/");
</script>

<template>
  <div class="absolute top-6 left-16 text-slyth-600 flex uppercase">
    <div class="flex" v-for="(name, idx) in pathArray" :key="idx">
      <a class="hover:text-slyth-900" :href="calcPath(idx)">{{ name }} </a>
      <ChevronRightIcon
        class="text-slyth-900 w-6 h-6"
        v-if="idx !== pathArray.length - 1"
      />
    </div>
  </div>
</template>
