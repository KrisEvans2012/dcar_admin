// 禁用兑换码
<template>
  <div class="disabled_code">
    <p>确定要禁用此兑换码吗？</p>
    <div slot="modal-footer" class="w-100 modal_footer">
      <button class="btn modal_sure">确认</button>
      <button class="btn modal_cancel">取消</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DisabledCode',
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
.disabled_code>p{
  font-size: 15px;
  text-align: center;
  padding:15px 0;
}
</style>
