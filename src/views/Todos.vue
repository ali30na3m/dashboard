<template>
  <div class="h-max w-max mx-7 px-4 py-2 rounded-lg shadow-lg dark:bg-zinc-700">
    <h2 class="text-center text-3xl font-bold dark:text-gray-200">{{ $t("headerTodo") }}</h2>
    <div class="flex items-center justify-start gap-4 my-7">
      <input
        class="w-[300px] text-xl py-2 px-4 rounded-xl border-gray-500 border-2 bg-white dark:bg-zinc-500 dark:text-gray-200 dark:placeholder-gray-50"
        type="text"
        v-model="newTodo"
        @keyup.enter="addTodo"
        :placeholder="$t('placeHolderTodo')"
      />
      <button
        class="flex items-center justify-center rounded-md bg-slate-200 text-2xl p-1"
        @click="addTodo"
      >
        <PlusOutlined />
      </button>
    </div>
    <div v-for="(todo, index) in todos" :key="index" class="mb-4">
      <div
        class="flex items-center justify-between px-5 py-3 bg-slate-300 dark:bg-zinc-600 rounded-xl"
      >
        <div>
          <p class="text-2xl dark:text-white">{{ todo }}</p>
        </div>
        <button
          class="flex items-center justify-center text-xl p-1 rounded-lg bg-slate-100"
          @click="removeTodo(index)"
        >
          <DeleteOutlined />
        </button>
      </div>
    </div>
  </div>
</template>



<script >
import { defineComponent, ref, onMounted } from 'vue';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: 'TodosP',
  components: {
    PlusOutlined,
    DeleteOutlined,
  },
  setup() {
    const { t } = useI18n();
    const newTodo = ref('');
    const todos = ref([]);

    const loadTodos = () => {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        todos.value = JSON.parse(storedTodos);
      }
    };

    const saveTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos.value));
    };

    const addTodo = () => {
      if (newTodo.value.trim() !== '') {
        todos.value.push(newTodo.value);
        newTodo.value = '';
        saveTodos();
      }
    };

    const removeTodo = (index) => {
      todos.value.splice(index, 1);
      saveTodos();
    };

    onMounted(() => {
      loadTodos();
    });

    return {
      newTodo,
      todos,
      addTodo,
      removeTodo,
      t
    };
  },
});
</script>



<style>
</style>