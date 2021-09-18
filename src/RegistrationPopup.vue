<template>
   <div class="overlay" @click="close">
      <form action="" @click.stop @submit.prevent="send">         
         <input class="registration__input" type="text" placeholder="Логин" v-model.trim="registrationData.login" @input="error = false">            
         <input class="registration__input" type="text" placeholder="Пароль" v-model.trim="registrationData.password" @input="error = false">       
         <div v-if="error" class="error__text">Неверный логин или пароль</div>
         <button class="form__submit__button" type="submit">Войти</button>
      </form>
   </div>
</template>

<style scoped>
   .overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,.5);
      z-index: 10;
      padding: 10px;
   }

   form {
      width: 100%;
      height: 100%;
      max-width: 500px;
      max-height: 200px;
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 5px 5px 20px rgba(0,0,0,.6);
      display: flex;
      flex-direction: column;       
   }

   

   input {
      display: block;
      height: 40px;
      width: 100%;
      border-radius: 5px;
      border: 1px solid #ccc;
      padding: 0 10px;
      box-sizing: border-box;
      transition: .2s;      
      font-size: 17px;
      margin-bottom: 20px;
      outline: none;
   }

   .registration__input:last-of-type {
      margin-bottom: 0;
   }

   .registration__input:focus {
      border: 1px solid #07f;      
   }    

   .error__text {      
      font-size: 13px;
      margin-top: 10px;    
      color: red;  
      letter-spacing: .5px;
   }

   .form__submit__button {
      margin-top: auto;
      align-self: self-end;
      height: 35px;
      width: 150px;
      background: #0099ff;
      color: #fff;
      outline: none;
      border: none;
      cursor: pointer;
      border-radius: 5px;
   }
</style>

<script>
   import { mapState, mapMutations } from 'vuex';

   export default {
      data() {
         return {
            error:false,
            registrationData: {
               login: '',
               password: ''
            }
         }
      },
      computed: {
         ...mapState('mainStore', ['loginData']),
         isValidData() {
            return this.registrationData.login.toLowerCase() === this.loginData.login && this.registrationData.password.toLowerCase() === this.loginData.password;
         }
      }, 
      methods: {
         ...mapMutations('mainStore', ['setAdmin']),
         close() {
            this.$emit('closeRegistrationModal');
         },
         send() {
            if(this.isValidData) {
               localStorage.setItem('is_admin', true);
               this.setAdmin(Boolean(localStorage.getItem('is_admin')));
               this.close();
            }else {
               this.error = true;
            }
         }
      },
      mounted() {
         document.body.style.overflow = 'hidden';
      },
      destroyed() {
         document.body.removeAttribute('style');
      }
   }
</script>