<script lang="ts" setup>
// @TODO collapse link on small screen, vueuse/useMediaQuery
import { SidebarLink } from "~/components/Sidebar/Links/linksUtils";
import { ChevronDownIcon } from "@heroicons/vue/24/solid";

const activeIndex = ref();

const onLinkClick = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

defineProps<{
  links?: SidebarLink[];
  root?: boolean;
}>();

const commonClasses =
  "text-base w-full pl-4 p-2 flex items-center mb-2 hover:bg-slyth-800 hover:rounded-lg hover:font-bold hover:text-white";
</script>

<template>
  <ul class="links-container" v-if="links">
    <template v-for="(link, idx) of links">
      <li>
        <template v-if="root">
          <div class="font-bold uppercase mb-4 text-lg">
            {{ link.label }}
          </div>
          <SidebarLinks :links="link.subLinks" />
        </template>
        <template v-else>
          <NuxtLink
            :class="commonClasses"
            @click="onLinkClick(idx)"
            v-if="link.to"
            :to="link.to"
          >
            <component class="w-6 h-6 mr-4" :is="link.icon" />
            <span>{{ link.label }}</span>
          </NuxtLink>
          <a :class="commonClasses" v-else href="#" @click="onLinkClick(idx)">
            <component class="w-6 h-6 mr-4" :is="link.icon" />
            <span class="grow">{{ link.label }}</span>
            <ChevronDownIcon
              :class="{ 'rotate-180': activeIndex === idx }"
              class="w-4 h-4 mr-4 duration-300"
              v-if="link.subLinks"
            />
          </a>
          <transition name="submenu-wrapper">
            <SidebarLinks v-show="activeIndex === idx" :links="link.subLinks" />
          </transition>
        </template>
      </li>
    </template>
  </ul>
</template>

<style lang="scss" scoped>
.submenu-wrapper-enter-from,
.submenu-wrapper-leave-to {
  max-height: 0;
}

.submenu-wrapper-enter-to,
.submenu-wrapper-leave-from {
  max-height: 1000px;
}

.submenu-wrapper-leave-active {
  overflow: hidden;
  transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.submenu-wrapper-enter-active {
  overflow: hidden;
  transition: max-height 1s ease-in-out;
}

.links-container {
  & li a:focus {
    @apply bg-slyth-800 rounded-lg font-bold text-white;
  }
  & li ul ul {
    padding-left: 16px;
  }
}
</style>
