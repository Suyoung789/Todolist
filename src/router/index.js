import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/container/Main'
import Todo from '@/components/Todo'
import Add from '@/container/Add'

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
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    }
  ]
})
