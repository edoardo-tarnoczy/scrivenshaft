<script lang="ts" setup></script>

<template>
  <div class="w-screen h-screen flex">
    <SidebarLeft />
    <main
      id="main"
      class="ml-[20%] text-slyth-100 bg-slyth-100 w-full overflow-auto"
    >
      <Breadcrumb :path="$route.fullPath" />
      <div class="px-12 py-4">
        <slot> </slot>
      </div>
    </main>
  </div>
</template>
<script>
import Breadcrumb from "../components/Breadcrumb";
export default {
  components: { Breadcrumb },
};
</script>
