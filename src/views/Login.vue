<template>
  <div
    class="py-4 px-6 bg-gradient-to-tr from-pinkPrimary to-purplePrimary dark:bg-zinc-700 dark:bg-none shadow-2xl rounded-lg"
  >
    <h2 class="text-center text-2xl text-black dark:text-white">{{ $t('login') }}</h2>
    <form @submit.prevent="handleLogin" class="flex flex-col gap-5 mt-5">
      <div>
        <input
          v-model="username"
          type="text"
          id="username"
          placeholder="please enter username"
          required
          class="w-full px-4 py-2 border rounded-md dark:bg-zinc-500 dark:text-gray-200 dark:placeholder-gray-50"
        />
      </div>
      <div>
        <input
          v-model="password"
          type="password"
          id="password"
          placeholder="please enter password"
          required
          class="w-full px-4 py-2 border rounded-md dark:bg-zinc-500 dark:text-gray-200 dark:placeholder-gray-50"
        />
      </div>
      <button
        class="flex justify-center items-center mx-auto dark:text-gray-200 px-4 py-2 bg-blue-500 text-white rounded-md"
        type="submit"
      >
        {{ $t('saveBtnProfile') }}
      </button>
    </form>
  </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = () => {
  localStorage.setItem('userInfo', JSON.stringify([username.value, password.value]))
  localStorage.setItem('auth', 'true')
  router.push({ name: 'Dashboard' })
}
</script>
  
  <style scoped>
</style>
  