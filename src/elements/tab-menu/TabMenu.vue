<template>
   <div class="tab__menu">
      <div class="tab__menu__row">
         <div class="tab__menu__item" :class="{ active: current == item.id }" v-for="item in tabs" :key="item.id" @click=" current = item.id">{{ item.name }}</div>
      </div>
      <div class="content__menu">
         <component :is="getComponent"></component>
      </div>
   </div>
</template>

<style scoped>
   .tab__menu {
      max-width: 1000px;
      margin: 200px auto 100px;
   }

   .tab__menu__row {
      display: flex;
      justify-content: center;
   }

   .tab__menu__item {
      position: relative;
      width: 23.7%;
      text-align: center;
      z-index: 1;
      color: #ccc;
      height: 50px;
      line-height: 50px;
      cursor: pointer;
      perspective: 100px;
      font-weight: bold;
      text-shadow: 1px 1px 2px rgba(0,0,0,.8);
      letter-spacing: .5px;
      text-transform: uppercase;
   }

   .tab__menu__item::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: -6px;
      z-index: -1;
      transform: rotateX(45deg);
      border: 2px solid #333;
      border-bottom: none;
      box-sizing: border-box;     
      background: grey;
   }

   .content__menu {
      height: 400px;
      margin-top: -11px;
      border: 1px solid #333;
      border-top: none;
      box-sizing: border-box;
      position: relative;
      z-index: 1;
      box-shadow: 1px 18px 18px rgba(0,0,0,.3);
      border-radius: 4px 4px 10px 10px;
      background:#ccc;
      padding: .1px 20px 20px;
   }

   .active {
      color: #333;
      z-index: 2;
   }

   .active::after {
      background: #ccc;
   }
</style>

<script>
   import Media from './content/Media'
   import Market from './content/Market'
   import Wiki from './content/Wiki'
   import Addresses from './content/Addresses'

   export default {
      data() {
         return {
            current: 'media',           
            tabs: [
               {
                  id: 'media',
                  name: 'Медиа'
               },
               {
                  id: 'market',
                  name: 'Маркет'
               },
               {
                  id: 'wiki',
                  name: 'Вики'
               },
               {
                  id: 'address',
                  name: 'Адреса'
               }
            ]
         }
      },
      computed: {
         getComponent() {
            switch(this.current) {
               case 'media': return Media
               case 'market': return Market
               case 'wiki': return Wiki
               case 'address': return Addresses
            }
         }
      }
   }
</script>