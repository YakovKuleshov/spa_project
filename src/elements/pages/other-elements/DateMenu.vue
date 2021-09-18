<template>
   <div class="menu__conteiner">
      <h2 class="menu__title">{{ selectedDate }}</h2>
      <div class="days__list">         
         <div v-for="day in finalList" class="day__item" :class="{ active: day === currentDay }" :key="day" @click="selectDay(day)">{{ isCurrentDay(day) }}</div>
      </div>
   </div>
</template>

<style scoped>

   .menu__title {
      margin-bottom: 20px;
   }

   .days__list {
      display: flex;
      justify-content: center;      
      margin: 0 auto;
      /* border: 1px solid #000; */
   }

   .day__item {
      padding: 4px 15px;
      font-size: 30px;
      cursor: pointer;
      border: 1px solid transparent;
      border-radius: 5px;
      box-sizing: border-box;
      margin-right: 20px;
   }   
   
   .active {
      border: 1px solid #333;
   }
</style>

<script>
   export default {
      data() {
         return {
            currentNumber: +new Date().toLocaleString([], { day: 'numeric' }),            
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            daysInNextMonth: 0,
            daysInCurrentMonth: 0,
            daysInPrevMonth: 0,
            nextDaysMax: 7,
            currentDay: new Date().getDate(),
            daysList: [
               {
                  short: 'Вс'
               },
               {
                  short: 'Пн'
               },
               {
                  short: 'Вт'
               },
               {
                  short: 'Ср'
               },
               {
                  short: 'Чт'
               },
               {
                  short: 'Пт'
               },
               {
                  short: 'Суб'
               }
            ],            
            remainingDayList: [],
            nextMonthDays: [],
            prevDays: [],
            prevMonthDays: [],            
         }
      },
      methods: {
         selectDay(day) {
            this.currentDay = day;
         },
         isCurrentDay(day) {
            const index = new Date(this.year, this.month, day).getDay();
            return day === this.currentNumber ? 'Сегодня' : this.daysList[index].short + ', ' + day;
         }
      },
      computed: {
         selectedDate() {
            return new Date(this.year, this.month, this.currentNumber).toLocaleDateString([], {                   
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                     })
         },
         isLastMonth() {
            return this.month === 11;
         },
         isFirstMonth() {
            return this.month === 0;
         },
         getRemainingDays() {
            return (this.daysInCurrentMonth - (this.currentNumber + this.nextDaysMax)) < 0 ? this.currentNumber + (this.daysInCurrentMonth - this.currentNumber) : this.daysInCurrentMonth - (this.daysInCurrentMonth - (this.currentNumber + this.nextDaysMax));
         },      
         getPrevDays() {
            return this.daysInCurrentMonth - (this.daysInCurrentMonth - ( this.currentNumber - 2));            
         },
         finalList() {
            return [...this.prevMonthDays, ...this.prevDays, ...this.remainingDayList, ...this.nextMonthDays];
         }
      },
      created() {
         this.daysInNextMonth = new Date(this.isLastMonth ? this.year + 1 : this.year, this.isLastMonth ? 1 : this.month + 1, 0).getDate();         
         this.daysInCurrentMonth = new Date(this.year, this.month + 1, 0).getDate();
         this.daysInPrevMonth = new Date(this.isFirstMonth ? this.year - 1 : this.year, this.isFirstMonth ? 12 : this.month - 1, 0).getDate();
      },      
      mounted() {            
            
         for(let i = this.currentNumber; i <= this.getRemainingDays; i++) {
            this.remainingDayList.push(i)
         }    
         
         for(let i = 1; i < this.nextDaysMax - this.remainingDayList.length; i++) {
            this.nextMonthDays.push(i);
         }         
       
         for(let i = this.getPrevDays; i < this.currentNumber; i++) {            
            if(i > 0) this.prevDays.push(i);            
         }  
         
         for(let i = this.daysInPrevMonth - 1 + this.prevDays.length; i <= this.daysInPrevMonth; i++) {
            if(this.prevDays.length < 2) this.prevMonthDays.push(i)
         }      
      }
   }
</script>