<template>
   <div class="info__page">
      <div class="info__page__container">
         <h1 style="text-align: center">Информация</h1>
         <div class="image__block">
            <div class="image__container">
               <img class="image" :src="dataInfo.urlToImage" alt="image">   
            </div>      
         </div>
         <div class="text__block">{{ dataInfo.content }}</div>   
         <div class="back" @click="toBackPage">Назад</div>
     </div>
   </div>
</template>

<style scoped>
   .info__page__container {
      max-width: 1000px;
      margin: 0 auto;
      background: #fff;
      padding: 10px 30px 30px;
      box-sizing: border-box;
      box-shadow: 25px 35px 45px rgb(0,0,0,.4);
   }

   .image__block {
      max-width: 700px;
      margin: 0 auto 40px;
   }

   .image__container {
      position: relative;
      padding-top: 52%;      
   }

   .image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: fill;      
   }

   .text__block {
      user-select: all;
      margin-bottom: 40px;
      line-height: 24px;
   }

   .back {
      display: inline-block;
      cursor: pointer;
      color: #07f;
      font-size: 20px;
      letter-spacing: .01em;      
   }
</style>

<script>
   export default {      
      data() {
         return {
            dataInfo: ''
         }
      },
      methods: {
         toBackPage() {            
            // this.$router.go(-1)
            // this.$router.push({name: '/pagination', query: `?page=${this.dataInfo.page}`, params: {from: 'from-info'}});
            this.$router.push(`/pagination?page=${this.dataInfo.page}`)
         }
      },
      activated() {
         this.dataInfo = localStorage.getItem('info_data') ? JSON.parse(localStorage.getItem('info_data')) : '';
         if(!this.dataInfo) this.$router.push('/pagination?page=1');
      }     
   }
</script>