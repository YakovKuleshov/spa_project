<template>
   <div id="slider">
      <div class="image" :style="{ backgroundImage: `url(img/${wallpapers[current].image}.jpg)`}">
         <div class="buttons next" @click="toNextSlide"></div>
         <div class="buttons prev" @click="toPrevSlide"></div>
      </div>
      <div class="dots__container" ref="dotsContainer">
         <div class="dots">
            <div v-for="(item, index) in wallpapers" class="dot__item" :key="index" :class="{ active: index === current }" ref="dotItem" @click="chooseSlide(index)">
               <div class="dot__image" :style="{ background: `url(img/${item.image}.jpg) no-repeat center`, backgroundSize: 'cover' }"></div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>

#slider {
   position: relative;   
}

.image {
   position: relative;
   padding-top: 56%;
   margin-bottom: 30px;
   transition: 0.3s;
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   box-shadow: 12px 20px 33px rgba(0, 0, 0, 0.7);
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
   right: -70px;
   border-bottom: 5px solid #07f;
   border-right: 5px solid #07f;
   transform: rotate(-45deg);
}

.prev {
   width: 30px;
   height: 30px;
   left: -70px;
   border-bottom: 5px solid #07f;
   border-left: 5px solid #07f;
   transform: rotate(45deg);
}

.dots__container {
   overflow: hidden;
   width: 1300px;
   padding: 30px 0;
   scroll-behavior: smooth;
   margin-left: -250px;
}

.dots__container::-webkit-scrollbar {
   display: none;
}

.dots {
   display: flex;
   align-items: center;
   margin: 0 auto;
}

.dot__item {
   width: 180px;
   height: 101px;
   display: flex;
   justify-content: center;
   cursor: pointer;
   padding: 0 10px;
   flex-shrink: 0;
}

.dot__image {
   position: relative;
   width: 100%;
   height: 100%;
   transition: .3s;
   box-shadow: 8px 10px 15px rgba(0, 0, 0, 0.8);
}

.active {
   pointer-events: none;
}

.active .dot__image {
   box-shadow: 0 0 0 rgba(0, 0, 0, 0.8), 0 0 0 3px #07f inset;
   box-sizing: border-box;
   transform: translate(2px, 2px);
}
</style>

<script>
export default {
   data() {
      return {
         current: 0,
         flag: true,
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
         ]
      };
   },
   watch: {
      current(val) {
         this.centeringActive(val)
      }
   },
   methods: {
      centeringActive(current) {
         const container = this.$refs.dotsContainer
         const active = this.$refs.dotItem.find(el => el.classList.contains('active'));
         
         container.scrollLeft = active.offsetWidth * current - container.offsetWidth / 2 + active.offsetWidth / 2
      },

      toNextSlide() {
         if (!this.flag) return false;
         this.current++;
         this.flag = false;
         if (this.current > this.wallpapers.length - 1) {
            this.current = 0;
         }

         setTimeout(() => {
            this.flag = true;
         }, 400)
      },

      toPrevSlide() {
         if (!this.flag) return false;
         this.current--;
         this.flag = false;
         if (this.current < 0) {
            this.current = this.wallpapers.length - 1;
         }

         setTimeout(() => {
            this.flag = true;
         }, 400)
      },
      
      chooseSlide(index) {
         if (!this.flag) return false;
         this.flag = false;
         this.current = index;

         setTimeout(() => {
            this.flag = true;
         }, 400)
      }
   },
   mounted() {}
};
</script>