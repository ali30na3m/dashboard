<template>
  <div class="py-4 px-6 bg-gradient-to-tr from-pinkPrimary to-purplePrimary dark:bg-zinc-700 dark:bg-none shadow-2xl rounded-lg">
    <div class="flex flex-col justify-center items-center gap-5">
      <h2 class="text-2xl text-black dark:text-white">{{$t('headerTodo')}}</h2>
      <div class="flex items-center justify-center child:text-black dark:child:text-white gap-3">
        <input
          @keyup.enter="addTodo"
          v-model="todoTitle"
          class="rounded-lg py-2 px-4 dark:!text-black"
          type="text"
          name="todoValue"
          id="todoValue"
          :placeholder="$t('placeHolderTodo')"
        />
        <button
          @click.prevent="addTodo"
          class="flex items-center justify-center rounded-md child:text-white text-2xl p-1"
        >
          <PlusCircleFilled />
        </button>
      </div>
      <div v-for="todo in todos" :key="todo.id" class="w-full">
        <div
          class="flex items-center justify-between px-5 py-3 bg-black/20 dark:bg-zinc-600 rounded-xl"
        >
          <div>
            <p class="text-2xl dark:text-white">{{ todo.title }}</p>
          </div>
          <button
            @click="removeTodo(todo.id)"
            class="flex items-center justify-center text-xl p-1 rounded-lg text-black bg-slate-100"
          >
            <DeleteOutlined />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
interface TodoInfos {
  id: string
  title: string
  isComplete: boolean
}

import { DeleteOutlined, PlusCircleFilled } from '@ant-design/icons-vue'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const todos = ref<TodoInfos[]>([])
const todoTitle = ref<string>('')

const setLocalStorage = (todos: TodoInfos[]) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

const getLocalStorage = () => {
  const todosString = localStorage.getItem('todos')

  if (todosString) {
    todos.value = JSON.parse(todosString)
  }
}

const addTodo = () => {
  if (todoTitle.value.trim() !== '') {
    todos.value.push({
      id: crypto.randomUUID(),
      title: todoTitle.value,
      isComplete: false
    })
    setLocalStorage(todos.value)
  }
  todoTitle.value = ''
}

const removeTodo = (id: string) => {
  todos.value = todos.value.filter((todo) => todo.id !== id)
  setLocalStorage(todos.value)
}

onMounted(() => {
  getLocalStorage()
})
</script>

<style>
</style>