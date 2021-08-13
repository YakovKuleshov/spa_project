<template>
   <div class="gallery__container">
      <div class="gallery__title">Gallery
         <div class="gallery__title__clone">Gallery</div>
      </div>               
      <div v-for="item in images" class="image" :style="{ background: `url(img/${item.image}.jpg)`, backgroundSize: 'cover', transform: `rotateY(calc(${item.id} * 45deg)) translateZ(400px)` }" :key="item.id">
         <div class="image image__clone" :style="{ background: `url(img/${item.image}.jpg)`, backgroundSize: 'cover'}"></div>   
      </div>
   </div>
</template>
<style scoped>

   .gallery__container {
      position: relative;      
      transform-style: preserve-3d;      
      transform: rotate3d(-15deg, 0, 0, 0);           
      width: 250px;
      height: 150px;
      margin: 0 auto;                   
      display: flex;
      justify-content: center;
      align-items: flex-end;        
      animation: rotateGallery 100s infinite linear;
   }

   @keyframes rotateGallery {
      0% {
         transform: perspective(1000px) rotateX(-10deg) rotateY(0);         
      }
      100% {
         transform: perspective(1000px) rotateX(-10deg) rotateY(360deg);         
      }
   }

   .gallery__title {
      position: relative;      
      font-size: 60px;      
      font-weight: bold;
      color: #333;
      text-shadow: 1px 1px 3px rgba(0,0,0,.4);
      animation: rotateTitle 100s infinite linear;
   }

   .gallery__title__clone {
      position: absolute;
      transform: scale(1, -1);
      opacity: .2;
      left: 0;
      top: 68px;
      filter: blur(1px);
   }

   @keyframes rotateTitle {     
      100% {
         transform: rotateY(-360deg);         
      }
   }

   .image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      perspective: 100px;      
      border-radius: 10px;
      /* -webkit-box-reflect: below 0 linear-gradient(transparent 0%, #fff 150%); */
   }

   .image__clone {
      position: absolute;
      left: 50%;
      top: 96%;      
      width: 93%;
      height: 100%;            
      transform: scale(1, -1) translateX(-50%) rotateX(5deg);
      opacity: .3;      
      filter: blur(1px);
   }
</style>
<script>
   export default {
      data() {
         return {
            images: [
               {
                  id: '1',
                  image: "ford",
               },
               {
                  id: '2',
                  image: "lamborghini",
               },
               {
                  id: '3',
                  image: "aston",
               },
               {
                  id: '4',
                  image: "bugatti",
               },
               {
                  id: '5',
                  image: "ford_3",
               },
               {
                  id: '6',
                  image: "camaro",
               },
               {
                  id: '7',
                  image: "lambo_concept",
               },      
               {
                  id: '8',
                  image: "ferrari",
               }
            ]
         }
      }
   }
</script>