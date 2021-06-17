import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import pageNews from './elements/pages/page-news';
import pageGallery from './elements/pages/page-gallery';
import pageFilms from './elements/pages/page-films';
import pageOther from './elements/pages/page-other';
import Pagination from './elements/pages/other-elements/Pagination';

const routes = [
   {
      path: '*',
      redirect: { name: 'home' }
   },
   {
      name: 'home',
      path: '/home',
      component: pageNews
   },
   {
      path: '/gallery',
      component: pageGallery,
   },
   {
      path: '/films',
      component: pageFilms
   },
   {
      path: '/other',
      component: pageOther
   },
   {
      path: '/pagination',
      component: Pagination
   }
]

export const router = new VueRouter({
   routes,
   mode: 'history'
})




