<script lang="ts" setup></script>

<template>
  <div class="w-screen h-screen flex">
    <SidebarLeft />
    <main
      id="main"
      class="p-12 ml-[20%] text-slyth-100 bg-slyth-100 w-full overflow-auto"
    >
      <slot> </slot>
    </main>
  </div>
</template>
