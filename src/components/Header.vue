<template>
    <div :class="['absolute top-0 py-4 bg-gradient-to-r from-pinkPrimary to-purplePrimary dark:bg-zinc-700 dark:bg-none z-30', locale === 'fa' ? 'left-0 right-[220px]' : 'right-0 left-[220px]' ]">
        <h2 class="text-center text-black dark:text-white">{{$t('titleHeader')}}</h2>
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

    const {locale} = useI18n()
</script>

<style>

</style>