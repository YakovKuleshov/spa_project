<template>
   <div>      
      <div class="pagination">
         <h2 class="list__title">Страница {{ current + 1 }}</h2>
         <div v-for="(item, index) in list" class="list__item" :key="index">
            <div class="list__item__text">{{ item.description }}</div>
         </div>
      </div>
      <div class="list__buttons">
         <div class="list__button" :class="{ disabled: getDisabledPrevBtn }" @click="toPrevPage"><</div>    
         <template v-for="(item, index) in buttonsLenght">
            <div v-if="getPageButtons(index)" class="list__button" :class="{ list__button__active: current == index }" :key="index" @click="selectPage(index)">{{ index + 1 }}</div>
         </template>
         <div class="list__button last__page" :class="{ disabled: current + 1 == buttonsLenght}" @click="toLastPage">{{ buttonsLenght }}</div>
         <div class="list__button" :class="{ disabled: getDisabledNextBtn }" @click="toNextPage">></div>
      </div>          
   </div>
</template>
<style scoped>

   .list__title {
      margin-bottom: 20px;
   }

   .pagination {
      border-radius: 10px;
      padding: 10px;
      background: #fff;
      max-width: 1300px;
      margin: 0 auto;
      box-sizing: border-box;
      height: 460px;
      box-shadow: 9px 15px 30px rgba(0,0,0,.4);
   }

   .list__item {
      height: 50px;
      padding: 0 20px;
      display: flex;
      align-items: center;      
      background: #baefd4;
      margin-bottom: 5px;
      box-shadow: 1px 1px 4px rgba(0,0,0,.4);
   }

   .list__item:last-of-type {
      margin-bottom: 0;
   }

   .list__item__text {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
   }

   .list__buttons {
      display: flex;
      align-items: center;
      margin-top: 20px;
      justify-content: center;
   }

   .list__button {
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
      background: #fff;
      border: 1px solid #ccc;
      border-right: none;
      border-radius: 4px;
      font-weight: bold;
      font-size: 20px;
   }

   .list__button:last-of-type {
      border-right: 1px solid #ccc;
   }

   .list__button__active {
      background: #07f;
      color: #fff;
      border: 1px solid #07f !important;
      pointer-events: none;
   }

   .last__page {
      border: none;
      border-radius: unset;
      background: rgba(0,0,0,.5);
      color: #fff;
      border-bottom: 2px solid #fff;
      box-sizing: border-box;
      width: auto;
      min-width: 50px;      
      padding: 0 8px;
   }

   .disabled {
      pointer-events: none;
      opacity: .5;
   }

</style>

<script>

   import { mapGetters, mapActions } from 'vuex'

   export default {
      data() {
         return {
            buttonsLenght: '',
            page: '',
            list: [],
            current: '',
            limit: 7            
         }
      },  
      watch: {
         current(current) {            
            this.getLimitedList(current);
         }
      },    
      computed: {
         ...mapGetters(['newsList']),
         getDisabledNextBtn() {            
            return this.current + 1 == this.buttonsLenght;
         },
         getDisabledPrevBtn() {
            return this.current == 0;
         }
      },
      methods: {
         ...mapActions(['getNews']),
         toNextPage() {            
            this.current = this.current + 1
            this.$router.push(this.$route.path + '?page=' + (this.current + 1));
         },
         toPrevPage() {
            this.current = this.current - 1
            this.$router.push(this.$route.path + '?page=' + (this.current + 1));
         },
         toLastPage() {
            this.$router.push(this.$route.path + '?page=' + this.buttonsLenght);
            this.current = +this.$route.query.page - 1;
         },
         selectPage(index) {            
            this.$router.push(this.$route.path + '?page=' + (index + 1));
            this.current = +this.$route.query.page - 1;            
         },
         getPageButtons(index) {               
            if(this.current == 0) {               
               return index == this.current + 4 || index == this.current + 3 || index == this.current + 2 || index == this.current + 1 || this.current == index;                        
            }                   

            if(this.current - 1 <= 0) {               
               return index == this.current + 3 || index == this.current + 2 || index == this.current + 1 || this.current == index || index == this.current - 1                        
            }

            if(this.current - 2 <= 0) {               
               return index == this.current + 2 || index == this.current + 1 || this.current == index || index == this.current - 1 || index == this.current - 2                         
            }                                   

            if(this.current + 1 >= this.buttonsLenght) {               
               return index == this.current - 4 || index == this.current - 3 || index == this.current - 2 || index == this.current - 1 || this.current == index                           
            }

            if(this.current + 2 >= this.buttonsLenght) {               
               return index == this.current - 3 || index == this.current - 2 || index == this.current - 1 || this.current == index || index == this.current + 1
            }

            return index == this.current + 2 || index == this.current + 1 || this.current == index || index == this.current - 1 || index == this.current - 2;            
         },
         getLimitedList(current) {            
            this.page = current * this.limit; 
            this.list = this.newsList.slice(this.page, this.page + this.limit);
         }                  
      },      
      async mounted() {                                                  
         await this.getNews({ category: 'everything', page: 1, limit: 40 }); 
         
         this.buttonsLenght = Math.ceil(this.newsList.length / this.limit);         
         const buttonsArr = [];         
         for(let i = 1; i < this.buttonsLenght; i++) {
            buttonsArr.push(i);
         }                

         window.addEventListener('popstate', () => {              
            this.current = +this.$route.query.page - 1 || 0;
         })  
                     
         if(!buttonsArr.includes(+this.$route.query.page - 1)) this.$router.push(this.$route.path + '?page=1').catch(err => {});         
         this.current = +this.$route.query.page - 1;                        
      }
   }
</script>