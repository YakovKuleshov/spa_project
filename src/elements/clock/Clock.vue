<template>
   <div id="clock">
      <div class="round__clock">
         <div class="time__format">{{ getTimeFormat }}</div>
         <div class="hour__arrow" :style="{ transform: `rotate(${hourArrow}deg)` }"></div>
         <div class="minute__arrow" :style="{ transform: `rotate(${minuteArrow}deg)` }"></div>
         <div class="second__arrow" :style="{transform: `rotate(${secondArrow}deg)` }"></div>
      </div>               
      <div class="date__now">{{ getDate }}</div>
      <div class="day__now">{{ dayNow }}</div>      
   </div>
</template>
<style scoped>
   
   .round__clock {
      position: relative;
      width: 250px;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      box-sizing: border-box;
      background: url('../../../img/clock_bg.svg') no-repeat center;
      background-size: cover;
   }

   .hour__arrow {
      position: absolute;
      top: 49.2%;
      left: 42.5%;
      width: 24%;
      height: 6px;
      background: #333;
      border-radius: 0 2px 2px 0;
      box-shadow: 2px 2px 3px rgba(0, 0, 0, .7);
      transform-origin: 20px center;
   }

   .minute__arrow {
      position: absolute;
      top: 49.2%;
      left: 42.5%;
      width: 32%;
      height: 6px;
      background: #333;
      border-radius: 0 2px 2px 0;
      box-shadow: 2px 2px 3px rgba(0, 0, 0, .7);
      transform-origin: 20px center;
   }

   .second__arrow {
      left: 38.5%;
      top: 50%;
      position: absolute;
      width: 47%;
      height: 2px;
      background: red;
      box-shadow: 1px 1px 2px rgba(0, 0, 0, .5);
      transform-origin: 30px center;
      z-index: 1;
   }

   .second__arrow:before {
      content: '';
      border: 1px solid #000;
      box-sizing: border-box;
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: red;
      top: 50%;
      transform: translateY(-50%);
      box-shadow: 1px 1px 3px rgba(0, 0, 0, .7);
      left: 24px;
   }

   .second__arrow:after {
      content: '';
      position: absolute;
      width: 22px;
      height: 4px;
      border-radius: 2px;
      background: red;
      top: 50%;
      transform: translateY(-50%);
      left: -5px;
   }

   .town {
      font-size: 30px;
      letter-spacing: 1px;
      color: #fff;
      text-align: center;
      text-shadow: 2px 2px 4px black;
      font-weight: bold;
   }

   .time__format {
      position: absolute;
      top: 10px;
      right: 20px;
      color: #333;
      letter-spacing: 1px;
      font-size: 20px;
      font-weight: bold;      
   }
   
   .date__now, .day__now {           
      text-align: center;
      line-height: 23px;
      color: #333;
      font-weight: bold;
      font-size: 18px;
   }    

</style>
<script>
   export default {
      data() {
         return {
            hourArrow: 0,
            minuteArrow: 0,
            secondArrow: 0,
            timeFormat: null,
            dayNow: null,
            town: { capital: 'Москва', time: '' },
            days: [
               'Воскресенье',
               'Понедельник',
               'Вторник',
               'Среда',
               'Четверг',
               'Пятница',
               'Суббота'
            ],
            month: 
            [
               {
                  name: 'Января'
               },
               {
                  name: 'Февраля'
               },
               {
                  name: 'Марта'
               },
               {
                  name: 'Апреля'
               },
               {
                  name: 'Мая'
               },
               {
                  name: 'Июня'
               },
               {
                  name: 'Июля'
               },
               {
                  name: 'Августа'
               },
               {
                  name: 'Сентября'
               },
               {
                  name: 'Октября'
               },
               {
                  name: 'Ноября'
               },
               {
                  name: 'Декабря'
               }
            ]
         }
      },
      methods: {
         startWatch() {
            let date = new Date()

            this.minuteArrow = 6 * (date.getMinutes() + (1 / 60) * date.getSeconds()) - 90;
            this.hourArrow = 30 * ((date.getHours() - this.town.time) + (1 / 60) * date.getMinutes()) - 90;
            this.secondArrow = 6 * date.getSeconds() - 90;

            this.timeFormat = (date.getHours() - this.town.time);            
         }
      },
      computed: {
         getDate() {
            let date = new Date().toLocaleString()
            let dayNumber = date.split('.')[0]
            let month = this.month[Number(date.split('.')[1]) - 1].name
            let year = date.split('.')[2].replace(/\,\s\d{2}\:\d{2}\:\d{2}/g, '');

            this.dayNow = this.days[new Date().getDay()];

            return dayNumber + ' ' + month + ' ' + year
         },
         getTimeFormat() {
            return this.timeFormat >= 12 ? 'PM' : 'AM';
         }
      },      
      mounted() {           
         this.startWatch()
         if(this.timeFormat) {
            setInterval(() => {
               this.startWatch();
            }, 1000)
         }
      }
   }
</script>