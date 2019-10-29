// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/styles/reset.min.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'


// import {
//   Menu,
//   Submenu,
//   MenuItem,
//   MenuItemGroup,
//   Input,
//   InputNumber,
//   Icon,
//   Row,
//   Col,
//   Table,
//   TableColumn,
//   Button,
//   ButtonGroup,} from 'element-ui'

// Vue.use(Menu);
// Vue.use(Submenu);
// Vue.use(MenuItem);
// Vue.use(MenuItemGroup);
// Vue.use(Input);
// Vue.use(InputNumber);
// Vue.use(Icon);
// Vue.use(Row);
// Vue.use(Col);
// Vue.use(Table);
// Vue.use(TableColumn);
// Vue.use(Button);
// Vue.use(ButtonGroup);
Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);
Vue.config.productionTip = false;


Vue.directive('drag', {
  inserted(el, binding, vNode) {
    el.setAttribute('style', 'position: fixed; z-index: 9999')
  },

  bind(el, bindding, vNode) {
    el.setAttribute('draggable', true)
    let left, top, width, height
    el._dragstart = function (event) {
      event.stopPropagation()
      left = event.clientX - el.offsetLeft
      top = event.clientY - el.offsetTop
      width = el.offsetWidth
      height = el.offsetHeight
    }
    el._checkPosition = function () { // 防止被拖出边界
      let width = el.offsetWidth
      let height = el.offsetHeight
      let left = Math.min(el.offsetLeft, document.body.clientWidth - width)
      left = Math.max(0, left)
      let top = Math.min(el.offsetTop, document.body.clientHeight - height)
      top = Math.max(0, top)
      el.style.left = left + 'px'
      el.style.top = top + 'px'
      el.style.width = width + 'px'
      el.style.height = height + 'px'
    }
    el._dragEnd = function (event) {
      event.stopPropagation()
      left = event.clientX - left
      top = event.clientY - top
      el.style.left = left + 'px'
      el.style.top = top + 'px'
      el.style.width = width + 'px'
      el.style.height = height + 'px'
      el._checkPosition()
    }
    el._documentAllowDraop = function (event) {
      event.preventDefault()
    }
    document.body.addEventListener('dragover', el._documentAllowDraop)
    el.addEventListener('dragstart', el._dragstart)
    el.addEventListener('dragend', el._dragEnd)
    window.addEventListener('resize', el._checkPosition)
  },

  unbind(el, bindding, vNode) {
    document.body.removeEventListener('dragover', el._documentAllowDraop)
    el.removeEventListener('dragstart', el._dragstart)
    el.removeEventListener('dragend', el._dragEnd)
    window.removeEventListener('resize', el._checkPosition)
    delete el._documentAllowDraop
    delete el._dragstart
    delete el._dragEnd
    delete el._checkPosition
  },

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
