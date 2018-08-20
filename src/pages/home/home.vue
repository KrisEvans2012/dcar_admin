<template>
  <div class="home_wrap">
    <!--左侧导航-->
    <div class="left_wrap" :class="{'hide_left':this.$store.state.sidebarState !== 'hide'}">
      <left-side></left-side>
    </div>
    <!--右侧-->
    <div class="right_wrap" :class="{'hide_right':this.$store.state.sidebarState !== 'hide'}">
      <!--右侧头部-->
      <top-side></top-side>
      <!--右侧主体-->
      <div class="primary">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import leftSide from './leftside'
import topSide from './topside'
export default {
  name: 'Home',
  data () {
    return {
      screenWidth: document.body.clientWidth,
      timer: false
    }
  },
  components: {
    leftSide,
    topSide
  },
  methods: {
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
  },
  watch: {
    screenWidth (val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        let that = this
        setTimeout(function () {
          if (that.screenWidth < 1024) {
            that.$store.commit('toggle', 'show')
          } else {
            that.$store.commit('toggle', 'hide')
          }
          // that.beforeCreate()
          that.timer = false
        }, 400)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.hide_left{
  width:0 !important;
}
.hide_right{
  margin-left: 0 !important;
}
.home_wrap {
  width: 100%;
  background-color: #eff2f9;
  overflow: hidden;
  position: relative;
  height:100%;
  .left_wrap {
    height:100%;
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    z-index:1001;
    overflow: hidden;
    background-color: #ffffff;
    box-shadow: 1px 0 20px rgba(135, 150, 193, 0.49);
    width:230px;
    transition: 0.5s;
  }
  .right_wrap {
    margin-left:230px;
    position: relative;
    min-height:100vh;
    transition: margin-left .28s;
    .top {
      box-shadow: 0 -10px 20px orangered;
      margin-bottom: 20px;
      background-color: #ffffff;
      margin-bottom: 10px;
    }
    .primary {
    }
  }
}
</style>
