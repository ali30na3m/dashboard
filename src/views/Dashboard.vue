<template>
  <div class="h-max w-max mx-7 px-4 py-2 rounded-lg shadow-lg dark:bg-zinc-700"
  >
    <h2 class="text-center text-3xl font-bold dark:text-gray-200">{{ currentTime }}</h2>
    <p class="mt-9 text-center text-3xl font-bold dark:text-gray-200">hello dear ali30na</p>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "DashboardP",
  setup() {
    const currentTime = ref(new Date().toLocaleTimeString());

    const updateTime = () => {
      currentTime.value = new Date().toLocaleTimeString();
    };

    let intervalId;

    onMounted(() => {
      intervalId = window.setInterval(updateTime, 1000);
    });

    onUnmounted(() => {
      clearInterval(intervalId);
    });

    return {
      currentTime,
    };
  },
});
</script>

<style>
</style>
