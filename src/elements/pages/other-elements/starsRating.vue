<template>
   <div class="stars__rating" @mousemove="moveStarsRating" @click="rateFlag = !rateFlag">
      <div class="empty"></div>
      <div class="stars__rating__active" :style="{width: `${getStarsWidth}%`}"></div>
      <div class="stars__rating__value">{{ starsRate }}</div>
   </div>
</template>
<style scoped>
   .stars__rating {
      position: fixed;
      left: 50px;
      top: 200px;
      font-size: 50px;
      text-shadow: 1px 1px 2px #333;
   }

   .stars__rating::before {
      content: '★★★★★';
      color:#afafaf;
   }

   .empty {
      position: absolute;
      width: 20px;
      top: 18px;
      left: -20px;
      height: 40px;
   }

   .stars__rating__active {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      overflow: hidden;
   }

   .stars__rating__active::before {
      content: '★★★★★';
      color: orange;
   }

   .stars__rating__value {
      position: absolute;
      font-size: 40px;
      top: 60%;
      right: -63px;
      color: #333;
      padding-left: 10px;
      transform: translateY(-50%);
   }
</style>
<script>
   export default {
      data() {
         return {
            starsRate: 3.6,
            rateFlag: true
         }
      },
      computed: {
         getStarsWidth() {
            return 100 / 5 * this.starsRate
         }
      },
      methods: {
         moveStarsRating(e) {
            if(!this.rateFlag) return false            
            this.starsRate =  (5 / e.currentTarget.offsetWidth * e.offsetX).toFixed(1)

            if(e.target.classList.contains('empty')) {
               this.starsRate = '0.0'
            }

            if(e.target.classList.contains('stars__rating__value')) {
               this.starsRate = '5.0'
            }   
         }
      }
   }
</script>