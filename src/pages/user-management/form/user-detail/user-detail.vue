<template>
  <div class="user_detail">
    <div class="detail">
      <div class="head_port"></div>
      <div class="user_main">
        <h5 class="user_name">
          用户旺财666
          <img src="~@/assets/img/user-management/10.png">
        </h5>
        <ul>
          <li>
            <p>邮箱：</p>
            <p>123456789@qq.com</p>
          </li>
          <li>
            <p>微信：</p>
            <p>123456789</p>
          </li>
          <li>
            <p>电话：</p>
            <p>123456789</p>
          </li>
          <li>
            <p>注册时间：</p>
            <p>2018-12-11 12:22</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="power">
      <ul>
        <li>
          <h5>用户权限</h5>
          <p>
            用户
            <toggle-switch class="toggleswitch"></toggle-switch>
          </p>
        </li>
        <li>
          <h5>管理员权限</h5>
          <p>普通管理员<toggle-switch :value="false" class="toggleswitch"></toggle-switch></p>
          <p>超级管理员<toggle-switch class="toggleswitch"></toggle-switch></p>
        </li>
      </ul>
    </div>
    <div slot="modal-footer" class="w-100 modal_footer">
      <button class="btn modal_sure" @click="confirm">确定</button>
      <button class="btn modal_cancel"  @click="cancel">取消</button>
    </div>
  </div>
</template>

<script>
import ToggleSwitch from '@/components/toggle-switch'
export default {
  name: 'UserDetail',
  components: {
    ToggleSwitch
  },
  props: {
    message: {}
  },
  data () {
    return {
      state: 0,
      shut: true,
      open: false
    }
  },
  methods: {
    // 模态框确定
    confirm () {
      this.$refs.myModalRef.hide()
    },
    // 模态框关闭
    cancel () {
      this.$emit('close-modal')
    },
    derail (event) {
      event.preventDefault()
      if (this.state === 0) { // 启用
        this.state = 1
        this.shut = false
        this.open = true
      } else { // 禁用
        this.state = 0
        this.shut = true
        this.open = false
      }
    }
  }
}
</script>

<style scoped lang='scss'>
@import "~@/assets/styles/public";
@import "./user-detail.scss";
</style>
