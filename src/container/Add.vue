<template>
  <div>
      <top-bar />
      <div id="bigger">
        <input type="text" id="title">
        <table id="listTable">
          <tr>
            <th id="first">Detail</th>
            <th id="second">Due-Date</th>
            <th id="third">Check</th>
          </tr>
          <tr>
            <td class="fiin"><div class="bot"><input type="text" class="fiinbox"></div></td>
            <td class="sein"><div class="bot2"><input type="text" class="seinbox"></div></td>
            <td class="thin"><input type="checkbox" class="chk"></td>
          </tr>
          <tr>
            <td class="fiin"><div class="bot"><input type="text" class="fiinbox"></div></td>
            <td class="sein"><div class="bot2"><input type="text" class="seinbox"></div></td>
            <td class="thin"><input type="checkbox" class="chk"></td>
          </tr>
          <tr>
            <td class="fiin"><div class="bot"><input type="text" class="fiinbox"></div></td>
            <td class="sein"><div class="bot2"><input type="text" class="seinbox"></div></td>
            <td class="thin"><input type="checkbox" class="chk"></td>
          </tr>
          <tr>
            <td class="fiin"><div class="bot"><input type="text" class="fiinbox"></div></td>
            <td class="sein"><div class="bot2"><input type="text" class="seinbox"></div></td>
            <td class="thin"><input type="checkbox" class="chk"></td>
          </tr>
          <tr>
            <td class="fiin"><div class="bot"><input type="text" class="fiinbox"></div></td>
            <td class="sein"><div class="bot2"><input type="text" class="seinbox"></div></td>
            <td class="thin"><input type="checkbox" class="chk"></td>
          </tr>
        </table>
      </div>
      <div id="adbtn"><strong>추가</strong></div>
      <div id="register"><strong>등록</strong></div>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'

export default {
  name: 'Add',
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
  top: 20px;
  border: none;
  border-bottom: 2px solid #3E516B;
  font-size: 25px;
}
table {
  border-collapse: collapse;
  margin-left: 25%;
  width: 80%;
  position: relative;
  top: 50px;
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
input {
  border: none;
  height: 25px;
}
.fiinbox {
  width: 530px;
  font-size: 15px;
}
.seinbox {
  width: 300px;
  font-size: 15px;
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
  right: -1180px;
  top: 80px;
  background-color: #617B98;
  color: white;
  font-size: 15px;
  padding: 3px;
  cursor: pointer;
}
#register {
  display: inline;
  position: relative;
  top: 80px;
  right: -1080px;
  background-color: #617B98;
  color: white;
  font-size: 15px;
  padding: 3px;
  cursor: pointer;
}

</style>
