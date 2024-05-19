<script>
import Header from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
export default {
  name: "App",
  components: {
    Header,
    SideBar,
  },
};
</script>

<template>
  <div>
    <Header />
    <div class="relative">
      <SideBar />
      <div class="absolute top-20 left-[240px] right-0">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>