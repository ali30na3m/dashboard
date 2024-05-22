
<template>
  <div>
    <HeaderVue @toggleSidebar="toggleSidebar" />
    <SidebarVue />
    <div v-if="isSidebarOpen" @click="closeSidebar" class="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
    <div
      :class="[
        'absolute top-20 left-0 right-0 flex justify-center items-center mt-5',
        locale === 'fa' ? 'sm:left-0 sm:right-[220px]' : 'sm:left-[220px] sm:right-0'
      ]"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import HeaderVue from './components/Header.vue'
import SidebarVue from './components/Sidebar.vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isSidebarOpen = ref<boolean>(false)
provide('isSidebarOpen', isSidebarOpen)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
const closeSidebar = () => {
  isSidebarOpen.value = false
}
</script>
<style scoped>
</style>
