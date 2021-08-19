<template>
   <div class="toolbar" :class="currentPage">               
      <h3 v-if="title === 'Список товаров'" class="sub__title">{{ title }}</h3>         
      <h3 v-else class="sub__title">{{ title }}</h3>       
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
      width: 210px;
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
      max-height: 250px;
      overflow-y: auto;
   }

   .dropdown::-webkit-scrollbar {
      background: #dfe5ec;
      width: 6px;
   }

   .dropdown::-webkit-scrollbar-thumb {
      background: #b8b8b8;
      border-radius: 5px;
   }

   .dropdown__item {
      padding: 0 10px;
      cursor: pointer;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
   }

   .dropdown__item:hover {
      background: #d3d2d2;
      outline: none;
   }

   .dropdown__item__active {
      background: #d3d2d2;
      outline: none;
      text-shadow: 1px 1px 2px rgba(0,0,0,.3);
      color: #4b4b4b;
      font-weight: bold;
   }

   .select {
      height: 35px;
      box-sizing: border-box;
      border-radius: 5px;
      outline: none;
      width: 210px;
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

   @media screen and (max-width: 592px) {
      .icons__container {
         display: none;
      }
   }

   @media screen and (max-width: 810px) {     

      .ShopList {
         height: auto;
         flex-direction: column;
         align-items: unset;
         padding-bottom: 20px;
      }

      .ShopList .filters__container {
         display: block;
         margin-left: 0;
         margin-top: 60px;
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
                  this.scrollDropdown();                  
               } 
            
               if(e.key == 'ArrowUp') {
                  this.count--          
                  this.scrollDropdown();        
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
         },
         scrollDropdown()  {
            const dropdown = this.$refs.dropdown;
            const activeItem = document.querySelector('.dropdown__item__active');
            this.count
            dropdown.scrollTop = activeItem.offsetHeight * this.count - dropdown.offsetHeight / 2 + activeItem.offsetHeight;            
         }
      },
      mounted() {
         this.cloneList = [...this.productList];
         window.addEventListener('click', this.hideDropdown);   
         window.onresize = () =>  window.innerWidth < 590 ? this.changeView('list') : null;                         
      },
      destroyed() {
         window.removeEventListener('click', this.hideDropdown);              ;
      }
   }
</script>