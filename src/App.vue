<template>
  <div :class="appClass">
    <Header @toggleSidebar="toggleSidebar" />
    <div class="relative">
      <div v-if="isSidebarOpen" @click="closeSidebar" class="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      <SideBar :isSidebarOpen="isSidebarOpen" />
      <div :class="routerClass">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
import { useI18n } from "vue-i18n";
import { computed, provide, ref } from "vue";

export default {
  name: "App",
  components: {
    Header,
    SideBar,
  },
  setup() {
    const { locale } = useI18n();
    const isSidebarOpen = ref(false);
    provide('isSidebarOpen', isSidebarOpen);

    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value;
    };

    const closeSidebar = () => {
      isSidebarOpen.value = false;
    };

    const appClass = computed(() => {
      return "min-h-screen bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-white";
    });

    const routerClass = computed(() => {
      return locale.value === "fa"
        ? "absolute top-20 left-0 right-0 sm:right-[240px] flex justify-center items-center"
        : "absolute top-20 left-0 sm:left-[240px] right-0 flex justify-center items-center";
    });

    return {
      locale,
      routerClass,
      isSidebarOpen,
      toggleSidebar,
      closeSidebar,
      appClass,
    };
  },
};
</script>

