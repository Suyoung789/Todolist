<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
html, body {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  font-family:'NanumGothic';
}
#app {
  width: 100%;
  height: 100%;
}
</style>
