import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/container/Main'
import Todo from '@/components/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    }
  ]
})
