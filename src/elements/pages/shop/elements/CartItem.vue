<template>
   <div class="cart__item">
      <div class="image" :style="{ backgroundImage: `url(${item.image})` }"></div>
      <div class="product__name">{{ item.name }}</div>
      <Counter class="counter" :item="item"/>
      <div class="price">{{ Number(item.price).toLocaleString() }}</div>
      <div class="remove" @click="removeFromCart(item.id)"></div>
   </div>
</template>

<style scoped>

   .cart__item {
      height: 50px;
      display: flex;
      align-items: center;
      background: linear-gradient(to left, #60b1f6 20%, #6fe1bc 100%);
      padding: 0 10px;
      border-radius: 5px;
      box-shadow: 2px 2px 4px rgb(0,0,0,.6);
   } 

   .image {
      width: 80px;
      height: 40px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border-radius: 5px;
      margin-right: 10px;
      flex-shrink: 0;
   }

   .product__name {
      font-weight: bold;
   }
   
   .counter {
      margin-left: auto;
   }

   .price {
      margin-left: 100px;
      width: 100px;
      font-weight: bold;
   }

   .remove {        
      position: relative;  
      cursor: pointer;
      width: 30px;
      height: 30px;
      border-radius: 3px;
      background: url('../../../../../img/delete.svg') no-repeat center;      
      background-size: cover;
      margin-left: 100px;
   }   

</style>

<script>
import Counter from './Counter.vue'
import { mapMutations } from 'vuex'

   export default {
   components: { Counter },
      props: ['item'],
      data() {
         return {}
      },
      methods: {
         ...mapMutations('moduleStore', ['removeFromCart'])
      }
   }
</script>