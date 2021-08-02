<template>
   <div id="infinite">
      <div class="wrapper" ref="wrap">
         <div class="container" :style="{ transform: `translateX(${left}%)`, transition: `${transition}s` }" ref="container" @transitionend="resetLeft">
            <div class="slide__container" v-for="(item, index) in wallpapers" :key="index" :style="{ width: `${100 / toShow}%` }" ref="items">
               <div  class="slide__item" :style="{ backgroundImage: `url(img/${item.image}.jpg)` }"></div>
            </div>
         </div>
         <div class="dots">
            <div v-for="(item, index) in dots" class="dot__item" :class="{ dot__active: index == current }" :key="index" ref="dotItem" @click="chooseSlide(index)" @mouseenter="autoplay = false"></div>
         </div>
      </div>
      <input type="text" placeholder="Количество слайдов" maxlength="1" @keypress="toShowCount" @input="onlyNumbers" @blur="$event.target.value = ''">
      <div class="slide__count">Показывать по {{ toShow }}</div>   
      <div class="switcher">
         <div class="sw__switcher" :class="{ switcher__active: autoplay }" @click="autoplay = !autoplay"></div>
         <div class="sw__text" :class="{ sw__text__active: autoplay }">Авто</div>   
      </div>  
      <template v-if="autoplay">
         <div class="progress__change" :style="{ width: `${progressWidth}%` }"></div>
         <div class="remaining">{{ Math.round(progressWidth / step) }}</div>
      </template>    
      <div class="buttons next" @click="toNextSlide" @mouseenter="autoplay = false"></div>
      <div class="buttons prev" @click="toPrevSlide" @mouseenter="autoplay = false"></div>
   </div>
</template>

<style scoped>
   #infinite {
      height: 500px;
      position: relative;
   }
   
   .switcher {
      position: absolute;
      top: 30px;
      right: 10px;
      display: flex;
      align-items: center;
   }

   .sw__switcher {
      position: relative;
      width: 45px;
      height: 20px;
      transition: .3s;
      background: #fff;
      border-radius: 10px;
      margin-right: 10px;
      box-shadow: 1px 1px 3px rgba(0,0,0,.8) inset;
      cursor: pointer;
   }

   .sw__switcher:after {
      content: '';
      position: absolute;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      top: 50%;
      left: 0;
      transition: .3s;
      transform: translateY(-50%);
      background: #0099ff;
      box-shadow: 1px 3px 7px rgba(0,0,0,.5);
   }

   .switcher__active::after {
      left: 23px;
   }

   .switcher__active {
      background: #0099ff;
   }

   .sw__text {
      transition: .3s;
      font-size: 20px;
      text-shadow: 1px 1px 2px rgba(0,0,0,.5);
      font-weight: bold;
      color: #333;
   }

   .sw__text__active {
      color: #0099ff;
   }

   .progress__change {
      position: absolute;
      top: 80px;
      left: 0;
      height: 3px;
      background: red;
      border-radius: 10px;
   }

   .remaining {
      position: absolute;
      top: 96px;
      left: 0;
      font-size: 25px;
      font-weight: bold;
      color: #333;
      text-shadow: 1px 1px 2px rgba(0,0,0,.5);
   }

   .slide__count {
      position: absolute;
      top: 10px;
      left: 50%;
      font-size: 40px;
      color: #a2f8fc;
      font-weight: bold;
      text-shadow: 1px 1px 2px rgba(0,0,0,.5);
      transform: translateX(-50%);
   }

   input {
      position: relative;
      top: 10px;
      left: 10px;
      display: block;
      outline: none;
      border: 1px solid #ccc;
      height: 40px;
      box-sizing: border-box;
      padding: 0 10px;
      border-radius: 6px;
      letter-spacing: .2px;
      box-shadow: 3px 3px 3px rgba(0,0,0,.5) inset;
      width: 200px;
      font-size: 20px;
   }

   input::placeholder {
      color: #c7c7c7;
      font-size: 16px;
   }

   .wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
   }

   .container {
      height: 500px;
      display: flex;
      align-items: center;      
   }

   .slide__container {
      padding: 0 10px;
      height: 234px;
      flex-shrink: 0;
      box-sizing: border-box;
   }

   .slide__item {
      border-radius: 10px;
      box-shadow: 7px 7px 10px rgba(0,0,0,.5);
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
   }

   .buttons {
      cursor: pointer;
      position: absolute;
      top: 45%;
      border-radius: 3px;
      transform: translateY(-50%);
   }

   .next {
      width: 30px;
      height: 30px;
      right: -4%;
      border-bottom: 5px solid #07f;
      border-right: 5px solid #07f;
      transform: rotate(-45deg);
   }

   .prev {
      width: 30px;
      height: 30px;
      left: -4%;
      border-bottom: 5px solid #07f;
      border-left: 5px solid #07f;
      transform: rotate(45deg);
   }

   .dots {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      bottom: 5%;
      left: 50%;
      transform: translateX(-50%);
   }

   .dot__item {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #333;
      cursor: pointer;
      flex-shrink: 0;
      box-shadow: 1px 2px 6px rgba(0,0,0,.7);
      transition: .5s;
   }

   .dot__item:not(:last-of-type) {
      margin-right: 10px;
   }

   .dot__active {
      background: #0099ff;
       box-shadow: 0 0 0 rgba(0,0,0,.7);;
   }
      
