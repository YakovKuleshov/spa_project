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
         state.newsList = news_list
      }
   },
   getters: {
      menuList(state) {
         return state.menu
      }
   },
   actions: {
      getNews(ctx) {
         fetch("http://newsapi.org/v2/top-headlines?country=ru&apiKey=2c003695d0774374902a4c4e5cb8a27e", {
            headers: {
               "Content-Type": "text/plain"
            }
         })
            .then(response => response.json())
            .then(res => {
               ctx.commit('updateNews', res.articles);
            });
      }
   }
})