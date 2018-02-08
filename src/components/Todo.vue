<template>
    <div class="big">
        <div class="title"><p>여행</p></div>
        <div class="date"><p>2018.05.28</p></div>
        <input type="checkbox" class="check">
    </div>
</template>

<script>
export default {
  name: 'Todo'
}
</script>

<style scoped>
.big {
    width: 48%;
    border-bottom: 2px solid black;
    height: 5%;
    margin: auto;
    margin-top: 30px;
    position: relative;
}
.title {
    position: absolute;
}
.date {
    position: absolute;
    right: 10%;
}
.check {
    position: absolute;
    right: 30px;
    bottom: 0.8rem;
}
</style>
