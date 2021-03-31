<template>
   <div class="news__list">
      <div v-for="(item, index) in list" class="list__item" :key="index" ref="listItem">
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
      letter-spacing: .5px;
      cursor: pointer;
      text-shadow: 2px 2px 3px rgba(0,0,0,.9);
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
            scrollNews() {
               let elems = this.$refs.listItem;
               elems[0].style.top = '50%'
               elems[0].style.opacity = 1
               setInterval(() => {
                  elems.forEach((el, k) => {
                     if(el.style.top == '50%') {
                        el.style.opacity = 0
                        el.style.top = '-50%'
                                                                              
                        setTimeout(() => {
                           if(el.nextElementSibling) {
                              el.nextElementSibling.style.opacity = 1
                              el.nextElementSibling.style.top = '50%'
                           }else {
                              elems[0].style.opacity = 1
                              elems[0].style.top = '50%'
                           }
                        })

                     }else if(el.style.top == '-50%') {
                        el.style.top = '150%'
                     }
                  });
               }, 7000)    
            }
         }         
      }, 
      mounted() {},
      updated() {        
         this.scrollNews();
      }
   }
</script>