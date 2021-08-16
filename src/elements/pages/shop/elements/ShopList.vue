<template>
   <div class="product__list">           
      <transition-group name="list" class="cards__container" :class="`container__${view}`">         
         <ProductCard class="list-item" v-for="item in searchedList" :key="item.id" :view="view" :item="item"/>         
      </transition-group>     
      <div v-if="!searchedList.length" class="description">Ничего не найдено</div>      
   </div>
</template>

<style scoped>

   * {
      box-sizing: border-box;
   }

   .product__list {
      position: relative;
      background: #fff;
      border-radius: 10px;
      min-height: 500px;
      box-shadow: 2px 2px 4px rgba(0,0,0,.5) inset;       
      padding: 20px;                      
   }     

   .description {
      position: absolute;
      font-size: 30px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -80%);
   }

   .cards__container {            
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-auto-rows: 300px;
      grid-gap: 20px;                  
   }

   .container__list {
      display: block;
   }   

   .list-item {      
      transition: all 1s;      
   }
   
   .list-enter {
      opacity: 0;
      transform: translateY(30px);
   }

   .list-leave-active {
      position: absolute;
      opacity: 0;
   }
   
</style>

<script>
import ProductCard from './ProductCard.vue'
import { mapGetters, mapState } from 'vuex'

   export default {
      components: { 
         ProductCard 
      },
      data() {
         return {}
      },
      computed: {
         ...mapState('moduleStore', ['view']),
         ...mapGetters('moduleStore', ['searchedList']),
      }
   }
</script>