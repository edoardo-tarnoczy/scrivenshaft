<script lang="ts" setup></script>

<template>
  <div class="w-screen h-screen flex">
    <SidebarLeft />
    <main
      id="main"
      class="relative p-12 ml-[20%] text-slyth-100 bg-slyth-100 w-full overflow-auto"
    >
      <Breadcrumb :path="$route.fullPath" />
      <slot> </slot>
    </main>
  </div>
</template>
<script>
import Breadcrumb from "../components/Breadcrumb";
export default {
  components: { Breadcrumb },
};
</script>
