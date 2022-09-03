<script lang="ts" setup>
import { sidebarLinks } from "~/components/Sidebar/Links/linksUtils";
</script>

<template>
  <aside id="sidebar" class="right-0 w-6/12 sticky flex h-screen p-4 justify-center items-center w-4/12 bg-slyth-900">
    <div
        class="p-4 w-full h-full text-slyth-100 card-shadow rounded-2xl border border-slyth-700/50"
    >
      Right side bar
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.link-menu-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.link-menu-container::-webkit-scrollbar {
  display: none;
}

.card-shadow{
  -webkit-box-shadow: 0px 0px 10px -2px #2a3b2e;
  box-shadow: 0px 0px 10px -2px #2a3b2e;
}
</style>
