
<template>
  <div>
    <HeaderVue />
    <SidebarVue />
    <div :class="['absolute top-20 flex justify-center items-center', locale === 'fa' ? 'left-0 right-[220px]' : 'left-[220px] right-0']">
      <router-view ></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">

import HeaderVue from "./components/Header.vue";
import SidebarVue from "./components/Sidebar.vue";
import { useI18n } from "vue-i18n";

const {locale} = useI18n()

</script>
<style scoped>

</style>
