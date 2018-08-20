// 订单详情
<template>
  <div class="alert">
    <div class="alert_main">
      <p v-if="message.state == 'doing'">运输状态订单不可操作</p>
      <p v-if="message.state == 'did'">已完成状态订单不可操作</p>
    </div>
    <div slot="modal-footer" class="w-100 modal_footer">
      <button class="btn modal_sure">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    message: {}
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
@import "~@/assets/styles/public";
// 模态框样式
.modal_footer {
  @include modal_footer;
  margin-top: 20px;
}
//end
.alert{
  margin-bottom:0;
}
.alert_main>p{
  text-align: center;
  font-size: 15px;
}
</style>
