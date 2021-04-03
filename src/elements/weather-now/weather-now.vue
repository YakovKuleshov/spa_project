<template>
  <div v-if="weather" class="main">
    <div class="wrapper__row">
      <div class="value">{{ getWeatherVal }}</div>
      <div class="icon" :style="{ background: 'url(img/' + getIcon + '.png) no-repeat center', backgroundSize: 'contain' }"></div>
    </div>
    <div class="desciption">{{ getDescription }}</div>
  </div>
</template>

<style scoped>
.main {
  padding: 2px 10px 6px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  font-weight: bold;
  color: #333;
  width: 150px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7) inset;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: 30px;
  left: 300px;
  box-sizing: border-box;
}

.wrapper__row {
  display: flex;
  align-items: center;
}

.value {
  font-size: 38px;
}

.icon {
  width: 70px;
  height: 50px;
  margin-left: auto;
}

.desciption {
  font-size: 16px;
  text-align: center;
  margin-top: 2px;
  letter-spacing: .3px;
}
</style>
<script>
export default {
  data() {
    return {
      weather: "",
      weatherConditions: [
        {
          type: "Clear",
          name: "Ясно"
        },
        {
          type: "Clouds",
          name: "Облачно"
        },
        {
          type: "Rain",
          name: "Дождь"
        },
        {
          type: "Drizzle",
          name: "Дождь"
        },
        {
          type: "Thunderstorm",
          name: "Гроза"
        },
        {
          type: "Snow",
          name: "Снег"
        },
        {
          type: "Mist",
          name: "Туман"
        },
        {
          type: "Smoke",
          name: "Туман"
        }
      ]
    };
  },
  methods: {},
  computed: {

    getWeatherVal() {
      return Math.round(this.weather.main.temp - 273.15) + '°'
    },

    getDescription() {
      let elems = this.weatherConditions.filter(el => el.type == this.weather.weather[0].main);
      return elems && elems.length ? elems[0].name : "";
    },

    getIcon() {
      return this.weather.weather[0].icon
    }
  },
  mounted() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Moscow&APPID=12594a2144aa9c83dfdc5b5b4f7c3b93")
      .then(response => response.json())
      .then(res => {
        this.weather = res;
      });
  }
};
</script>
