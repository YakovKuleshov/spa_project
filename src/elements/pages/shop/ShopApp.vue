<template>
   <div class="shop">
      <ShopToolbar :title="getTitle" @routing="routing" :currentPage="currentPage"/>      
      <component :is="currentComponent" @routing="routing"></component>      
   </div>
</template>
<style scoped>

   * {
      box-sizing: border-box;
   }

   .shop {
      max-width: 1200px;
      margin: 0 auto;      
      color: #333;
   }
</style>
<script>
import ShopToolbar from './elements/ShopToolbar'
import ShopList from './elements/ShopList'
import Cart from './elements/Cart'

   export default {
      components: {
         ShopToolbar,
         ShopList,
         Cart
      },
      data() {
         return {
            currentComponent: ShopList,
            currentPage: ''
         }
      },
      methods: {        
         routing(action) {            
            switch(action) {
               case 'toolbar': this.currentComponent = Cart;
               break;
               case 'cart': this.currentComponent = ShopList;
            }            
         }
      },
      computed: {         
         getTitle() {
            this.currentPage =  this.currentComponent.__file.split('/')[5].replace(/\.vue/g, '');
            switch(this.currentPage) {
               case 'ShopList': return 'Список товаров'
               case 'Cart': return 'Корзина'
            }
         }
      },
      mounted() {}      
   }
</script>