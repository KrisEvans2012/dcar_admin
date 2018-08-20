// 日志详情
<template>
  <div class="log_details">
    <div class="log_main">
      开启哈哈、啦啦等用户的账户权限
    </div>
    <div slot="modal-footer" class="w-100 modal_footer">
      <button class="btn modal_sure">确认</button>
      <button class="btn modal_cancel">关闭</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogDetails',
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
.log_main{
  font-size: 15px;
  background: #F1F4F9;
  padding:20px;
}
</style>
