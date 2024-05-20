<template>
  <header :class="headerClass">
    <div>
      <h2 class="dark:text-gray-200 text-center">{{ $t("titleHeader") }}</h2>
    </div>
    <div class="block sm:hidden w-6 h-6 text-black dark:text-white cursor-pointer" @click="$emit('toggleSidebar')">
      <UnorderedListOutlined class="w-6 h-6" />
    </div>
  </header>
</template>

<script>
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import { UnorderedListOutlined } from "@ant-design/icons-vue";

export default {
  name: "HeaderPanel",
  components: {
    UnorderedListOutlined,
  },
  setup() {
    const { t, locale } = useI18n();

    const headerClass = computed(() => {
      return locale.value === "fa"
        ? "absolute top-0 right-0 sm:right-[236px] left-0 flex sm:block  justify-between items-center py-4 px-4 bg-gray-200 dark:bg-zinc-700"
        : "absolute top-0 right-0 left-0 sm:left-[236px] flex  sm:block flex-row-reverse justify-between items-center py-4 px-4 bg-gray-200 dark:bg-zinc-700";
    });

    return {
      t,
      headerClass,
    };
  },
};
</script>
