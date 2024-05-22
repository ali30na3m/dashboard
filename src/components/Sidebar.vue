<template>
  <div :class="['fixed top-0 bottom-0 bg-[#471AAA] py-2 px-4 w-[264px] z-50', locale === 'fa' ? 'right-0' : 'left-0']">
    <div>
      <h2 :class="['text-white',locale === 'fa' ? 'text-right' : '']">{{ $t("welcome") }}</h2>
      <span class="block h-[1px] bg-white mt-6"></span>
      <div :class="['flex flex-col mt-5 gap-4 child:text-white hover:child:bg-black/20 child:py-2 child:p-4 child:rounded-xl', locale === 'fa' ? 'child:text-right' : '']">
        <router-link to="/dashboard">{{ $t('dashboardSideBar') }}</router-link>
        <router-link to="/todos">{{ $t('headerTodo') }}</router-link>
        <router-link to="/weather">{{ $t('weatherHeader') }}</router-link>
        <router-link to="/profile">{{ $t('headerprofile') }}</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
</script>

<style>
</style>