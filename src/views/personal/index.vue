<template>
  <div class="personal-div">
    <div class="top-div"></div>
    <div style="display:flex;flex-flow:column;align-content:center;height:auto;width:auto;margin:-120px auto 0px auto;">
      <img style="height:240px;width:240px;border-radius:50%;margin: 10px auto;" src="../../assets/images/avatar.jpg" alt="">
      <span style="font-size:35px;font-weight:bold;width:fit-content;height:auto;line-height:2em;margin:10px auto;letter-spacing: 3px;">Holmesen</span>
    </div>

    <div class="intro-div">
      <h2>个人简介</h2>
      <p>
        一个练习两年半的个人练习生，喜欢唱、跳、rap、篮球
      </p>
    </div>

    <div class="intro-div">
      <h2>学习生涯</h2>
      <div class="study-div">
        <div class="study-part">
          <div style="height:auto;width:45%;margin: 0 auto;">
            <img src="../../assets/images/images/bg3.jpg" alt="">
          </div>
          <span style="text-align: left;margin-left:0px;">
            <h3 style="font-size:25px;margin:15px;">小学</h3>
            <div class="study-info-div">
              <div>
                <img src="../../assets/icon/school.png" alt="">
                <span>东山县第二实验小学</span>
              </div>
              <div>
                <img src="../../assets/icon/position.png" alt="">
                <span>福建省漳州市东山县</span>
              </div>
            </div>
            <p>占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......
              占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......</p>
          </span>
        </div>
        <div class="study-part">
          <span style="text-align: right;margin-right:0px;">
            <h3 style="font-size:25px;margin:15px;">中学</h3>
            <div class="study-info-div">
              <div>
                <img src="../../assets/icon/school.png" alt="">
                <span>东山县第二实验小学</span>
              </div>
              <div>
                <img src="../../assets/icon/position.png" alt="">
                <span>福建省漳州市东山县</span>
              </div>
            </div>
            <p>占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......
              占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......</p>
          </span>
          <div style="height:auto;width:45%;margin: 0 auto;">
            <img src="../../assets/images/images/bg3.jpg" alt="">
          </div>
        </div>
        <div class="study-part">
          <div style="height:auto;width:45%;margin: 0 auto;">
            <img src="../../assets/images/images/bg3.jpg" alt="">
          </div>
          <span style="text-align: left;margin-left:0px;">
            <h3 style="font-size:25px;margin:15px;">大学</h3>
            <div class="study-info-div">
              <div>
                <img src="../../assets/icon/school.png" alt="">
                <span>东山县第二实验小学</span>
              </div>
              <div>
                <img src="../../assets/icon/position.png" alt="">
                <span>福建省漳州市东山县</span>
              </div>
            </div>
            <p>占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......
              占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......占位置的一段很长很长很长的文字......</p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'personal'
  }
</script>

<style scoped>
.personal-div{
  height: auto;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-content: center;
}
.top-div{
  height: 600px;
  width: 100%;
  background: url('../../assets/images/images/bg3.jpg') no-repeat fixed center;
}

.intro-div{
  height: auto;
  width: 75%;
  align-content: center;
  text-align: center;
  display: flex;
  flex-flow: column;
  margin: 40px auto;
}

.study-div{
  display: flex;
  flex-flow: column;
  width: 100%;
  height: auto;
}
.study-part{
  display: flex;
  flex-flow: row;
  width: 100%;
  height: auto;
  margin: 40px auto;
}
/* .study-part:nth-of-type(odd){
  float: left;margin: 20px auto 20px 10px;
}
.study-part:nth-of-type(even){
  float: right;margin: 20px 10px 20px auto;
} */
.study-part img{
  height: auto;
  width: 100%;
}
.study-part>span{
  height: auto;
  width: 45%;
  display: flex;
  flex-flow: column;
  margin: 0 auto;
}
.study-info-div{
  display: flex;
  flex-flow: row;
  margin: 10px auto 10px 0px;
}
.study-info-div>div{
  display: flex;
  flex-flow: row;
  align-content: center;
  margin: auto 30px auto 0px;
  width: fit-content;
}
.study-info-div>div>img{
  height: 30px;
  width: 30px;
  margin: auto;
}
.study-info-div>div>span{
  font-size: 14px;
  line-height: 30px;
  margin-left: 10px;
}
</style>