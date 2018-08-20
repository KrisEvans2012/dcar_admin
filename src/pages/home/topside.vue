<template>
  <div class="top_side">
    <div class="nav_icon" @click="toggleSide" :class="{'hideIcon':this.$store.state.sidebarState !== 'hide', 'showIcon':this.$store.state.sidebarState !== 'show'}">
      <font-awesome-icon :icon="['fas', 'bars']" color="#000" size="lg" />
    </div>
    <div class="welcome">
      <h3>欢迎登陆<span>DCAR</span>后台系统！</h3>
      <p id="time">2018年11月11日 14:33</p>
    </div>
    <div class="info">
      <span class="username">旺财666</span>
      <span class="quit">退出</span>
      <img class="face" src="../../assets/img/sidebar/face.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'topSide',
  data () {
    return {
    }
  },
  methods: {
    // 点击缩放侧边栏
    toggleSide () {
      if (this.$store.state.sidebarState === 'show') {
        this.$store.commit('toggle', 'hide')
      } else {
        this.$store.commit('toggle', 'show')
      }
    },
    getNowFormatDate: function () {
      var nowTime = document.getElementById('time')
      var date = new Date()
      var month = date.getMonth() + 1
      var strDate = date.getDate()
      var hour = date.getHours()
      var minute = date.getMinutes()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      if (hour >= 0 && hour <= 9) {
        hour = '0' + hour
      }
      if (minute >= 0 && minute <= 9) {
        minute = '0' + minute
      }
      var currentdate =
        date.getFullYear() +
        '年' +
        month +
        '月' +
        strDate +
        '日' +
        '  ' +
        hour +
        ':' +
        minute
      nowTime.innerHTML = currentdate
    }
  },
  mounted () {
    this.getNowFormatDate()
    this.toggleSide()
  }
}
</script>
<style lang="scss" scoped>
.hideIcon{
  transform: rotate(90deg);
}
.showIcon{
  transform: rotate(0);
}
.top_side {
  box-shadow: 0px -1px 20px rgba(92, 95, 244, 0.14) inset;
  background-color: #ffffff;
  padding: 0 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  line-height: 70px;
  position: relative;
  .nav_icon{
    position: absolute;
    left: 30px;
    transition: 0.5s;
  }
  .welcome {
    display: flex;
    align-items: center;
        h3 {
      font-size: 20px;
      color: #24354c;
      margin-right: 106px;
      padding-left: 30px;
      span {
        font-weight: bold;
        margin: 0 10px;
      }
    }
    #time {
      font-size: 16px;
      color: #7e89aa;
    }
  }
  .info {
    font-size: 14px;
    display: flex;
    align-items: center;
    .username {
      color: #50505c;
    }
    .quit {
      color: #4349cc;
      margin: 0 10px;
    }
    .face {
      width: 34px;
      height: 34px;
      border-radius: 100%;
    }
  }
}
</style>
