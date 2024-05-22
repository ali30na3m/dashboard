<template>
  <div
    class="py-4 px-6 shadow-2xl rounded-lg bg-gradient-to-tr from-pinkPrimary to-purplePrimary dark:bg-zinc-700 dark:bg-none"
  >
    <div class="flex flex-col justify-center items-center child:text-black gap-4">
      <h2 class="text-2xl font-semibold text-black dark:text-gray-200">
        {{ $t('headerprofile') }}
      </h2>
      <input
        v-model="username"
        class="text-xl py-2 px-4 rounded-xl border-gray-500 border-2 bg-white dark:bg-zinc-500 dark:text-gray-200 dark:placeholder-gray-50"
        type="text"
        name="TodoValue"
        id="TodoValue"
        :placeholder="$t('usernamePlaceHolder')"
      />
      <select
        v-model="selectedTheme"
        name="theme"
        id="theme"
        class="w-full py-2 px-4 rounded-xl text-gray-800 dark:bg-zinc-600 dark:text-gray-200"
      >
        <option value="light">{{ $t('lightMode') }}</option>
        <option value="dark">{{ $t('darkMode') }}</option>
      </select>
      <select
        v-model="selectedLanguage"
        name="language"
        id="language"
        class="w-full py-2 px-4 rounded-xl text-gray-800 dark:bg-zinc-600 dark:text-gray-200"
      >
        <option value="en">English</option>
        <option value="fa">فارسی</option>
      </select>
      <a-button
        class="flex justify-center items-center mx-auto dark:text-gray-200"
        @click="saveProfileHandler"
        type="primary"
        >{{ $t('saveBtnProfile') }}</a-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import Swal from 'sweetalert2'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const username = ref<string>('')
const password = ref<string>('')
const currentTheme = ref<string>('light')
const selectedTheme = ref<string>('light')
const currentLanguage = ref<string>('en')
const selectedLanguage = ref<string>('en')

const loadProfile = () => {
  const savedTheme = localStorage.getItem('theme')
  const savedLanguage = localStorage.getItem('language')
  const savedUserInfo = localStorage.getItem('userInfo')

  if (savedTheme) {
    currentTheme.value = savedTheme
    selectedTheme.value = savedTheme
    document.documentElement.classList.add(savedTheme)
  }

  if (savedLanguage) {
    currentLanguage.value = savedLanguage
    selectedLanguage.value = savedLanguage
    locale.value = savedLanguage
  }

  if (savedUserInfo) {
    const userInfo = JSON.parse(savedUserInfo)
      username.value = userInfo[0]
      password.value = userInfo[1]
  }
}

const saveProfileHandler = () => {
  currentTheme.value = selectedTheme.value
  currentLanguage.value = selectedLanguage.value

  localStorage.setItem('theme', currentTheme.value)
  localStorage.setItem('language', currentLanguage.value)
  localStorage.setItem('userInfo', JSON.stringify([username.value, password.value]))
  Swal.fire({
    icon: 'success',
    title:
      locale.value === 'en' ? 'Profile updated successfully' : 'تغییر نام کاربری موفقیت آمیز بود.'
  })

  document.documentElement.classList.remove('light', 'dark')
  document.documentElement.classList.add(currentTheme.value)
  if (currentTheme.value === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  locale.value = currentLanguage.value
}

onMounted(() => {
  loadProfile()
})
</script>

<style>
:root {
  --bg-color-dark: #27272a;
}

html.dark {
  background-color: var(--bg-color-dark);
}
</style>
