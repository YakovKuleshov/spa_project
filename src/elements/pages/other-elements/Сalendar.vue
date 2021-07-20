<template>
   <div class="calendar__container">
      <div class="calendar">
         <div class="month">
            <div class="prev__month" @click="prevMonth"></div>
            <div class="date">               
               <p>{{ new Date().toLocaleDateString([], 
                     {                   
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                     }) 
                  }}
               </p>
            </div>
            <div class="next__month" @click="nextMonth"></div>
            <div class="selected__date">{{ selectedDate }}</div>
            <div class="year__select" @click="dropToggle">{{ getYear }}
               <div class="arrow"></div>
               <div class="dropdown" ref="yearDropdown">
                  <div v-for="item in yearsList.slice().reverse()" class="drop__item" :class="{ disabled: getYear == item }" :key="item" @click="selectYear(item)">{{ item }}</div>
               </div>
            </div>
         </div>
         <div class="weekdays">
            <div>Пн</div>
            <div>Вт</div>
            <div>Ср</div>
            <div>Чт</div>
            <div>Пт</div>
            <div>Сб</div>
            <div>Вс</div>
         </div>
         <div class="days">
            <div v-for="day in prevMonthDays" class="day__item prev-date" :key="`id_${day}`">{{ day }}</div>
            <div v-for="item in monthList" 
               class="day__item" 
               :class="{ today: item == date.getDate() }" 
               :key="item" @click="selectDate(item)">
               {{ item }}
            </div>
            <div v-for="day in nextMonthDays" class="day__item next-date" :key="`_${day}`">{{ day }}</div>           
         </div>
      </div>
   </div>
</template>
<style scoped>   
   
   .calendar__container {      
      max-width: 600px;      
      margin: 0 auto;
      background-color: #12121f;
      color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   .calendar {
      width: 100%;
      height: 100%;
      background-color: #222227;
      box-shadow: 0 0.5rem 3rem rgba(0, 0, 0, 0.4);
   }

   .month {      
      height: 70px;
      background-color: #0299ae;
      display: flex;      
      align-items: center;
      padding: 0 2rem;
      text-align: center;
      text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
      box-sizing: border-box;
   }

   .prev__month  {      
      cursor: pointer;
      width: 20px;
      height: 20px;
      border-left: 2px solid #fff;
      border-bottom: 2px solid #fff;
      transform: rotate(45deg);
   }

   .next__month  {      
      cursor: pointer;
      width: 20px;
      height: 20px;
      border-right: 2px solid #fff;
      border-bottom: 2px solid #fff;
      transform: rotate(-45deg);
   }

   .selected__date {
      margin-left: auto;
   }
   
   p {
      font-size: 25px;
      margin: 0;
   }

   .weekdays {
      width: 100%;
      height: 50px;      
      display: flex;
      align-items: center;
   }

   .weekdays div {
      font-size: 1.5rem;
      height: 100%;
      font-weight: 400;
      letter-spacing: 0.1rem;
      width: calc(100% / 7);
      display: flex;
      justify-content: center;
      align-items: center;
      text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
   }

   .days {
      width: 100%;
      display: flex;
      flex-wrap: wrap;      
   }

   .day__item {
      font-size: 1.4rem;     
      width: calc(100% / 7);
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
      transition: background-color 0.2s;
      box-sizing: border-box;
   }

   .day__item:hover:not(.today) {
      background-color: #262626;
      border: 0.2rem solid #777;
      cursor: pointer;
   }

   .year__select {
      margin-left: 10px;
      position: relative;
      cursor: pointer;
   }

   .arrow {
      display: inline-block;
      width: 9px;
      height: 9px;
      border-left: 1px solid #fff;
      border-bottom: 1px solid #fff;
      margin-left: 5px;
      transform: rotate(-45deg);
   }

   .dropdown {
      cursor: auto;
      position: absolute;
      display: none;
      top: 150%;
      right: 0;
      width: 140px;
      background: #25323b;
      text-align: left;
      max-height: 250px;
      overflow-y: auto;
      box-shadow: 10px 13px 20px rgb(0 0 0 / 50%);
      z-index: 1;
   }

   .dropdown::-webkit-scrollbar {
      width: 8px;
   }

   .dropdown::-webkit-scrollbar-thumb {      
      background: #334552;
      border-radius: 5px;
   }

   .drop__item {
      cursor: pointer;
      padding: 10px;
   }

   .active {
      display: block;
   }

   .disabled {
      pointer-events: none;
      opacity: 0.5;
   }

   .prev-date,
   .next-date {
      pointer-events: none;
      opacity: 0.5;
   }

   .today {
      background-color: #0a8052;
      text-shadow: 3px 4px 6px #000;
   }
</style>
<script>
export default {
   data() {
      return {         
         date: new Date(),
         firstDayOfMonth: '',
         monthList: '',
         prevLastDay: '',         
         lastDayIndex: '',
         nextDays: 0,
         current: null,
         currentYear: new Date().getFullYear(),
         yearsList: [],
         months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
         update(current) {        
            let year = this.currentYear.toString().split('').splice(2).join('');                
            this.monthList = new Date(year, current + 1, 0).getDate();             
            this.firstDayOfMonth = new Date(year, current, 0).getUTCDay();
            this.prevLastDay = new Date(year, current, 0).getDate();
            this.nextDays = 42 - (this.prevMonthDays.length + this.monthList);         
         }        
      };
   },  
   watch: {
      current(val) {
         this.update(val);         
      }
   },
   computed: {     
      prevMonthDays() {
         const days = [];
         for (let i = this.firstDayOfMonth; i > 0 ; i--) {                
            days.push(this.prevLastDay - i + 1)
         }
         return days;
      },
      nextMonthDays() {
         const days = []
         for (let i = 1; i <= this.nextDays; i++) {
            days.push(i)            
         }         
         return days;       
      },
      selectedDate() {        
         return this.months[this.current]
      },
      getYear() {         
         return new Date(this.currentYear, 1, 1).toLocaleDateString([], {
            year: 'numeric'
         })
      }
   },
   methods: {
      selectDate(item) {         
         this.date.setDate(item);         
         this.update(this.current);
      },
      dropToggle(e) {
         this.$refs.yearDropdown.classList.toggle('active');
         e.stopPropagation();
      },
      selectYear(item) {
         this.currentYear = item;         
         this.update(this.current);
      },
      nextMonth() {        
         this.current++;                   
            if(this.current > this.months.length - 1) {
            this.current = 0;            
         }                  
      },
      prevMonth() {
         this.current--;
         if(this.current < 0) {
            this.current = this.months.length - 1;
         }         
      },
      closeDropdown() {         
         this.$refs.yearDropdown.classList.remove('active');
      }     
   },
   mounted() {            
      this.current = this.date.getMonth();    
      for(let i = 1970; i <= new Date().getFullYear(); i++) {
         this.yearsList.push(i);
      }      

      window.addEventListener('click', this.closeDropdown);
   },
   destroyed() {      
      window.removeEventListener('click', this.closeDropdown);
   }
};
</script>