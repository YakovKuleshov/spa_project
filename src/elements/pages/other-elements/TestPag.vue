<template>
   <div class="test__block">
      <h2>Всего страниц {{ this.pagesCount }}</h2>
      <div v-if="pagesCount > 1" class="pag__list">
         <div class="pag__prev__btn to__first" @click="toFirst">First</div>
         <div class="pag__prev__btn" @click="prevPage"></div>   
         <div v-for="page in buttonsList" class="pag__button" :class="{active__btn: page === current}" :key="page" @click="selectPage(page)">{{ page }}</div>    
         <div v-if="pagesCount > 5" class="pag__button">...</div>  
         <div class="pag__prev__next" @click="nextPage"></div> 
         <div class="pag__prev__next to__last" @click="toLast">Last</div>
      </div>
   </div>
</template>

<style scoped>
   .pag__list {
      display: flex;
      max-width: 800px;
      margin: 0 auto;
      justify-content: center;
   }

   .pag__button {
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
   }

   .pag__prev__btn, .pag__prev__next {
      cursor: pointer;
      position: relative;
      width: 40px;
      height: 40px;
      background: #fff;
      border-radius: 4px;
      overflow: hidden;
      text-align: center;
      line-height: 40px;
      border: 1px solid #ccc;
   }

   .pag__prev__btn:before, .pag__prev__next:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: #fff url('../../../../img/arrow.svg') no-repeat center;
      background-size: 30px;      
      transform: rotateZ(90deg);
   } 
   
   .pag__prev__next:before {      
      transform: rotateZ(-90deg);
   }

   .to__first:before, .to__last::before {
      background: none;
   }

   .active__btn {
      background: #07f;
      color: #fff;
   }
</style>

<script>
   import _ from 'lodash'
   export default {
      data() {
         return {
            current: 1,
            limit: 5,
            count: 30            
         }
      },
      computed: {
         pagesCount() {            
            return Math.ceil(this.count / this.limit);
         },
         buttonsList() {            
            let arr = []; 
               if(this.pagesCount > 5) {
                  if(this.current > 2 && this.current < this.pagesCount - 1 && this.current <= this.pagesCount - 2) {               
                     for (let i = this.current - 2; i <= this.current + 2; i++) {
                        arr.push(i)               
                     }               
                  }else if(this.current > this.pagesCount - 2) {
                     for (let i = this.pagesCount -4; i <= this.pagesCount; i++) {
                        arr.push(i)               
                     }
                  } 
                  else {
                     for (let i = 1; i <= 5; i++) {
                        arr.push(i)                  
                     }
                  }
               }else {
                  for (let i = 1; i <= this.pagesCount; i++) {
                     arr.push(i)                  
                  }
               }    
            return arr
         }
      },
      methods: {
         selectPage(page) {
            this.current = page;
         },
         nextPage() {
            this.current++
            this.current = Math.min(this.pagesCount, this.current)
         },
         prevPage() {            
            this.current--
            this.current = Math.max(this.current, 1)
         },
         toFirst() {
            this.current = 1
         },
         toLast() {
            this.current = this.pagesCount
         }
      }
   }
</script>