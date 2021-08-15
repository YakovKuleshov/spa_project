<template>
   <div class="toolbar">
      <h3 class="sub__title">{{ title }}</h3>
      <template v-if="currentPage == 'ShopList'">
         <div class="autocomplite" @keydown.stop>
            <input class="search" tabindex="0" type="text" v-model.trim="value" placeholder="Поиск..." @keydown="selectProduct" ref="searchInput" @focus="showDropdown" @click.stop="stopClick">
            <div class="dropdown" ref="dropdown">
               <div v-for="(item, index) in searchedList" class="dropdown__item" :key="item.id" tabindex="0" ref="items" @keydown.stop="selectInDropdownProduct($event, item, index)" @click="selectInDropdownProduct({ key: 'Enter' }, item)">{{ item.name }}</div>
            </div>
         </div>
         <select class="select" value="random" @change="sortList($event.target.value.trim())">
            <option value="random">Случайный</option>
            <option value="decreasing">Цена по убыванию</option>
            <option value="ascending">Цена по возрастанию</option>         
         </select>
      </template>
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
      padding: 20px;
      box-shadow: 2px 2px 4px rgba(0,0,0,.5) inset;
   }

   .sub__title {
      font-size: 20px;
   }

   .autocomplite {
      margin-left: 20px;
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
   }

   .dropdown__item {
      padding: 0 10px;
      cursor: pointer;
   }

   .dropdown__item:hover, .dropdown__item:focus {
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

</style>

<script>
   import { mapState, mapGetters, mapMutations } from 'vuex'

   export default {
      props: ['title', 'currentPage'],
      data() {
         return {
            cloneList: [],
            value: ''
         }
      },
      watch: {
         value(val) {
            if(this.searchedList.length) {
               this.$refs.dropdown.classList.add('active');
            }else {
               this.$refs.dropdown.classList.remove('active');
            }
            if(!val) {
               this.$refs.dropdown.classList.remove('active');
               this.searchList(val);
            }
         }  
      },
      computed: {      
         ...mapState('moduleStore', ['productList']),
         ...mapGetters('moduleStore', ['totalCount']),
         searchedList() {            
            return this.value ? this.cloneList.filter(el => el.name.trim().toLowerCase().includes(this.value.toLowerCase())) : [];
         }
      },
      methods: {     
         ...mapMutations('moduleStore', ['searchList', 'sortList']),
         toList() {              
            this.sortList('random');
            this.$emit('routing', 'toolbar');
         },
         selectProduct(e) {            
            if(e.key == 'ArrowDown') {
               if(this.searchedList.length) {                  
                  this.$refs.items[0].focus();
                  document.querySelector('body').style.overflow = 'hidden';
               }               
            }            
         },
         selectInDropdownProduct({ key }, item, index) {            
            if(key == 'ArrowDown') {               
               if(index != this.searchedList.length - 1) {
                  this.$refs.items[index + 1].focus();                  
               }
            }

            if(key == 'ArrowUp') {
               if(index == 0) {
                  this.$refs.searchInput.focus();
               }else {
                  this.$refs.items[index - 1].focus();
               }
            }

            if(key == 'Enter') {
               this.value = item.name.trim();
               this.searchList(this.value);                    
               this.$refs.searchInput.focus();                         
            }
         },        
         showDropdown() {
            if(this.searchedList.length) this.$refs.dropdown.classList.add('active');
         },
         returnBodyOverflow() {            
            document.querySelector('body').style.overflow = 'visible';
            if(this.$refs.dropdown) this.$refs.dropdown.classList.remove('active');
         },
         stopClick() {
            return false;
         }
      },
      mounted() {
         this.cloneList = [...this.productList];
         window.addEventListener('click', this.returnBodyOverflow);      
         window.addEventListener('wheel', this.returnBodyOverflow);        
      },
      destroyed() {
         window.removeEventListener('click', this.returnBodyOverflow);
         window.removeEventListener('wheel', this.returnBodyOverflow);        ;
      }
   }
</script>