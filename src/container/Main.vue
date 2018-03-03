<template>
  <div id="wrapper">
    <top-bar />
    <todo v-for="todo in todos" :todo="todo" :key="todo.id" class="todo" />
    <div class="btn"><strong>+</strong></div>
    <div class="btn"><strong>x</strong></div>
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
import Todo from '../components/Todo'

export default {
  name: 'Main',
  components: {
    TopBar,
    Todo
  },
  data: function () {
    return {
      todos: [
        {title: '할거', date: '2018.1.1', id: '1'},
        {title: '여행', date: '2018.01.02', id: '2'},
        {title: '여행', date: '2018.03.02', id: '3'}
      ]
    }
  }
}
</script>

<style scoped>
#wrapper {
  width: 100%;
  height: 110px;
}
.todo {
  margin-top: 50px;
}
.btn {
  width: 1.5%;
  height: 15%;
  position: relative;
  left: 70%;
  margin: 5px;
  margin-top: 15px;
  cursor: pointer;
  font-size: 15px;
  color:#7FA4B6;
  border: 2px solid #7FA4B6;
  text-align: center;
  padding-bottom: 5px;
  display: inline-block;
}
</style>
