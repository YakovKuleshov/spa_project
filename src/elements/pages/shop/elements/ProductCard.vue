<template>
   <div class="card" :class="view">
      <div class="image" :style="{ backgroundImage: `url(${ item.image })` }"></div>
      <div class="text__container">
         <div class="card__title">{{ item.name }}</div>
         <div class="wrapper__row">
            <div class="card__button" :class="{ in__cart:  isInCart }" @click="toCart">{{ isInCart ? 'Удалить' : 'В корзину' }}</div>
            <div class="card__price">Цена: {{ Number(item.price).toLocaleString() }}</div>
         </div>
      </div>
   </div>
</template>

<style scoped>

   * {
      box-sizing: border-box;
   }

   .card {
      background: #fff;
      box-shadow: 1px 1px 6px rgba(0,0,0,.3);
      border-radius: 5px;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
   }

   .image {
      min-height: 50%;      
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
   }

   .text__container {
      padding: 20px 10px 10px;      
      display: flex;
      flex-direction: column;      
      flex-grow: 1;     
      font-weight: bold;
      color: #333;      
   }

   .card__title {
      line-height: 20px;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      overflow: hidden;
      -webkit-box-orient: vertical;
   }

   .wrapper__row {
      margin-top: auto;
      display: flex;
      align-items: center;
   }

   .card__button {            
      width: 100px;
      height: 30px;
      border-radius: 5px;
      background: orange;
      color: #fff;
      text-align: center;
      line-height: 30px;
      cursor: pointer;
      font-weight: normal;
   }

   .in__cart {
      background: green;
   }

   .card__price {
      margin-left: auto;
   }

   .list {
      display: flex;
      flex-direction: row;
      height: 200px;
      margin-bottom: 20px;
   }

   .list:last-of-type {
      margin-bottom: 0;
   }

   .list .image {
      flex-grow: 1;
      max-width: 400px;
      min-width: 300px;      
   }

   .list .text__container {
      width: 1px;
      min-width: 300px;
   }

   @media screen and (max-width: 768px) {
      .list {       
         height: auto;
      }

      .list .image {
         max-width: 100%;
         height: 200px;
      }

      .list .text__container {
         height: auto;
      }

      .card__title {
         margin-bottom: 10px;
      }
   }

   @media screen and (max-width: 576px) {
      .list .text__container {
         min-width: 240px;
      }
   }

</style>

<script>
   import { mapState, mapMutations } from 'vuex'
   export default {
      props: ['item', 'view'],
      data() {
         return {}
      },
      methods: {
         ...mapMutations('moduleStore', ['addToCart', 'removeFromCart']),
         toCart() {
            this.isInCart ? this.removeFromCart(this.item.id) : this.addToCart(this.item);
         }
      },
      computed: {
         ...mapState('moduleStore', ['cartList']),
         isInCart() {
            return this.cartList.some(el => el.id === this.item.id);
         }
      }     
   }
</script>