<template>
  <div
    :class="[
      currentTheme,
      'h-max w-max mx-7 px-4 py-2 rounded-lg shadow-lg dark:bg-zinc-700',
    ]"
  >
    <h2 class="text-center text-3xl font-bold dark:text-gray-200">
      {{ $t("profile") }}
    </h2>
    <div class="flex items-center justify-start gap-4 my-7">
      <input
        v-model="username"
        class="w-[300px] text-xl py-2 px-4 rounded-xl border-gray-500 border-2 bg-white dark:bg-zinc-500 dark:text-gray-200"
        type="text"
        name="TodoValue"
        id="TodoValue"
        :placeholder="$t('usernamePlaceHolder')"
      />
    </div>
    <div class="flex flex-col gap-4 mb-4">
      <select
        v-model="selectedTheme"
        name="theme"
        id="theme"
        class="py-2 px-4 rounded-xl text-gray-800 dark:bg-zinc-600 dark:text-gray-200"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <select
        v-model="selectedLanguage"
        name="language"
        id="language"
        class="py-2 px-4 rounded-xl text-gray-800 dark:bg-zinc-600 dark:text-gray-200"
      >
        <option value="en">English</option>
        <option value="fa">فارسی</option>
      </select>
    </div>
    <a-button
      class="flex justify-center items-center mx-auto dark:text-gray-200"
      @click="saveProfileHandler"
      type="primary"
      >{{ $t("save") }}</a-button
    >
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "ProfileP",
  setup() {
    const { t, locale } = useI18n();

    // متغیرهای وضعیت
    const username = ref("");
    const currentTheme = ref("light");
    const selectedTheme = ref("light");
    const currentLanguage = ref("en");
    const selectedLanguage = ref("en");

    // متد برای بارگذاری پروفایل
    const loadProfile = () => {
      const savedTheme = localStorage.getItem("theme");
      const savedLanguage = localStorage.getItem("language");

      if (savedTheme) {
        currentTheme.value = savedTheme;
        selectedTheme.value = savedTheme;
        document.documentElement.classList.add(savedTheme);
      }

      if (savedLanguage) {
        currentLanguage.value = savedLanguage;
        selectedLanguage.value = savedLanguage;
        locale.value = savedLanguage;
      }
    };

    // متد برای ذخیره تغییرات پروفایل
    const saveProfileHandler = () => {
      // اعمال تغییرات تم و زبان تنها پس از کلیک روی دکمه "ذخیره"
      currentTheme.value = selectedTheme.value;
      currentLanguage.value = selectedLanguage.value;

      // ذخیره در localStorage
      localStorage.setItem("theme", currentTheme.value);
      localStorage.setItem("language", currentLanguage.value);

      // اعمال تنظیمات به document
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(currentTheme.value);
      locale.value = currentLanguage.value;
    };

    // بارگذاری اولیه
    onMounted(() => {
      loadProfile();
    });

    // برگرداندن متغیرها و متدها برای استفاده در قالب
    return {
      username,
      currentTheme,
      selectedTheme,
      currentLanguage,
      selectedLanguage,
      saveProfileHandler,
      t,
    };
  },
};
</script>

<style>
body {
  transition: background-color 0.3s ease, color 0.3s ease;
}

:root {
  --bg-color-dark: #18181b; /* Zinc 700 */
}

html.dark {
  background-color: var(--bg-color-dark);
}
</style>
