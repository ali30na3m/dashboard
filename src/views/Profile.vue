<template>
  <div
    :class="[
      currentTheme,
      'h-max w-max mx-7 px-4 py-2 rounded-lg shadow-lg dark:bg-zinc-700',
    ]"
  >
    <h2 class="text-center text-3xl font-bold dark:text-gray-200">
      {{ $t("headerprofile") }}
    </h2>
    <div class="flex items-center justify-start gap-4 my-7">
      <input
        v-model="username"
        class="w-[300px] text-xl py-2 px-4 rounded-xl border-gray-500 border-2 bg-white dark:bg-zinc-500 dark:text-gray-200 dark:placeholder-gray-50"
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
        <option value="light">{{$t('lightMode')}}</option>
        <option value="dark">{{$t('darkMode')}}</option>
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
      >{{ $t("saveBtnProfile") }}</a-button
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

    const saveProfileHandler = () => {
      currentTheme.value = selectedTheme.value;
      currentLanguage.value = selectedLanguage.value;

      localStorage.setItem("theme", currentTheme.value);
      localStorage.setItem("language", currentLanguage.value);

      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(currentTheme.value);
      locale.value = currentLanguage.value;
    };

    onMounted(() => {
      loadProfile();
    });

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

:root {
  --bg-color-dark: #18181b; /* Zinc 700 */
}

html.dark {
  background-color: var(--bg-color-dark);
}
</style>
