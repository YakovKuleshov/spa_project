<template>
   <div class="toolbar" :class="currentPage">
      <transition name="fade">         
         <h3 v-if="title === 'Список товаров'" class="sub__title">{{ title }}</h3>         
         <h3 v-else class="sub__title" key="2">{{ title }}</h3>         
      </transition>      
      <transition name="fade">
         <div v-if="currentPage == 'ShopList'" class="filters__container">            
            <div class="autocomplite">
               <input class="search" type="text" v-model.trim="value" placeholder="Поиск..." @keydown="selectProduct" @focus="showDropdown" @click.stop>
               <div class="dropdown" ref="dropdown">
                  <div v-for="(item, index) in searchedList" class="dropdown__item" :class="{ dropdown__item__active: count == index }" :key="item.id" @click="selectInDropdownProduct(item)">{{ item.name }}</div>
               </div>
            </div>
            <select class="select" :value="filter" @change="sortList($event.target.value.trim())">
               <option value="random">Случайный</option>
               <option value="decreasing">Цена по убыванию</option>
               <option value="ascending">Цена по возрастанию</option>         
            </select>
            <div class="icons__container">
               <div v-for="item in viewList" class="view__icon" :class="{ active__icon: item.id === view }" :key="item.id" @click="changeView(item.id)"></div>            
            </div>            
         </div>  
      </transition>
      <div class="cart__container" @click="toList">
         <div class="cart"></div>
         <div class="cart__value">{{ totalCount }}</div>
      </div>
   </div>
</template>

<style scoped>   
   * {
      box-sizing: border-box;      
   }

   .toolbar {
      height: 50px;
      background: #fff;
      border-radius: 10px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      box-shadow: 2px 2px 4px rgba(0,0,0,.5) inset;
   }

   .sub__title {
      font-size: 20px;
      position: absolute;
      left: 20px;
   }

   .filters__container {
      display: flex;      
      margin-left: 180px;
   }

   .autocomplite {      
      position: relative;
   }

   .search {
      height: 35px;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 0 10px;
      border: 1px solid #ccc;
      width: 200px;
      outline: none;      
      font-size: 15px;
      background: #dfe5ec;      
   }   

   .dropdown {
      position: absolute;
      left: 0;
      top: 32px;
      width: 100%;
      height: 100%;
      background: #dfe5ec;
      height: auto;     
      border: 1px solid #ccc;
      line-height: 30px;
      border-radius: 0 0 5px 5px;
      border-top: none;
      display: none;
      z-index: 1;
   }

   .dropdown__item {
      padding: 0 10px;
      cursor: pointer;
   }

   .dropdown__item:hover {
      background: #d3d2d2;
      outline: none;
   }

   .dropdown__item__active {
      background: #d3d2d2;
      outline: none;
   }

   .select {
      height: 35px;
      box-sizing: border-box;
      border-radius: 5px;
      outline: none;
      width: 200px;
      border: 1px solid #ccc;
      margin-left: 10px;
      font-size: 15px;
      background: #dfe5ec;
      padding: 0 5px;
      cursor: pointer;
   }

   .icons__container {
      display: flex;
      align-items: center;
      margin-left: 20px;
   }

   .view__icon {
      cursor: pointer;
      width: 30px;
      height: 30px;
      background: url('../../../../../img/list.png') no-repeat center;
      background-size: 16px;
      margin-right: 5px;
   }

   .view__icon:nth-child(2) {     
      background: url('../../../../../img/tile.png') no-repeat center;
      background-size: 16px;      
      margin-right: 0;
   }

   .active__icon {
      border: 2px solid #0099ff;
      border-radius: 3px;
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

   .active {
      display: block;
   }   
   
   .fade-enter-active {
      transition: opacity .5s;
   }

   .fade-enter,
   .fade-leave-active {
      opacity: 0;
      transition: opacity .5s;
   }

   @media screen and (max-width: 810px) {
      .ShopList {
         height: auto;
         flex-direction: column;
         align-items: unset;
      }

      .ShopList .autocomplite {
         margin-left: 0;
      }

      .ShopList .search, .ShopList .select, .ShopList .icons__container {
         width: 100%;
         margin: 0 0 10px;
      }    
   }

</style>

<script>
   import { mapState, mapGetters, mapMutations } from 'vuex'

   export default {
      props: ['title', 'currentPage'],
      data() {
         return {
            cloneList: [],
            value: '',
            count: 0,
            viewList: [
               {
                  id: 'list'
               },
               {
                  id: 'tile'
               }
            ]
         }
      },
      watch: {
         value(val) {            
            this.count = 0;
            if(this.searchedList.length) {
               this.showDropdown();
            }else {
               this.hideDropdown();
            }
            if(!val) {
               this.hideDropdown();               
            }
            this.searchList(val);
         }  
      },
      computed: {      
         ...mapState('moduleStore', ['productList', 'filter', 'view']),
         ...mapGetters('moduleStore', ['totalCount']),
         searchedList() {            
            return this.value ? this.cloneList.filter(el => el.name.trim().toLowerCase().includes(this.value.toLowerCase())) : [];
         }
      },
      methods: {     
         ...mapMutations('moduleStore', ['searchList', 'sortList', 'changeView']),
         toList() {              
            this.value = '';
            this.sortList('random');
            this.$emit('routing', 'toolbar');
         },
         selectProduct(e) {            
            if(this.searchedList.length) {
               if(e.key == 'ArrowDown') {                 
                  this.count++                                    
               } 
            
               if(e.key == 'ArrowUp') {
                  this.count--                  
               }

               if(e.key == 'Enter') {
                  this.value = this.searchedList[this.count].name;
                  this.searchList(this.value);
               }

               this.count = Math.min(Math.max(0, this.count), this.searchedList.length - 1);
            } 
         },
         selectInDropdownProduct(item) {
            this.value = item.name.trim();
            this.searchList(this.value);            
         }, 
         showDropdown() {
            if(this.$refs.dropdown) {
               if(this.searchedList.length) this.$refs.dropdown.classList.add('active');
            }
         },             
         hideDropdown() {            
            if(this.$refs.dropdown) this.$refs.dropdown.classList.remove('active');            
         }        
      },
      mounted() {
         this.cloneList = [...this.productList];
         window.addEventListener('click', this.hideDropdown);                     
      },
      destroyed() {
         window.removeEventListener('click', this.hideDropdown);              ;
      }
   }
</script>