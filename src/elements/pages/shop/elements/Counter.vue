<template>
   <div class="counter">
      <div class="counter__button" @click="minus(item.id)">-</div>
      <div class="counter__value">{{ item.count }}</div>
      <div class="counter__button" @click="plus(item.id)">+</div>
   </div>
</template>

<style scoped>
   .counter {
      width: 120px;
      height: 35px;
      border-radius: 5px;
      border: 1px solid #f0f0f0;
      background: #dddddd;
      display: flex;
   }

   .counter__value {
      font-size: 20px;
      flex-grow: 1;
      text-align: center;
      line-height: 35px;
   }

   .counter__button {
      font-size: 20px;
      cursor: pointer;
      flex-shrink: 0;
      text-align: center;
      line-height: 35px;
      width: 35px;      
   }

   .counter__button:nth-of-type(1) {
      border-right: 1px solid #ccc;
   }

   .counter__button:nth-of-type(3) {
      border-left: 1px solid #ccc;
   }

</style>

<script>
   import { mapMutations } from 'vuex'

   export default {
      props: ['item'],
      data() {
         return {
            count: ''
         }
      },
      methods: {
         ...mapMutations('moduleStore', ['minus', 'plus'])         
      }
   }
</script>