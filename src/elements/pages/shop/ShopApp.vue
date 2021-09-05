<template>
   <div class="shop">
      <ShopToolbar class="toolbar" :title="getTitle" @routing="routing" :currentPage="currentPage"/>      
      <transition name="fade">
         <component class="comp" :is="currentComponent" @routing="routing"></component>      
      </transition>
   </div>
</template>
<style scoped>

   * {
      box-sizing: border-box;
   }

   .toolbar {
      position: sticky;
      top: 0;
      z-index: 2;
   }

   .comp {
      z-index: 1;
   }

   .shop {
      position: relative;
      max-width: 1200px;
      margin: 0 auto;      
      color: #333;
   }
   
   .fade-enter {
      transition: opacity .5s;
      opacity: 0;           
   }

   .fade-enter-active {
      transition: opacity .5s;      
   }   

   .fade-leave-active {      
      opacity: 0;
      transition: opacity .5s;
      position: absolute; 
      width: 100%; 
   }

</style>
<script>
import ShopToolbar from './elements/ShopToolbar'
import ShopList from './elements/ShopList'
import Cart from './elements/Cart'
import saveScroll from '@/mixins/saveScroll'

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
      mixins: [ saveScroll ],
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