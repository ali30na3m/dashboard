<template>
  <div
    class="py-4 px-6 bg-gradient-to-tr from-pinkPrimary to-purplePrimary dark:bg-zinc-700 dark:bg-none shadow-2xl rounded-lg"
  >
    <div class="flex flex-col justify-center items-center child:text-black gap-3">
      <h2 class="text-2xl text-black dark:text-white">{{$t('dashboardSideBar')}}</h2>
      <h2 class="text-3xl dark:text-white">{{ currentTime }}</h2>
      <p class="dark:text-white">{{ greetingToUser() }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const currentTime = ref<string>(new Date().toLocaleTimeString())
const currentHours = ref(new Date().getHours())

const updateTime = (): void => {
  currentTime.value = new Date().toLocaleTimeString()
}

let timeNow: number

onMounted(() => {
  timeNow = window.setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(timeNow)
})

const greetingToUser = () => {
  console.log(currentHours.value)
  if (currentHours.value < 12) {
    return 'good morning'
  } else if (currentHours.value < 18) {
    return 'good afternoun'
  } else {
    return 'good night'
  }
}
</script>

<style scoped>
</style>
