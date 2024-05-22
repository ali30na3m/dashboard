<template>
  <div
    :class="[
      locale === 'fa'
        ? 'sm:block fixed top-0 right-0 bottom-0 pt-3 px-2 bg-[#471AAA] w-[264px] z-50'
        : 'sm:block fixed top-0 left-0 bottom-0 pt-3 px-2 bg-[#471AAA] w-[264px] z-50',
      isSidebarOpen ? 'block' : 'hidden'
    ]"
  >
    <div>
      <h2 :class="['text-white', locale === 'fa' ? 'text-right' : '']">{{ $t('welcome') }}</h2>
      <span class="block h-[1px] bg-white mt-6"></span>
      <div
        :class="[
          'flex flex-col mt-5 gap-4 child:text-white hover:child:bg-black/20 child:py-2 child:p-4 child:rounded-xl transition-all',
          locale === 'fa' ? 'child:text-right' : ''
        ]"
      >
        <router-link to="/dashboard">{{ $t('dashboardSideBar') }}</router-link>
        <router-link to="/todos">{{ $t('headerTodo') }}</router-link>
        <router-link to="/weather">{{ $t('weatherHeader') }}</router-link>
        <router-link to="/profile">{{ $t('headerprofile') }}</router-link>
        <button @click="logout" :class="[locale === 'fa' ? 'text-right': 'text-left']">
          {{ $t('logout') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Swal from 'sweetalert2'
import { inject } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isSidebarOpen = inject('isSidebarOpen')

const logout = () => {
  Swal.fire({
    icon: 'warning',
    title: locale.value === 'fa' ? 'آیا مطمئنید لاگ اوت کنید؟' : 'are you sure?'
  }).then(() => {
    localStorage.removeItem('auth')
    localStorage.removeItem('userInfo')
  })
}
</script>
