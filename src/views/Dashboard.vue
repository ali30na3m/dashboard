<template>
  <div class="h-max w-max mx-7 px-4 py-2 rounded-lg shadow-lg"
  >
    <h2 class="text-center text-xl">{{ currentTime }}</h2>
    <p class="text-center mt-9 text-3xl">hello dear ali30na</p>
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
