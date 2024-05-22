<template>
  <div class="py-4 px-6 bg-gradient-to-tr from-pinkPrimary to-purplePrimary dark:bg-zinc-700 dark:bg-none shadow-2xl rounded-lg">
    <div class="flex flex-col justify-center items-center child:text-black gap-4">
      <h2 class="text-2xl text-black dark:text-white">{{$t('weatherHeader')}}</h2>
      <div class="flex items-center justify-start gap-4">
        <input
          v-model="city"
          @keyup.enter="fetchWeatherData"
          class="rounded-lg py-2 px-4"
          type="text"
          :placeholder="$t('weatherPlaceHolder')"
        />
        <a-button @click.prevent="fetchWeatherData" type="primary">search</a-button>
      </div>
      <div class="flex flex-col items-center justify-center gap-4 child:text-2xl dark:child:text-white">
        <h3>{{ city ? $t("weatherCity") + " : " : "" }} {{ city }}</h3>
        <div class="flex items-center justify-start">
          <p>
            {{
              weatherInfo.temperature && weatherInfo.temperatureIcon
                ? $t("weatherTemp")  + " : "
                : ""
            }}
          </p>
          <p
            >{{ weatherInfo.temperature }} {{ weatherInfo.temperatureIcon }}</p
          >
        </div>
        <div class="flex items-center justify-start ">
          <p>
            {{
              (weatherInfo.windSpeed && weatherInfo.temperatureIcon)
                ? $t("weatherWindSpeed")  + " : "
  
                : ""
            }}
          </p>
          <p>{{ weatherInfo.windSpeed }} {{ weatherInfo.temperatureIcon }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface WeatherinfoData {
  temperature?: number
  temperatureIcon?: string
  windSpeed?: number
  windSpeedIcon?: string
}

import { ref } from 'vue'
import cities from '../data/ir.json'
import axios from 'axios'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const city = ref<string>('')
const weatherInfo = ref<WeatherinfoData>({})

const findCityData = (cityName: string) => {
  return cities.find((item) => cityName.toLowerCase() === item.city.toLowerCase())
}

const fetchWeatherData = async () => {
  const foundCity = findCityData(city.value)
  if (!foundCity) {
    alert('City not found!')
    return
  }
  try {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${foundCity.lat}&longitude=${foundCity.lng}&current_weather=true`
    )
    weatherInfo.value = {
      temperature: response.data.current_weather.temperature,
      temperatureIcon: response.data.current_weather_units.temperature,
      windSpeed: response.data.current_weather.windspeed,
      windSpeedIcon: response.data.current_weather_units.windspeed
    }
  } catch (error) {
    console.error('Error fetching weather data:', error)
    alert('Failed to fetch weather data.')
  }
}
</script>
<style>
</style>
