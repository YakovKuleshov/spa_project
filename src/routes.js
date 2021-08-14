import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import pageNews from './elements/pages/page-news';
import pageGallery from './elements/pages/page-gallery';
import pageFilms from './elements/pages/page-films';
import pageOther from './elements/pages/page-other';
import Pagination from './elements/pages/other-elements/Pagination';
import InfoPage from './elements/pages/info-page'
import ShopApp from './elements/pages/shop/ShopApp'

const routes = [
   {
      path: '*',
      redirect: { name: 'home' }
   },
   {
      path: '/home',
      name: 'home',
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
      // name: 'pag',
      component: Pagination,
      // children: [
      //    {
      //       path: '/pagination/info',
      //       component: InfoPage
      //    }           
      // ]
   },
   {
      path: '/info',      
      props: true,
      component: InfoPage
   },
   {
      path: '/shop',            
      component: ShopApp      
   }     
]

export const router = new VueRouter({
   routes,
   mode: 'history'
})




