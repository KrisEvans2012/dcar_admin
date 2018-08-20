// 修改兑换码
<template>
  <div class="alter_code_main">
    <div class="add_body">
      <div class="row">
        <div class="col-md-3">
          名称
        </div>
        <div class="col-md-7">
          45442-HSSS-2JKKK
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          使用次数
        </div>
        <div class="col-md-7">
          2次
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 label_box">
          使用次数
        </div>
        <div class="col-md-7">
          <input type="text" class="form-control" placeholder="请设置兑换码使用次数">
        </div>
      </div>
    </div>
    <div slot="modal-footer" class="w-100 modal_footer">
      <button class="btn modal_sure">确认</button>
      <button class="btn modal_cancel">取消</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlterCode',
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
.add_body{
  font-size: 15px;
}
.add_body>div{
  margin: 15px 0;
}
.add_body>div>div:nth-child(1){
  text-align: right;
}
.label_box{
  padding-top:7px;
}
.add_body>div:nth-child(3){
  margin-bottom:30px;
}
::-webkit-input-placeholder { /* WebKit browsers */
  color:#AFAFAF;
  font-size: 15px;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  color:#AFAFAF;
  font-size: 15px;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
  color:#AFAFAF;
  font-size: 15px;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
  color:#AFAFAF;
  font-size: 15px;
}
</style>
