<template>
  <div
    class="py-4 px-6 bg-gradient-to-tr from-pinkPrimary to-purplePrimary dark:bg-zinc-700 dark:bg-none shadow-2xl rounded-lg"
  >
    <div class="flex flex-col justify-center items-center child:text-black gap-3">
      <h2 class="text-2xl text-black dark:text-white">{{ $t('dashboardSideBar') }}</h2>
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
const username = ref<string[]>([])

const storedUserInfo = localStorage.getItem('userInfo')
if (storedUserInfo) {
  try {
    username.value = JSON.parse(storedUserInfo)
  } catch (erorr) {
    console.error('Error parsing userInfo from localStorage', erorr)
  }
}

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

const greetingToUser = (): string => {
  if (currentHours.value < 12) {
    return localStorage.getItem('language') === 'fa'
      ? `${username.value[0]} صبح بخیر`
      : `Good morning ${username.value[0]}`
  } else if (currentHours.value < 18) {
    return localStorage.getItem('language') === 'fa'
      ? `${username.value[0]} ظهر بخیر`
      : `Good afternoon ${username.value[0]}`
  } else {
    return localStorage.getItem('language') === 'fa'
      ? `${username.value[0]} شب بخیر`
      : `Good evening ${username.value[0]}`
  }
}
</script>

<style scoped>
</style>
