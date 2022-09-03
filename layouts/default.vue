<script lang="ts" setup></script>

<template>
  <div class="w-full h-screen flex">
    <Sidebar />
    <main
      id="main"
      class="p-12 text-slyth-100 bg-slyth-900 w-full overflow-auto"
    >
      <slot></slot>
    </main>
  </div>
</template>
