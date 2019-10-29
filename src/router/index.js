import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import Login from '@/components/login/Login.vue'
import Message from '@/components/message/Message.vue'
import Tableform from '@/components/message/form/Tableform.vue'
import Rubbish from '@/components/message/rubbish/Rubbish.vue'
import Forum from '@/components/forum/Forum.vue'
import Partner from '@/components/partner/Partner.vue'
import More from '@/components/partner/components/More.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/message',
      name: 'Message',
      component: Message
    }, {
      path: '/message/tableform',
      name: 'Tableform',
      component: Tableform
    }, {
      path: '/message/rubbish',
      name: 'Rubbish',
      component: Rubbish
    }, {
      path: '/forum',
      name: 'Forum',
      component: Forum
    }, {
      path: '/partner',
      name: 'Partner',
      component: () => import('../components/partner/Partner.vue')
    }, {
      path: '/more/:id',
      name: 'More',
      component: More
    }
  ]
})
