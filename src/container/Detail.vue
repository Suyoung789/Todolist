<template>
  <div>
    <top-bar />
    <div id="bigger">
        <div id="title"> {{title}} </div>
        <table id="listrTable">
          <tr>
            <th id="first">Detail</th>
            <th id="second">Due-Date</th>
            <th id="third">Check</th>
          </tr>
          <tr v-for="item in 1" :key="item">
            <td class="fiin"><div class="bot">{{deatail}}</div></td>
            <td class="sein"><div class="bot2">{{due_date}}</div></td>
            <td class="thin"><input type="checkbox" class="chk"></td>
          </tr>
        </table>
      </div>
      <div id="adbtn"><strong>추가</strong></div>
      <div id="register"><strong>등록</strong></div>
  </div>
</template>

<script>
import TopBar from '../components/TopBar'

export default {
  name: 'Detail',
  components: {
    TopBar
  }
}
</script>

<style scoped>
#title {
  width: 19%;
  height: 7%;
  position: relative;
  left: 40.5%;
  top: 50px;
  border: none;
  border-bottom: 2px solid #3E516B;
  font-size: 25px;
}
table {
  border-collapse: collapse;
  margin-left: 25%;
  width: 80%;
  position: relative;
  top: 90px;
  margin: 0 auto;
}
th {
  background-color: #617B98;
  color: white;
  height: 30px;
}
#third {
  width: 15%;
}
.fiin {
  height: 70px;
}
input {
  border: none;
  height: 25px;
}
.bot {
  border-bottom: 1px solid #3E516B;
  width: 90%;
  margin: 0 auto;
}
.bot2 {
  border-bottom: 1px solid #3E516B;
  width: 95%;
  margin: 0 auto;
}
.chk {
  margin-left: 48%;
  margin-top: 2%;
}
#adbtn {
  display: inline;
  position: relative;
  right: -1325px;
  top: 110px;
  background-color: #617B98;
  color: white;
  font-size: 15px;
  padding: 3px;
  cursor: pointer;
}
#register {
  display: inline;
  position: relative;
  top: 110px;
  right: -1225px;
  background-color: #617B98;
  color: white;
  font-size: 15px;
  padding: 3px;
  cursor: pointer;
}
#listTable {
  margin-top: 50px;
}
</style>