</style>

<script>
   export default {
      data() {
         return {
            left: -100,
            current: 0,
            transition: 0,
            flag: true,
            progressWidth: 0,
            toShow: '',
            autoplay: false,
            step: 25,
            dots: [],
            clone: [],
            wallpapers: [
               {
                  image: "ford",
               },
               {
                  image: "lamborghini",
               },
               {
                  image: "aston",
               },
               {
                  image: "bugatti",
               },
               {
                  image: "ford_3",
               },
               {
                  image: "camaro",
               },
               {
                  image: "lambo_concept",
               },      
               {
                  image: "ferrari",
               },
               {
                  image: "ferrari_3",
               },
               {
                  image: "concept",
               },
               {
                  image: "ferrari_2",
               },
               {
                  image: "citroen",
               },
               {
                  image: "ford_2",
               },
               {
                  image: "corvette",
               },
               {
                  image: "mercedes",
               },
               {
                  image: "huracan",
               },
               {
                  image: "porshe_2",
               },
               {
                  image: "mclaren",
               }            
            ],
            updateSlider() {
               this.wallpapers = this.clone.slice(0)
               this.dots = this.wallpapers.map((el, k) => 100 / this.toShow * k);
               
               let first =  this.wallpapers.slice(0, this.toShow);
               this.wallpapers.push(...first) 
               
               let last =  this.wallpapers.slice(this.wallpapers.length - this.toShow - this.toShow, this.wallpapers.length - this.toShow);               
               this.wallpapers.unshift(...last);
            }
         }
      },
      watch: {
         toShow() {
            this.autoplay = false
            this.updateSlider()
         },
         autoplay(val) {           
            if(val) {
               this.progressInterval = setInterval(() => {
                  this.progressWidth+= .5
                    if(this.progressWidth > 100) {
                     this.progressWidth = 0
                     this.toNextSlide()
                  }
               }, this.step)
            }else {
               this.progressWidth = 0
               clearInterval(this.progressInterval);
            }
         }
      },
      methods: {
         toShowCount(e) {
            if(e.keyCode == 13) {
               this.toShow = Number(e.target.value.trim())
               e.target.value = ''
               this.transition = 0
               this.current = 0
               this.left = -100
            }
         },
         onlyNumbers(e) {
            e.target.value = e.target.value.replace(/[^\d]/g, '');
            if(e.target.value === '0') e.target.value = 1
         },
         chooseSlide(index) {
            this.current = index
            this.transition = .5
            this.left = -100 / this.toShow * this.current 
         },
         toNextSlide() {
            let items = this.$refs.items
            let wrapp = this.$refs.wrap
            if(!this.flag) return false
            this.flag = false
            this.current++ 
          
            if(this.current > this.dots.length - 1) {
               this.current = 0
            }
            this.transition = .5
            this.left += -100 / this.toShow                   
         },
         toPrevSlide() {
            if(!this.flag) return false
            this.flag = false
            this.transition = .5
            this.current--
            if(this.current < 0) {
               this.current = this.dots.length - 1
            }
            this.left += 100 / this.toShow           
         },
         resetLeft() {
            let items = this.$refs.items
            if(this.left < -(((this.dots.length - 1)  + this.toShow) / this.toShow * 100)) {
               this.transition = 0
               this.left = -100
            }
           
            if(this.left.toFixed() == 0) {
               this.transition = 0
               this.left = -(this.dots.length / this.toShow * 100)
            }
            this.flag = true
         }                     
      },
      mounted() {
         this.clone = this.wallpapers.slice(0);
        
         this.toShow = 3
      }
   }
</script>