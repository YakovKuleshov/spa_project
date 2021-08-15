<template>
   <div class="product__list">           
      <div class="cards__container">
         <ProductCard v-for="item in searchedList" :key="item.id" :item="item"/>
      </div>           
   </div>
</template>

<style scoped>

   * {
      box-sizing: border-box;
   }

   .product__list {
      background: #fff;
      border-radius: 10px;
      min-height: 500px;
      box-shadow: 2px 2px 4px rgba(0,0,0,.5) inset;       
      padding: 20px;                      
   }     

   .cards__container {            
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-auto-rows: 300px;
      grid-gap: 20px;                  
   }
</style>

<script>
import ProductCard from './ProductCard.vue'
import { mapGetters } from 'vuex'

   export default {
      components: { 
         ProductCard 
      },
      data() {
         return {}
      },
      computed: {
         ...mapGetters('moduleStore', ['searchedList']),
      }
   }
</script>