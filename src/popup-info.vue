<template>
   <div class="overlay" @click="clearData">
      <div class="content" @click="stopProp">
         <div class="vide_img_container">
            <template v-if="!trailer">
               <div class="image" :style="{ background: 'url(' + filmData.url + ') no-repeat center', backgroundSize: 'cover' }"></div> 
            </template>
            <template v-else>
               <div class="video">
                  <video autoplay controls controlslist="nodownload" :src="filmData.trailer"></video>
               </div>
            </template>
         </div>
         <div class="text__container">
            <div class="actors">Год:
               <span>{{ filmData.year }}</span>   
            </div>
            <div class="actors">Режиссёр:
               <span v-for="(item, index) in directorsList" :key="index">{{ item.element.name }}{{ getComma(directorsList, index) }}</span>
            </div>
            <div class="actors">В ролях: 
               <span v-for="(item, index) in actorsList" :key="index">{{ item.element.name }}{{ getComma(actorsList, index) }}</span>
            </div>
            <div class="description">{{ filmData.description }}</div>
         </div>
         <div class="rating__wrapper">
            <div class="rating">
               <div class="rating__active" :class="getRateColor" :style="{ width: getRateWidth + '%' }"></div>
            </div>
            <div class="rating__value">{{ getRate }}<span class="rate__from">Кино Поиск</span></div>
         </div>
         <div class="btn" @click="switchTrailer">Треллер</div>
      </div>
   </div>
</template>

<style scoped>
   .overlay {
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,.5);
      backdrop-filter: blur(10px);
      padding: 10px;
      z-index: 1;
   }

   .content {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 100%;
      height: 100%;
      max-width: 1000px;      
      max-height: 700px;
      padding: 15px;
      box-sizing: border-box;
      background: #fff;
      box-shadow: 30px 30px 70px rgb(0,0,0,.6);
      border-radius: 10px;
   }

   .vide_img_container {
      position: relative;
      flex-grow: 1;
   }

   .video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
   }

   video {
      width: 100%;
      height: 100%;
      object-fit: contain;
      outline: none;
   }

   .image {
      height: 100%;
   }

   .text__container {
      padding-top: 20px;
      padding-bottom: 20px;
   }

   .actors  {
      font-weight: bold;
      margin-bottom: 10px;
   }

   .actors span {
      font-weight: normal;
      font-size: 15px;
      margin-left: 5px;
   }   

   .description {
      line-height: 20px;
   }

   .rating__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
   }

   .rating {
      position: relative;
      width: 146px;
      height: 28px;
      font-size: 35px;
      margin-right: 20px;    
      text-shadow: 1px 1px 2px rgba(0,0,0,.5);  
   }

   .rating:before {
      content: '★★★★★';
      color: #ccc;
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
      line-height: 28px;
   }

   .rating__active {
      position: absolute;
      top: 0;
      height: 100%;
      left: 0;
   }

   .rating__active::before {
      content: '★★★★★';      
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      line-height: 28px;
      overflow: hidden;
   }

   .red:before {
      color: #ff3c3c;
   }

   .yellow:before {
      color: #ffcc3c;
   }

   .green:before {
      color: #35bb68;
   }
   
   .rating__value {
      font-weight: bold;
      font-size: 27px;
      color: #333;
      text-shadow: 1px 1px 3px rgba(0,0,0,.8);
   }

   .rate__from {
      text-shadow: none;
      color: #ccc;
      font-weight: normal;
      margin-left: 20px;
      font-size: 23px;
      letter-spacing: 1px;
   }

   .btn {
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
      letter-spacing: 1px;
      width: 180px;
      text-shadow: 1px 1px 2px rgba(0,0,0,.6);
      height: 40px;
      background: rgba(0, 225, 255, .7);
      color: #fff;
      text-align: center;
      line-height: 40px;
   }
</style>

<script>
   export default {
      props: ['filmData'],
      data() {
         return {
            trailer: false,
            actorsList: [],
            directorsList: [],
            getComma(actors, index) {
               return index == actors.length - 1 ? '' : ','
            }                        
         }
      },
      computed: {
         getRateWidth() {
            return 100 / 10 * this.filmData.rating
         },
         getRateColor() {            
            if(this.filmData.rating < 5) {
               return 'red';
            }else if(this.filmData.rating >= 5 && this.filmData.rating < 7 ) {
               return 'yellow';
            }else {
               return 'green';
            }
         },
         getRate() {
            return this.filmData.rating ? this.filmData.rating.toFixed(1) : '';
         }			  
      },
      methods: {
         clearData() {
            this.$emit('clearData')
         },
         stopProp(e) {
            e.stopPropagation()
         },
         switchTrailer() {
            this.trailer = !this.trailer
         }
      },
      mounted() {
         document.querySelector('body').style.overflow = 'hidden'
         
         fetch('https://ctx.playfamily.ru/screenapi/v1/noauth/moviecard/web/1?elementAlias=' + this.filmData.filmName + '&elementType=' + this.filmData.type)
            .then((response) => response.json())
            .then(res => {               
               this.actorsList = res.element.actors.items
               this.directorsList = res.element.directors.items
         });
      },
      destroyed() {
         document.querySelector('body').style.overflow = 'visible'
      }
   }
</script>