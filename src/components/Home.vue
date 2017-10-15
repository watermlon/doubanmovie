<template>
  <div class="hello">
    <h1 class="title">开始搜索</h1>
      <div class="searinput">
        <el-input placeholder="请输入内容" v-model="searinfo" size='large' :maxlength='20' :minlength='1'>
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="电影" value="1"></el-option>
            <el-option label="音乐" value="2"></el-option>
            <el-option label="图书" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="search"></el-button>
        </el-input>
      </div>
  </div>
</template>

<script>
import { api } from '../kits/common.js'
import { Input } from 'element-ui'
import '../kits/rem.js'
export default {
  name: 'Home',
  data () {
    return {
      msg:'首页',
      searinfo:'',
      select:''
    }
  },
  methods:{
    getdata(){
      let url = api+'v2/movie/coming_soon'
      this.$http.jsonp(url).then(function(res){
          
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  text-align: center; 
  margin-top: 3rem;
}
.searinput{
  margin:2rem 0.5rem;
}
</style>
