<template>
  <div id="wrap">
    <div id="header"><p>Todo list</p></div>
    <div id="content"></div>
  </div>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>

<style scoped>
#header {
  width: 100%;
  height: 110px;
  background-color: #7FA4B6;
}
#header > p {
  font-size: 45px;
  color: white;
  text-align: center;
  position: relative;
  top: 15%;
}
</style>
