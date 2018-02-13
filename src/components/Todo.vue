<template>
    <div id="big">
        <div type="text" id="title">~~</div>
        <div id="date">등록한 날</div>
        <input type="checkbox" id="check">
    </div>
</template>

<script>
export default {
  name: 'Todo'
}
</script>

<style scoped>
#big {
    width: 50%;
    height: 25px;
    border-bottom: 1px solid black;
    margin: 0 auto;
    margin-top: 50px;
    padding: 0;
}
#title {
    /* border: 1px solid black; */
    width: 15%;
    height: 20px;
    float: left;
    font-size: 20px;
    border: none;
}
#date {
    /* border: 1px solid black; */
    width: 15%;
    float: left;
    margin-left: 420px;
}
#check {
    float: left;
    margin-left: 650px;
    margin-top: -15px;
}
</style>
