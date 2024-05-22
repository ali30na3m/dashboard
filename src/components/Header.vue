<template>
    <div :class="['absolute top-0 right-0 left-0 flex items-center justify-between px-5 py-3 bg-gradient-to-r from-pinkPrimary to-purplePrimary dark:bg-zinc-700 dark:bg-none z-30', locale === 'fa' ? 'sm:left-0 sm:right-[220px]' : 'flex-row-reverse sm:right-0 sm:left-[220px]' ]">
        <div class="sm:text-center sm:w-full">
            <h2 class="dark:text-gray-200 text-center">{{ $t("titleHeader") }}</h2>
          </div>
          <div class="block sm:hidden w-6 h-6 text-black dark:text-white cursor-pointer" @click="$emit('toggleSidebar')">
            <UnorderedListOutlined class="w-6 h-6" />
          </div>
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import {UnorderedListOutlined} from '@ant-design/icons-vue'
    const {locale} = useI18n()
</script>

<style>

</style>