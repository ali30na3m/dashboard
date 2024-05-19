<template>
  <div class="h-max w-max mx-7 px-4 py-2 rounded-lg shadow-lg">
    <h2 class="text-center text-3xl font-bold">Weather</h2>
    <div class="flex items-center justify-start gap-4 my-7">
      <input class="text-xl py-2 px-4 rounded-xl border-gray-500 border-2 bg-slate-300" type="text" name="weatherValue" id="weatherValue" />
      <a-button type="primary">search</a-button>
    </div>
    <div class="flex flex-col items-center justify-center gap-4 child:text-2xl ">
      <h3>Tehran</h3>
      <p>16 °c</p>
      <p>windy</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherP",
};
</script>
