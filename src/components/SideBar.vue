<template>
  <div :class="[sidebarClass, isSidebarOpen ? 'block' : 'hidden', 'sm:block']">
    <div>
      <div>
        <h2 :class="sideTitleClass">{{ $t("welcome") }}</h2>
      </div>
      <span class="block bg-white h-[1px] my-4"></span>
      <div :class="childSidebarClass">
        <router-link to="/dashboard">{{ $t("dashboardSideBar") }}</router-link>
        <router-link to="/todos">{{ $t("headerTodo") }}</router-link>
        <router-link to="/weather">{{ $t("weatherHeader") }}</router-link>
        <router-link to="/profile">{{ $t("headerprofile") }}</router-link>
        <!-- <router-link to="/">{{ $t("headerprofile") }}</router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { computed, inject } from "vue";

export default {
  name: "SideBarPanel",
  setup() {
    const { t, locale } = useI18n();
    const isSidebarOpen = inject("isSidebarOpen");

    const isRtl = computed(() => locale.value === "fa");

    const sidebarClass = computed(() =>
      isRtl.value
        ? `fixed top-0 right-0 bottom-0 pt-3 px-2 bg-[#471AAA] w-[264px] z-50`
        : "fixed top-0 left-0 bottom-0 pt-3 px-2 bg-[#471AAA] w-[264px] z-50"
    );

    const childSidebarClass = computed(
      () =>
        `flex flex-col gap-2 child:text-white child:font-semibold hover:child:bg-white/50 child:py-2 hover:child:px-4 child:rounded-xl child:cursor-pointer transition-all ${
          isRtl.value ? "child:text-right" : ""
        }`
    );

    const sideTitleClass = computed(
      () =>
        `text-white text-lg font-extrabold ${
          isRtl.value ? "text-right" : "text-left"
        }`
    );

    return {
      t,
      sidebarClass,
      childSidebarClass,
      sideTitleClass,
      isSidebarOpen,
    };
  },
};
</script>

<style>
</style>
