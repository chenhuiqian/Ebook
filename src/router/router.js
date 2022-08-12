import Vue from 'vue'
import VueRouter from 'vue-router'
import Ebook from '../views/ebook/index.vue'
import EbookReader from '@/components/ebook/EbookReader.vue'
import store from '../views/store/index.vue'
import storehome from '../views/store/StoreHome.vue'
import StoreList from '../views/store/StoreList.vue'
import StoreDetail from '../views/store/StoreDetail.vue'
import shelf from '../views/store/StoreShelf.vue'
import category from '../views/store/StoreCategory.vue'
import speaking from '../views/store/StoreSpeaking.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/store'
  },
  {
    path: '/ebook',
    component: Ebook,
    children: [
      {
        path: ':fileName',
        component: EbookReader
      }
    ]
  },
  {
    path:'/store',
    component:store,
    redirect:'/store/home',
    children:[
      {
        path:'home',
        component:storehome
      },
      {
        path: 'list',
        component:StoreList
      },
      {
        path: 'detail',
        component:StoreDetail
      },
      {
        path: 'shelf',
        component:shelf
      },
      {
        path: 'category',
        component:category
      },
      {
        path: 'speaking',
        component:speaking
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
