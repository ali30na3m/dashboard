<template>
  <div class="h-max w-max mx-7 px-4 py-2 rounded-lg shadow-lg dark:bg-zinc-700">
    <h2 class="text-center text-3xl font-bold dark:text-gray-200">
      {{ $t("weatherHeader") }}
    </h2>
    <div class="flex items-center justify-start gap-4 my-7">
      <input
        v-model="city"
        class="w-[300px] text-xl py-2 px-4 rounded-xl border-gray-500 border-2 bg-white dark:bg-zinc-500 dark:text-gray-200 dark:placeholder-gray-50"
        type="text"
        name="weatherValue"
        id="weatherValue"
        @keyup.enter="fetchWeatherData"
        :placeholder="$t('weatherPlaceHolder')"
      />
      <a-button type="primary" @click="fetchWeatherData">{{
        $t("weatherSearchBtn")
      }}</a-button>
    </div>
    <div
      class="flex flex-col items-center justify-center gap-4 child:text-2xl child:dark:text-white"
    >
      <h3>{{ city ? $t("weatherCity") + " : " : "" }} {{ city }}</h3>
      <div class="flex items-center justify-start">
        <p>
          {{
            weatherData.temperature && weatherData.temperatureUnit
              ? $t("weatherTemp")  + " : "
              : ""
          }}
        </p>
        <p
          >{{ weatherData.temperature }} {{ weatherData.temperatureUnit }}</p
        >
      </div>
      <div class="flex items-center justify-start ">
        <p>
          {{
            (weatherData.weather && weatherData.weatherUnit)
              ? $t("weatherWindSpeed")  + " : "

              : ""
          }}
        </p>
        <p>{{ weatherData.weather }} {{ weatherData.weatherUnit }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import cityInfo from "../data/ir";

export default {
  name: "WeatherComponent",
  setup() {
    const { t } = useI18n();

    const city = ref("");
    const weatherData = ref({});

    const findCityData = (cityName) => {
      return cityInfo.find(
        (item) => cityName.toLowerCase() === item.city.toLowerCase()
      );
    };

    const fetchWeatherData = async () => {
      const foundCity = findCityData(city.value);

      if (foundCity) {
        try {
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${foundCity.lat}&longitude=${foundCity.lng}&current_weather=true`
          );
          const data = await response.json();

          weatherData.value = {
            temperature: data.current_weather.temperature,
            temperatureUnit: data.current_weather_units.temperature,
            weather: data.current_weather.windspeed,
            weatherUnit: data.current_weather_units.windspeed,
          };
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      } else {
        console.error("City not found in cityInfo.");
      }
    };

    return {
      city,
      weatherData,
      fetchWeatherData,
      t,
    };
  },
};
</script>

<style scoped>
/* You can add your custom styles here */
</style>
