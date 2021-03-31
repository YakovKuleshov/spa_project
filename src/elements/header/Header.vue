<template>
   <div class="header__menu__wrapper">
      <ul class="header__menu">
         <li v-for="item in menuList" class="header__menu__item" :key="item.id">
            <a class="menu__link" href="#" @click="itemClick($event, item)">{{ item.name }}</a>
         </li>
      </ul>
      <div class="header">
         <div class="top__elem"></div>
         <div class="header__title">Creative Business</div>
         <div class="sub__title">Creative Thinking</div>
         <template v-for="item in slides">
            <p class="text" :class="{active__text: currentSlide == item.id}" :key="item.id" ref="text">{{ item.text }}</p>
         </template>
         <div class="bottom__elem">
            <div class="dots">
               <div v-for="item in slides" class="dot" :class="{ active__dot: item.id == currentSlide }" :key="item.id" @click="selectSlide(item)"></div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>

   .header__menu__wrapper {
      position: relative;
      margin: 100px auto;
      max-width: 1000px;
      padding: 0 10px;
   }

   .header {
      position: relative;
      height: 300px;
      border-radius: 0 10px 0 10px;
      background: fixed url('/src/img/blue_wallpaper.jpg') no-repeat center;
      background-size: cover;
      padding: 70px 50px 80px;    
      box-sizing: border-box;
      box-shadow: 4px 8px 15px rgba(0,0,0,.6);
   }

   .top__elem {
      position: absolute;
      width: 350px;
      height: 50px;
      top: -50px;
      left: 0;
      background: fixed url('/src/img/blue_wallpaper.jpg') no-repeat center;
      background-size: cover;
      border-radius: 10px 10px 0 0;
      box-shadow: 4px -3px 3px rgba(0,0,0,.4);
   }

   .top__elem:before {
      content: '';
      position: absolute;
      height: 100%;
      width: 50px;
      top: 0;
      right: -21px;      
      background: fixed url('/src/img/blue_wallpaper.jpg') no-repeat center;
      background-size: cover;
      border-radius: 0 6px 0 0;
      transform: skewX(40deg);
   }

   .header__title {
      font-size: 40px;
      font-weight: bold;
      color: #fff;
      text-shadow: 2px 3px 4px rgba(0,0,0,1);
   }

   .sub__title {
      font-size: 23px;
      color: #fff;
      line-height: 30px;
      padding-left: 180px;
   }

   .bottom__elem {
      position: absolute;
      width: 200px;
      height: 40px;
      right: 0;
      bottom: -40px;
      border-radius: 0 0 10px 0;
      background: fixed url('/src/img/blue_wallpaper.jpg') no-repeat center;
      background-size: cover;
      box-shadow: 4px 8px 10px rgba(0,0,0,.6);
   }

   .bottom__elem:after {
      content: '';
      position: absolute;
      height: 100%;
      width: 40px;
      top: 0;
      left: -21px;      
      background: fixed url('/src/img/blue_wallpaper.jpg') no-repeat center;
      background-size: cover;
      border-radius: 0 0 0 6px;
      transform: skewX(40deg);
   }

   .bottom__elem {
      display: flex;
      align-items: center;
      justify-content: center;
   }

   .dots {
      display: flex;
      align-items: center;
   }

   .dot {
      cursor: pointer;
      width: 20px;
      height: 20px;   
      border-radius: 50%;
      background: #333;
      box-shadow: 1px 2px 5px rgba(0,0,0,.6);
   }

   .dot:not(:last-of-type) {
      margin-right: 10px;
   }

   .header__menu {
      position: absolute;
      display: flex;
      justify-content: space-between;
      color: #fff;
      top: -45px;
      right: 10px;
      width: calc(100% - 350px);
      height: 54px;
      background: linear-gradient(to top, #333 20%, grey 60%, #333 90%);
      border-radius: 0 10px 0 0;
      box-sizing: border-box;
      padding: 15px 10px 0 55px;
      margin: 0;
   }

   .header__menu__item {
      font-size: 15px;
      list-style-type: none;
   }
   
   .menu__link {
      text-decoration: none;
      color: #fff;
      white-space: nowrap;
      letter-spacing: .3px;
      padding: 0 5px;
   }

   .text {
      font-size: 15px;
      color:#fff;
      line-height: 23px;
      transition: .5s;
      opacity: 0;
      position: absolute;
      left: 0;
      padding: 0 50px;
   }

   .active__dot {
      background: #07f;
   }

   .active__text {
      opacity: 1;
   }

</style>
<script>
   export default {
      data() {
         return {
            menuList: [
               {
                  id: 'vision',
                  name: 'Our Vision'
               },
               {
                  id: 'work',
                  name: 'Our Work'
               },
               {
                  id: 'services',
                  name: 'Services'
               },
               {
                  id: 'news',
                  name: 'News'
               },
               {
                  id: 'images',
                  name: 'Images'
               },
               {
                  id: 'about',
                  name: 'About'
               },
               {
                  id: 'contacts',
                  name: 'Contacts Us'
               }
            ],
            slides: [
               {
                  id: 1,
                  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos soluta delectus eaque inventore minus dicta, facilis quisquam ullam molestias asperiores omnis amet doloremque provident consectetur iusto recusandae.'
               },
               {
                  id: 2,
                  text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro inventore, voluptatum odio, ex consectetur quos nulla tempore at reiciendis assumenda excepturi incidunt. Culpa libero debitis, dolores iure aliquam nulla alias saepe fuga eveniet recusandae, dolorem eligendi quam in ducimus rerum mollitia autem beatae corporis magni! Consequatur cupiditate adipisci optio dicta.'
               },
               {
                  id: 3,
                  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorum neque quisquam iusto officiis numquam. Placeat, quasi, pariatur architecto voluptas excepturi nisi id tempora fuga recusandae autem nobis amet magni.'
               },
               {
                  id: 4,
                  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, atque iure. Molestiae vero quisquam rem repudiandae odit quae similique ipsam.'
               }
            ],
            currentSlide: 1
         }
      },
      methods: {
         itemClick(e, item) {
            e.preventDefault();
         },
         selectSlide(item) {
            this.currentSlide = item.id
         }      
      }
   }
</script>