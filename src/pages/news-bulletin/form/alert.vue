// 操作提示
<template>
<div class="alert_wrap">
<div class="alert_main">
<slot></slot>
</div>
<div slot="modal-footer" class="w-100 modal_footer">
<button class="btn modal_sure">确认</button>
<button class="btn modal_cancel">关闭</button>
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
    return {}
  },
  methods: {}
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
.alert_main {
  font-size: 15px;
  background: #f1f4f9;
  padding: 20px;
}
</style>
