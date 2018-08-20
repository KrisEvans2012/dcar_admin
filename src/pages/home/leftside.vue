<template>
  <div class="leftside">
    <div class="logo">
      <img src="../../assets/img/sidebar/logo.png" />
    </div>
    <ul class="menu">
      <router-link :to="{name:'UserManagement'}" tag="li">
        <a><img class="no_active" src="../../assets/img/sidebar/user_management.png" />
          <img class="active" src="../../assets/img/sidebar/user_management_active.png" />
          <span>用户管理</span>
        </a>
      </router-link>
      <router-link :to="{name:'RedeemCode'}" tag="li">
        <a><img class="no_active" src="../../assets/img/sidebar/redeem_code.png" />
          <img class="active" src="../../assets/img/sidebar/redeem_code_active.png" />
          <span>兑换码</span>
        </a>
      </router-link>
      <router-link :to="{name:'OrderManagement'}" tag="li">
        <a><img class="no_active" src="../../assets/img/sidebar/order_management.png" />
          <img class="active" src="../../assets/img/sidebar/order_management_active.png" />
          <span>订单管理</span>
        </a>
      </router-link>
      <router-link :to="{name:'NewsBulletin'}" tag="li">
        <a>
          <img class="no_active" src="../../assets/img/sidebar/news_bulletin.png" />
          <img class="active" src="../../assets/img/sidebar/news_bulletin_active.png" />
          <span>新闻公告</span>
        </a>
      </router-link>
      <router-link :to="{name:'OperationLog'}" tag="li">
        <a>
          <img class="no_active" src="../../assets/img/sidebar/operation_log.png" />
          <img class="active" src="../../assets/img/sidebar/operation_log_active.png" />
          <span>操作日志</span>
        </a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'leftSide'
}
</script>
<style lang="scss" scoped>
.router-link-active {
  background: linear-gradient(to right, #e7e6f4, #fefefe);
  position: relative;
  .active {
    display: block !important;
  }
  .no_active {
    display: none !important;
  }
  span {
    color: #3b4865;
  }
  &:before {
    position: absolute;
    content: "";
    height: 48px;
    width: 6px;
    background: linear-gradient(to bottom, #6c7cf5, #7f68dc);
    left: 0;
    top: 0;
    bottom: 0;
  }
}

.leftside {
  /*box-shadow: 1px 0 20px rgba(135, 150, 193, .49);*/
  .logo {
    height: 214px;
    line-height: 214px;
    text-align: center;
  }
  .menu {
    li {
      cursor: pointer;
      line-height: 48px;
      height: 48px;
      margin-bottom: 30px;
      font-size: 16px;

      display: flex;
      align-items: center;
      /*border: 1px solid red;*/
      a {
        display: flex;
        color: #aeb9d9;
        align-items: center;
        width: 120px;
        /*border: 1px solid yellow;*/
        margin: 0 auto;
        span {
          text-align: left;
          /*border: 1px solid red;*/
          width: 66px;
          margin: 0 auto;
        }
        img {
          /*margin-right: 28px;*/
        }
        .active {
          display: none;
        }
        .no_active {
          display: block;
        }
      }
    }
  }
}
</style>
