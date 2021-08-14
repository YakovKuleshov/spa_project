<template>
   <div>      
      <h2 class="page__title">Пагинация</h2>
      <div class="pagination">
         <h2 class="list__title">Страница {{ current + 1 }}</h2>                           
         <div v-for="item in list" class="list__item" :key="item.description" @click="toInfoPage(item)">
            <div class="list__item__img" :style="{ backgroundImage: `url('${item.urlToImage}')` }"></div>
            <div class="list__item__text">{{ item.description }}</div>
         </div>         
         <div v-if="!list.length" class="preloader"></div>
      </div>
      <div class="list__buttons">
         <div class="list__button prev__btn" :class="{ disabled: getDisabledPrevBtn }" @click="toPrevPage"></div>    
         <template v-for="(item, index) in buttonsLenght">
            <div v-if="getPageButtons(index)" class="list__button" :class="{ list__button__active: current == index }" :key="index" @click="selectPage(index)">{{ index + 1 }}</div>
         </template>
         <div class="list__button last__page" :class="{ disabled: current + 1 == buttonsLenght}" @click="toLastPage">{{ buttonsLenght }}</div>
         <div class="list__button next__btn" :class="{ disabled: getDisabledNextBtn }" @click="toNextPage"></div>
      </div>         
   </div>
</template>
<style scoped>      

   .page__title {
      margin-bottom: 40px;
      font-size: 40px;
   }

   .list__title {
      margin-bottom: 20px;
   }

   .pagination {
      position: relative;
      border-radius: 10px;
      padding: 10px;
      background: #fff;
      max-width: 1300px;
      margin: 0 auto;
      box-sizing: border-box;
      height: 460px;
      box-shadow: 9px 15px 30px rgba(0,0,0,.4);
      overflow: hidden;
   }

   .preloader {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 4px solid #0099ff;
      border-right-color: transparent;
      box-sizing: border-box;
      animation: rotatePreloader .5s infinite linear;
   }

   @keyframes rotatePreloader {
      100% {
         transform: translate(-50%, -50%) rotateZ(360deg);
      }
   }

   .list__item {
      height: 50px;
      padding: 0 20px;
      display: flex;
      align-items: center;      
      background: #baefd4;
      margin-bottom: 5px;
      cursor: pointer;
      box-shadow: 1px 1px 4px rgba(0,0,0,.4);      
   }

   .list__item:last-of-type {
      margin-bottom: 0;
   }

   .list__item__img {
      width: 66px;
      height: 35px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      flex-shrink: 0;
      margin: 0 10px 0 0;
      border-radius: 4px;
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
      position: relative;
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
      overflow: hidden;
   }
   
   .prev__btn::before {      
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;      
      background: #fff url('../../../../img/arrow.svg') no-repeat center;      
      background-size: 30px;
      transform: rotateZ(90deg);
   }

   .next__btn::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;      
      background: #fff url('../../../../img/arrow.svg') no-repeat center;      
      background-size: 30px;
      transform: rotateZ(-90deg);
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
         ...mapGetters('mainStore', ['subList']),
         getDisabledNextBtn() {            
            return this.current + 1 == this.buttonsLenght;
         },
         getDisabledPrevBtn() {
            return this.current == 0;
         }
      },
      methods: {
         ...mapActions('mainStore', ['getNews']),
         toInfoPage(item) {
            // this.$router.push({name: 'info', params: { id: item }})
            localStorage.setItem('info_data', JSON.stringify({...item, page: this.$route.query.page ? this.$route.query.page : 1}));
            this.$router.push('/info');
         },
         toNextPage() {            
            this.current++
            this.$router.push(this.$route.path + '?page=' + (this.current + 1));
         },
         toPrevPage() {
            this.current--
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
               return index == this.current || index == this.current + 1 || index == this.current + 2 || index == this.current + 3 || index == this.current + 4
            }  

            if(this.current == 1) {            
               return index == this.current - 1 || index == this.current || index == this.current + 1 || index == this.current + 2 || index == this.current + 3
            }  
            
            if(this.current >= 1 && this.current <= this.buttonsLenght - 3) {            
               return index == this.current - 1 || index == this.current - 2 || index == this.current || index == this.current + 1 || index == this.current + 2
            }              
            
            if(this.current == this.buttonsLenght - 2) {            
               return  index == this.current - 3 || index == this.current - 2 || index == this.current - 1 || index == this.current || index == this.current + 1 || index == this.current + 2
            }

            if(this.current == this.buttonsLenght - 1) {            
               return index == this.current - 4 || index == this.current - 3 || index == this.current - 3 || index == this.current - 2 || index == this.current - 1 || index == this.current
            }
         },
         getLimitedList(current) {            
            this.list = this.subList.slice(current * this.limit, current * this.limit + this.limit);            
         }                  
      },      
      async mounted() {      
         if(!this.subList.length) {
            await this.getNews({ category: 'everything', page: 1, limit: 100 });             
         }      
      
         this.buttonsLenght = Math.ceil(this.subList.length / this.limit);                  
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