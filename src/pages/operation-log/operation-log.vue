// 操作日志
<template>
   <div class="operation_log">
     <crumbs>操作日志</crumbs>
     <div class="operation_body">
        <!-- 头部 -->
        <div class="public_header">操作日志</div>
        <!-- 搜索框 -->
        <div class="public_search">
          <input type="text" placeholder="请输入管理员姓名等信息查询">
          <img src="~@/assets/img/main/search.png" alt="">
        </div>
        <!-- 筛选条件部分 -->
        <div class="filter_box">
          <div class="row">
            <ul class="col-md-11 choose_time">
              <li class="special_item">操作时间</li>
              <li>
                <datepicker format="yyyy-MM-dd" :language="zh" placeholder="选择日期">
                  <span slot="afterDateInput" class="animated-placeholder">
                    <img src="~@/assets/img/main/date.png" alt="">
                  </span>
                </datepicker>
                <!-- <b-form-input type="date"></b-form-input> -->
              </li>
              <li class="special_item">
                ——
              </li>
              <li>
                <datepicker format="yyyy-MM-dd" :language="zh" placeholder="选择日期">
                  <span slot="afterDateInput" class="animated-placeholder">
                    <img src="~@/assets/img/main/date.png" alt="">
                  </span>
                </datepicker>
                <!-- <b-form-input type="date"></b-form-input> -->
              </li>
            </ul>
            <div class="col-md-1 refresh_box">
              <img src="~@/assets/img/main/refresh.png" alt="">
            </div>
          </div>
          <ul class="choose_item">
              <li class="item_title">操作事项</li>
              <li>
                <span :class="{'activeItem':activeState == '用户管理'}">用户管理</span>
              </li>
              <li>
                <span :class="{'activeItem':activeState == '兑换码'}">兑换码</span>
              </li>
              <li>
                <span :class="{'activeItem':activeState == '订单管理'}">订单管理</span>
              </li>
          </ul>
        </div>
        <!-- 表格部分 -->
        <div class="public_table">
          <div class="table_header">操作日志</div>
          <table class="table">
            <thead>
              <tr>
                <td class="text-center">操作人</td>
                <td class="text-center">操作时间</td>
                <td class="text-center">操作事项</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">啦啦啦</td>
                <td class="text-center">2018-12-11 12:22</td>
                <td class="text-center" @click="showModal">禁用哈哈哈、是是是等用户的账户权限</td>
              </tr>
              <tr>
                <td class="text-center">啦啦啦</td>
                <td class="text-center">2018-12-11 12:22</td>
                <td class="text-center">禁用哈哈哈、是是是等用户的账户权限</td>
              </tr>
              <tr>
                <td class="text-center">啦啦啦</td>
                <td class="text-center">2018-12-11 12:22</td>
                <td class="text-center">禁用哈哈哈、是是是等用户的账户权限</td>
              </tr>
              <tr>
                <td class="text-center">啦啦啦</td>
                <td class="text-center">2018-12-11 12:22</td>
                <td class="text-center">禁用哈哈哈、是是是等用户的账户权限</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 分页部分 -->
        <div class="paginationBox shadowDiv row">
            <div class="col-md-4">
                <!--<p-checkbox name="group1" value="全选" label="全选" [(ngModel)]="selectedCities" inputId="ny"></p-checkbox>-->
                <!--<span class="batchBox">批量删除</span>-->
            </div>
            <div class="col-md-8">
                <ul class="pageList">
                    <li>
                        共
                        <span class="num">2</span>
                        页
                        <span class="num">/</span>
                        <span class="num">10</span>
                        条数据
                    </li>
                    <li class="borderBox clickBox">首页</li>
                    <li class="borderBox clickBox">上一页</li>
                    <li class="borderBox">1 / 2</li>
                    <li class="borderBox clickBox">下一页</li>
                    <li class="borderBox clickBox">尾页</li>
                    <li class="clickBox singleBorder" style="padding:0 10px!important;">跳至</li>
                    <li class="singleBorder">
                        <input type="text">
                    </li>
                    <li class="singleBorder">页</li>
                </ul>
            </div>
        </div>
        <!-- 分页end -->

        <!-- 模态框 日志详情-->
        <b-modal ref="logModal" hide-footer title="日志详情">
          <log-details :message="data" @close-modal = 'closeModal'></log-details>
        </b-modal>
     </div>
   </div>
</template>

<script>
import Crumbs from '@/components/crumbs'
import LogDetails from './form/log-details'
import Datepicker from 'vuejs-datepicker'
import {en, zh} from 'vuejs-datepicker/dist/locale'
export default {
  name: 'OperationLog',
  components: {
    Crumbs,
    LogDetails,
    Datepicker
  },
  data () {
    return {
      'activeState': '用户管理',
      data: {},
      en: en,
      zh: zh
    }
  },
  methods: {
    // 模态框--日志相亲
    showModal () {
      this.$refs.logModal.show()
      this.data = {
        state: 'state'
      }
    },
    // 关闭模态框
    closeModal () {
      this.$refs.logModal.hide()
    }
  }
}
</script>

<style lang='scss' scoped>
@import "~@/assets/styles/public";
@import "./operation-log.scss";
</style>
