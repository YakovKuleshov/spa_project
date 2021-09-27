<template>
   <div class="calendar">
      <div class="calendar__header">
         <div class="calendar__chevron prev__chevron" @click="prevMonth"></div>
         <div class="calendar__title">{{ dateValue }}</div>
         <div class="calendar__chevron next__chevron" @click="nextMonth"></div>
      </div>
      <div class="calendar__row">
         <div class="calendar__aside">
            <div class="calendar__aside__item">1</div>
            <div class="calendar__aside__item">2</div>
            <div class="calendar__aside__item">3</div>
            <div class="calendar__aside__item">4</div>
            <div class="calendar__aside__item">5</div>
            <div class="calendar__aside__item">6</div>
         </div>
         <div class="calendar__content">
            <div class="content__header">
               <div class="header__title">Пн</div>
               <div class="header__title">Вт</div>
               <div class="header__title">Ср</div>
               <div class="header__title">Чт</div>
               <div class="header__title">Пт</div>
               <div class="header__title">Сб</div>
               <div class="header__title">Вс</div>
            </div>
            <div class="week__days">
               <div v-for="date in monthList"
                  :key="date.format('DDMMYYYY')"
                  class="day__item"
                  :class="{
                     today: isCurrentDay(date),
                     not__current__month: notThisMonthDays(date.format('MM')),
                     selected__one: val_1 && isEqual(val_1, date),
                     selected__two: val_2 && isEqual(val_2, date),
                     is__before: beforeVal(date),
                     is__after: afterVal(date),
                     laighter: isInDapazone(date),
                  }"
                  @click="selectDate(date)"
                  @mouseover="overMouse(date)"
               >
                  {{ date.format("D") }}
               </div>
            </div>
         </div>
      </div>
      <button class="primary" @click="selectedDates" :disabled="!val_1 && val_2">
         Выбрать
      </button>
   </div>
</template>
<style scoped>
.primary {
	margin-top: auto;
	height: 36px;
	outline: none;
	border: none;
	color: #fff;
	background: #07f;
	border-radius: 4px;
	cursor: pointer;
}

button:disabled {
	pointer-events: none;
	opacity: .7;
}

.calendar {
	width: 281px;
	padding: 30px 20px;
	box-shadow: 2px 6px 16px rgba(5,2,55,0.1);
	border-radius: 4px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
}

.calendar {
	height: 310px;
	background: #fff;
}

.calendar__header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
}

.calendar__chevron {
	width: 16px;
	height: 16px;
	cursor: pointer;
	background: url("../../../../img/chevron.svg") no-repeat center;
	background-size: contain;
}

.next__chevron {
	transform: scale(-1);
}

.calendar__title {
	font-size: 14;
	line-height: 22px;
	color: #333;
	font-weight: bold;
	text-transform: capitalize;
}

.header__title {
	font-weight: bold;
	font-size: 12px;
	line-height: 19px;
	color: #333;
	width: calc(100% / 7);
	text-align: center;
}

.calendar__row {
	display: flex;
}

.calendar__aside {
	display: flex;
	flex-direction: column;
	margin-right: 17px;
	padding-bottom: 3px;
}

.calendar__aside__item {
	width: 18px;
	height: 17px;
	background: #dedede;
	margin-bottom: 4px;
	font-size: 12px;
	color: #7b7b85;
	text-align: center;
	line-height: 17px;
}

.calendar__aside__item:nth-child(1) {
	margin-top: auto;
}

.calendar__aside__item:last-of-type {
	margin-bottom: 0;
}

.calendar__content {
	flex-grow: 1;
}

.content__header {
	display: flex;
	justify-content: space-between;
	margin-bottom: 11px;
}

.week__days {
	display: flex;
	flex-wrap: wrap;
}

.day__item {
	width: calc(100% / 7);
	font-size: 12px;
	line-height: 19.6px;
	text-align: center;
	color: #3c3c47;
	box-sizing: border-box;
	border: 1px solid transparent;
	cursor: pointer;
	font-weight: bold;
}

.today {
	box-shadow: 0 0 0 2px #07f inset;
}

.not__current__month {
	opacity: .5;
}

.laighter {
	background: #9ad5ff;
	opacity: .5;
}
	

.selected__one, .selected__two {
	background: #07f;
	color: #fff;
}

.is__before {
	border-radius: 4px 0 0 4px;
}

.is__after {
	border-radius: 0 4px 4px 0;
}

</style>
<script>
import moment from "moment";
moment.updateLocale("ru", { week: { dow: 1 } });

export default {
   name: "range-data-picker",
   data() {
      return {
         val_1: "",
         val_2: "",
         totalDays: 42,
         current: 2,
         today: moment(),
         flag: false,
      };
   },
   methods: {
      selectDate(date) {
         if (date.isBefore(moment()) && !this.val_2) {
            this.val_1 = date;
            this.flag = true;
         } else if (this.val_2 && this.flag) {
            this.flag = false;
         } else if (!this.flag) {
            this.flag = true;
            this.val_1 = "";
            this.val_2 = "";
         }
      },
      overMouse(date) {
         if (!this.flag) return false;
         if (this.val_1 && date.isBefore(moment())) this.val_2 = date;
      },
      isCurrentDay(day) {
         return moment().isSame(day, "day");
      },
      notThisMonthDays(month) {
         return this.today.format("MM") !== month;
      },
      prevMonth() {
         this.today = this.today.clone().subtract(1, "month");
      },
      nextMonth() {
         this.today = this.today.clone().add(1, "month");
      },
      isInDapazone(date) {
         if (date.isAfter(this.val_1) && date.isBefore(this.val_2)) return true;
         if (date.isBefore(this.val_1) && date.isAfter(this.val_2)) return true;
      },
      beforeVal(date) {
         if (this.val_1 && this.val_2 && this.isEqual(this.val_1, date) && this.val_1.isBefore(this.val_2)) return true;
         if (this.val_1 && this.val_2 && this.isEqual(this.val_2, date) && this.val_2.isBefore(this.val_1)) return true;
      },
      afterVal(date) {
         if (this.val_1 && this.val_2) {
            if (this.isEqual(this.val_1, date) && this.val_1.isAfter(this.val_2)) return true;
            if (this.isEqual(this.val_2, date) && this.val_2.isAfter(this.val_1)) return true;
         }
      },
      isEqual(val, date) {
         return val.format("DD.MM.YYYY") === date.format("DD.MM.YYYY");
      },
      selectedDates() {
         const dateRange = {
            start: this.val_1.isBefore(this.val_2)
               ? this.val_1.format("DD.MM.YYYY")
               : this.val_2.format("DD.MM.YYYY"),
            end: this.val_2.isAfter(this.val_1)
               ? this.val_2.format("DD.MM.YYYY")
               : this.val_1.format("DD.MM.YYYY"),
         };
         console.log(dateRange)
      },
   },
   computed: {
      startDay() {
         return this.today.clone().startOf("month").startOf("week");
      },
      dateValue() {
         return this.today.format("MMMM YYYY");
      },
      monthList() {
         const day = this.startDay.clone().subtract(1, "day");
         return [...Array(this.totalDays)].map(() => day.add(1, "day").clone());
      },
   },
};
</script>
