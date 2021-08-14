<template>
   <div class="cart">      
      <div class="list">
         <CartItem class="cart__item" v-for="item in cartList"  :item="item" :key="item.id"/>
      </div>
      <div class="wrapper__row">
         <div class="back" @click="toList">Назад</div>
         <div v-if="cartList.length" class="total__price">Итого: {{ totalPrice.toLocaleString() }}</div>
      </div>
      <div v-if="!cartList.length" class="description">Нет товаров</div>
   </div>
</template>

<style scoped>

   .cart {
      position: relative;
      min-height: 300px;
      border-radius: 10px;
      box-shadow: 2px 2px 4px rgba(0,0,0,.5) inset;
      background: #fff;
      padding: 20px;
      display: flex;
      flex-direction: column;
   }

   .list {
      margin-bottom: 20px;
   }

   .description {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 30px;
   }

   .cart__item {
      margin-bottom: 5px;
   }

   .wrapper__row {
      display: flex;
      margin-top: auto;
      align-items: center;
   }

   .total__price {
      font-size: 20px;
      font-weight: bold;
      margin-left: auto;
   }

   .back {
      cursor: pointer;                
      color: #07f;
      font-size: 18px;
      letter-spacing: 1px;
   }
</style>

<script>
   import CartItem from './CartItem'
   import { mapState, mapGetters } from 'vuex'

   export default {
      components: {
         CartItem
      },
      data() {
         return {}
      },
      methods: {
         toList() {
            this.$emit('routing', 'cart');
         }
      },
      computed: {
         ...mapState('moduleStore', ['cartList']),
         ...mapGetters('moduleStore', ['totalPrice'])
      }
   }
</script>