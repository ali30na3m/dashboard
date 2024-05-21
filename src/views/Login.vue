<template>
  <div class="h-max w-max mx-7 px-4 py-2 rounded-lg shadow-lg dark:bg-zinc-700">
    <h2 class="text-center text-3xl font-bold dark:text-gray-200">Login</h2>
    <form @submit.prevent="handleLogin" class="flex flex-col gap-5 mt-5">
      <div>
        <input
          v-model="username"
          type="text"
          id="username"
          placeholder="please enter username"
          required
          class="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
        />
      </div>
      <div>
        <input
          v-model="password"
          type="password"
          id="password"
          placeholder="please enter password"
          required
          class="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
        />
      </div>
      <button
        class="flex justify-center items-center mx-auto dark:text-gray-200 px-4 py-2 bg-blue-500 text-white rounded-md"
        type="submit"
      >
        {{ $t("saveBtnProfile") }}
      </button>
    </form>
  </div>
</template>

<script >
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "LoginPage",
  setup() {

    const username = ref("");
    const password = ref("");
    const router = useRouter();

    const handleLogin = () => {
      localStorage.setItem("userInfo",JSON.stringify([username.value, password.value]));
      localStorage.setItem("auth", "true");
      router.push({ name: "Dashboard" });
    };
    return {
      handleLogin,
      username,
      password,
    };
  },
};
</script>

<style scoped>
/* Additional scoped styles can be added here if needed */
</style>
