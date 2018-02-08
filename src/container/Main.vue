<template>
  <div>
      <top-bar />
      <to-do v-for="todos in todo" :todo="todo" :key="todo.title" />
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
import TodoList from '../components/TodoList'
import Todo from '../components/Todo'

export default {
  name: 'Main',
  components: {
    TopBar,
    TodoList,
    Todo
  },
  data: function () {
    return {
      todos: [
        {title: '할거 ', date: '2018.1.1'},
        {title: '공부', date: '2018.06.05'},
        {title: '짐챙기기', date: '2018.09.26'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
