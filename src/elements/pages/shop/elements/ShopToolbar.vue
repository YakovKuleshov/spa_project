<template>
   <div class="toolbar">
      <h3 class="sub__title">{{ title }}</h3>
      <div class="cart__container" @click="toList">
         <div class="cart"></div>
         <div class="cart__value">{{ totalCount }}</div>
      </div>
   </div>
</template>

<style scoped>   

   .toolbar {
      height: 50px;
      background: #fff;
      border-radius: 10px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      padding: 20px;
      box-shadow: 2px 2px 4px rgba(0,0,0,.5) inset;
   }

   .sub__title {
      font-size: 20px;
   }

   .cart__container {
      display: flex;
      margin-left: auto;
      align-items: center;
      cursor: pointer;
   }

   .cart {
      width: 30px;
      height: 30px;     
      background: url('../.../../../../../../img/cart.png') no-repeat center;
      background-size: cover;
   }

   .cart__value {
      font-size: 25px;
      margin-left: 5px;
   }

</style>

<script>
   import { mapGetters} from 'vuex'

   export default {
      props: ['title'],
      data() {
         return {}
      },
      computed: {         
         ...mapGetters('moduleStore', ['totalCount'])
      },
      methods: {               
         toList() {              
            this.$emit('routing', 'toolbar');
         }
      }
   }
</script>