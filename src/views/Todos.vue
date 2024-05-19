<template>
  <div class="h-max w-max mx-7 px-4 py-2 rounded-lg shadow-lg">
    <h2 class="text-center text-3xl font-bold">Todos</h2>
    <div class="flex items-center justify-start gap-4 my-7">
      <input
        class="text-xl py-2 px-4 rounded-xl border-gray-500 border-2 bg-slate-300"
        type="text"
        name="TodoValue"
        id="TodoValue"
      />
      <button
        class="flex items-center justify-center rounded-md bg-slate-200 text-2xl p-1"
      >
        <PlusOutlined />
      </button>
    </div>
    <div>
      <div
        class="flex items-center justify-between px-5 py-3 bg-slate-300 rounded-xl"
      >
        <div>
          <p class="text-2xl">learn js</p>
        </div>
        <button class="flex items-center justify-center text-xl p-1 rounded-lg bg-slate-100 ">
          <DeleteOutlined />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons-vue";

export default {
  name: "TodosP",
  components: {
    PlusOutlined,
    DeleteOutlined,
  },
};
</script>

<style>
</style>