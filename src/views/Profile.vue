<template>
  <div class="h-max w-max mx-7 px-4 py-2 rounded-lg shadow-lg">
    <h2 class="text-center text-3xl font-bold">Profile</h2>
    <div class="flex items-center justify-start gap-4 my-7">
      <input
        class="text-xl py-2 px-4 rounded-xl border-gray-500 border-2 bg-slate-300"
        type="text"
        name="TodoValue"
        id="TodoValue"
      />
    </div>
    <div class="flex flex-col gap-4 mb-4">
      <select name="theme" id="theme">
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
      <select name="language" id="language">
        <option value="english">English</option>
        <option value="persian">فارسی</option>
      </select>
    </div>
    <a-button class="flex justify-center items-center mx-auto" type="primary">save</a-button>
  </div>
</template>

<script>
export default {
  name: "ProfileP",
};
</script>

<style>
</style>