import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      newsList: [],
      menu: [
         {
            id: '/home',
            name: 'Новости'
         },
         {
            id: '/gallery',
            name: 'Галерея'
         },
         {
            id: '/films',
            name: 'Фильмы'
         },
         {
            id: '/other',
            name: 'Разное'
         }
      ]
   },
   mutations: {
      updateNews(state, news_list) {
         state.newsList = news_list;
      }
   },
   getters: {
      menuList(state) {
         return state.menu;
      },
      newsList(state) {
         return state.newsList;
      }
   },
   actions: {
      async getNews(ctx) {
         const response = await fetch("http://newsapi.org/v2/top-headlines?country=ru&apiKey=2c003695d0774374902a4c4e5cb8a27e");         
         const res = await response.json();
         ctx.commit('updateNews', res.articles);         
      }
   }
})