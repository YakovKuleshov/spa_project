<template>
   <div class="news__list">
      <div v-for="(item, index) in fixedList" class="list__item" :key="index" ref="listItem">
         <a class="news__link" :href="item.url" rel="noopener" target="_blank">{{ item.description }}</a>   
      </div>
   </div>
</template>

<style scoped>
   .news__list {
      position: relative;
      height: 30px;
      overflow: hidden;      
      box-sizing: border-box;
   }

   .list__item {
      transition: 1s;
      position: absolute;
      transform: translateY(-50%);
      opacity: 0;
      top: 150%;
      color: var(--newsColor, #333);
      width: 100%;
      letter-spacing: 1px;
      cursor: pointer;
      text-shadow: 1px 1px 2px rgba(0,0,0,.7);
      font-size: 20px;
   }

   .news__link {
      text-decoration: none;
      color: inherit;
      white-space: nowrap;
      width: 100%;
      text-overflow: ellipsis;
      overflow: hidden;
      display: block;
   }
 
</style>

<script>
   export default {
      props: ['list'],
      data() {
         return {
            interval: null,            
            count: -1                      
         }         
      }, 
      methods: {
         scrollNews(list) { 
            let elems = this.$refs.listItem;            
            this.count++           
            if(this.count > list.length - 1) {
               this.count = 0;
               elems[list.length - 1].style.opacity = 0;
               elems[list.length - 1].style.top = '-50%';
               if(elems[list.length - 1].style.top == '-50%') {
                  setTimeout(() => {                        
                     elems[list.length - 1].style.top = '150%'
                  }, 1000);
               }
            }            
            
            elems[this.count].style.top = '50%'
            elems[this.count].style.opacity = 1;          

            if(elems[this.count - 1]) {
               if(elems[this.count - 1].style.top == '50%') {               
                  elems[this.count - 1].style.opacity = 0
                  elems[this.count - 1].style.top = '-50%'                  
               }

               if(elems[this.count - 1].style.top == '-50%') {                  
                  setTimeout(() => {                        
                     elems[this.count - 1].style.top = '150%'
                  }, 1000);
               }
            }                               
         }
      },  
      computed: {
         fixedList() {
            return this.list.filter(el => el.description);
         }
      }, 
      mounted() {        
         this.scrollNews(this.fixedList)
         this.interval = setInterval(() => {
            this.scrollNews(this.fixedList)
         }, 7000);        
      },
      activated() {                
         this.interval = setInterval(() => {
            this.scrollNews(this.fixedList)
         }, 7000);
      },     
      deactivated() {                      
         clearInterval(this.interval);
      }
   }
</script>