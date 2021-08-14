<template>
   <div class="card">
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

</style>

<script>
   import { mapState, mapMutations } from 'vuex'
   export default {
      props: ['item'],
      data() {
         return {}
      },
      methods: {
         ...mapMutations('moduleStore', ['addToCart', 'removeFromCart']),
         toCart() {
            if(this.isInCart) {
               this.removeFromCart(this.item.id);               
            }else {
               this.addToCart(this.item); 
            }                        
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