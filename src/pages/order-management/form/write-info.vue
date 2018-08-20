// 填写物流信息
<template>
  <div class="write_info">
    <div class="write_main">
      <p class="write_title">填写物流信息</p>
      <!-- 订单信息 -->
      <div class="order_info">
        <p class="border_title">
          <b></b>
          <span>订单信息</span>
        </p>
        <div class="info_main">
          <div class="row">
            <div class="col-md-7">
              <span>订单号</span>
              2555667676876876878
            </div>
            <div class="col-md-5">
              <span>用户名</span>
              啦啦啦
            </div>
          </div>
          <div class="row">
            <div class="col-md-7">
              <span>下单时间</span>
              2018-06-01 12:00
            </div>
          </div>
        </div>
      </div>
      <!-- 物流信息 -->
      <div class="logistics_info">
        <p class="border_title">
          <b></b>
          <span>物流信息</span>
        </p>
        <div class="logistics_main">
          <div class="row">
            <label class="col-md-3">物流公司</label>
            <div class="col-md-7">
              <select class="form-control own_select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
          <div class="row">
            <label class="col-md-3">单号</label>
            <div class="col-md-7">
              <input type="text" class="form-control" placeholder="请输入快递单号">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div slot="modal-footer" class="w-100 modal_footer">
      <button class="btn modal_sure">确定</button>
      <button class="btn modal_cancel">取消</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WriteInfo',
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
.write_title{
  color:#616161;
  padding-bottom:10px;
}
.order_info{
  background: #F6F6F6;
  padding:15px 20px;
  color:#2C2C2C;
  font-size: 15px;
}
.logistics_info{
  padding:15px 20px;
  color:#2C2C2C;
  font-size: 15px;
}
.border_title{
 @include border_title;
}
.info_main{
  padding:20px
}
.info_main>div:nth-child(1){
  padding-bottom:15px;
}
.info_main>div>div>span{
  font-weight: bold;
  padding-right:15px;
}
.logistics_main{
  padding:20px;
}
.logistics_main>div:nth-child(1){
  padding-bottom:20px;
}
.logistics_main>div>label{
  padding-top:6px;
  font-weight: bold;
}
.own_select{
  @include own_select;
}
</style>
