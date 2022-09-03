<script lang="ts" setup>
import { sidebarLinks } from "~/components/Sidebar/Links/linksUtils";
</script>

<template>
  <aside id="sidebar" class="sticky w-3/12 bg-slyth-900">
    <div
      class="p-4 w-full h-screen grid grid-rows-12 border-r border-r-slyth-700"
    >
      <h1
        class="flex items-center justify-center row-span-1 font-satisfy text-slyth-gold text-3xl text-center font-semibold"
      >
        Scrivenshaft
      </h1>
      <div class="link-menu-container row-span-10 overflow-auto">
        <SidebarLinks
          class="text-slyth-100"
          :root="true"
          :links="sidebarLinks"
        />
      </div>
      <div
        class="row-span-2 py-4 mt-3 gap-2 flex flex-col text-slyth-300 text-xs absolute bottom-0"
      >
        <span class="cursor-pointer hover:text-slyth-400"
          >© Website Designed & Created: Eddy</span
        >
        <span class="cursor-pointer hover:text-slyth-400"
          >© Stories By: LaTum</span
        >
      </div>
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
</style>
