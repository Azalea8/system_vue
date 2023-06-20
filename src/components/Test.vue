<template>
  <div class="container">
    <div class="panel panel-default">
      <!-- Default panel contents -->
      <div class="panel-heading">
        <span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>
        物资列表

      </div>

      <div class="panel-body">
        <p>地狱火扣1即送</p>
      </div>

      <!-- Table -->
      <table class="table table-bordered">
        <thead>
        <tr>
          <th>物资编号</th>
          <th>物资名称</th>
          <th>物资数量</th>
          <th>物资单价</th>
          <th>物资类别</th>
          <th>供应商</th>
          <th>仓库</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="obj in data_list" :key="obj.id">
          <th scope="row">{{ obj.id }}</th>
          <td>{{ obj.name }}</td>
          <td>{{ obj.quantity }}</td>
          <td>{{ obj.price }}</td>
          <td>{{ obj.category }}</td>
          <td>{{ obj.vendor }}</td>
          <td>{{ obj.warehouse }}</td>
          <td>
            <a class="btn btn-primary btn-xs" href="#">编辑</a>
            <button type="button" class="btn btn-danger btn-xs btn-delete">删除</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Test',
  data() {
    return {
      data_list: [],
    }
  },
  created() {
    axios.get('test/material/').then(ret => {
      //data属性名称是固定的，用于获取后台响应的数据
      console.log(ret)
      this.data_list = ret.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
