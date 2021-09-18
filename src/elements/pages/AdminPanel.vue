<template>
   <div class="admin__panel">
      <h2>Админ панель</h2>
      <div class="wrapper__row">
         <router-link class="link" v-for="link in menuList" :to="link.id" :key="link.id">{{ link.name }}</router-link>
      </div>
      <div class="section">
         <div class="label input__label">Заголовок</div>
         <input class="text__input" :value="mainSettings.title" type="text" placeholder="Заголовок..." @input="changeTitle($event.target.value)">
         <div class="color__title__wrapper">
            <div class="label">Цвет заголовка</div>            
            <label class="color__label">
               <div class="example" :style="{backgroundColor: mainSettings.title_color}">
                  <input class="color__input" type="color" :value="mainSettings.title_color" @input="setTitleColor($event.target.value)">
               </div>
            </label>         
         </div>            
      </div>
      <div v-if="!noChanges()" class="save__button" @click="saveSettings">
         <span v-if="!isSpiner">Сохранить</span>
         <div v-if="isSpiner" class="spiner"></div>   
      </div>               
   </div>
</template>

<style scoped>
   .admin__panel {
      max-width: 1000px;
      min-height: 400px;
      background: #fff;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      padding: 20px;
      box-sizing: border-box;
      border-radius: 7px;
      box-shadow: 13px 31px 50px rgb(0 0 0 / 50%);
   }

   .admin__panel h2 {
      padding: 10px 0 20px;      
   }

   .wrapper__row {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
   }

   .link {
      margin-right: 10px;
      color: #07f;
      letter-spacing: .3px;
   }

   .section {
      margin-bottom: 20px;
   }

   .input__label {
      margin-bottom: 10px;
   }

   .text__input {
      display: block;
      height: 40px;
      border-radius: 5px;
      border: 1px solid #ccc;
      outline: none;
      font-size: 17px;
      padding: 0 10px;
      box-sizing: border-box;
      width: 100%;
      background: #e6edf7;
   }

   .color__label {
     cursor: pointer; 
     margin-left: auto;
   }

   .color__title__wrapper {
      display: flex;
      align-items: center;
      margin-top: 10px;
   }

   .label {
      letter-spacing: .3px;
      font-weight: bold;
   }

   .example {
      width: 100px;
      height: 30px;
      border: 1px solid #ccc;
      margin-left: auto;
      position: relative;
      border-radius: 5px;
   }

   .color__input {
      width: 100%;
      height: 100%;      
      left: -130px;
      top: 5px;
   }
  
   .save__button {
      background: #07f;    
      min-width: 100px;  
      height: 40px;
      border-radius: 5px;
      text-align: center;
      line-height: 40px;
      color: #fff;
      letter-spacing: 1px;
      cursor: pointer;
      padding: 0 20px;
      margin-top: auto;
      align-self: flex-end;
      position: relative;
   }

   .spiner {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 3px solid #fff;
      border-right-color: transparent;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: rotateSpiner .5s infinite linear;
   }

   input[type="color"] {
      position: absolute;
      visibility: hidden;
   }

   @keyframes rotateSpiner {
      100% {
         transform: translate(-50%, -50%) rotateZ(360deg);
      }
   }

   
</style>

<script>
   import { mapState, mapMutations } from 'vuex';
   export default {
      data() {
         return {
            isSpiner: false
         }
      },
      computed: {
         ...mapState('mainStore', ['mainSettings', 'menuList'])         
      },    
      methods: {
         ...mapMutations('mainStore', ['changeTitle', 'setTitleColor']),         
         noChanges() {            
            return localStorage.getItem('settings') === JSON.stringify(this.mainSettings);
         },
         saveSettings() {
            this.isSpiner = true;
            setTimeout(() => {
               localStorage.setItem('settings', JSON.stringify(this.mainSettings));
               this.isSpiner = false;
            }, 1000);            
         }
      }
   }
</script>