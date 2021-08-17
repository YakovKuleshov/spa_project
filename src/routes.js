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
      component: pageNews,
      meta: 'Новости'
   },
   {
      path: '/gallery',
      component: pageGallery,
      meta: 'Галерея'
   },
   {
      path: '/films',
      component: pageFilms,
      meta: 'Фильмы'
   },
   {
      path: '/other',
      component: pageOther,
      meta: 'Разное'
   },
   {
      path: '/pagination',
      // name: 'pag',
      component: Pagination,
      meta: 'Пагинация'
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
      component: InfoPage,
      meta: 'Информация'
   },
   {
      path: '/shop',            
      component: ShopApp,
      meta: 'Магазин'      
   }     
]

const rout = routes.find(el => el.path === location.pathname);
document.title = rout ? rout.meta : routes[1].meta;

export const router = new VueRouter({
   routes,
   mode: 'history'
})




