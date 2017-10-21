<template>
  <div class="hello">
    <h1 class="title">开始搜索</h1>
      <div class="searinput">
        <el-input :placeholder="msg" v-model="searinfo" size='large' :maxlength='20' :minlength='1'>
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="电影" value="1"></el-option>
            <el-option label="音乐" value="2"></el-option>
            <el-option label="图书" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="search" @click='getdata'></el-button>
        </el-input>
      </div>
      <p class="tip">可以进行标签搜索或者片名搜索，方法示例：“tag|喜剧”  ，或者“name|片名”</p>
  </div>
</template>

<script>
import { api } from '../kits/common.js'
import { Input } from 'element-ui'
import '../kits/rem.js'
export default {
  name: 'Home',
  watch:{
    select:function(n){
      console.log(n);
      if(n==1){
          this.msg='电影：'
      }else if(n==2){
        this.msg='音乐：'
      } else {
        this.msg='图书：'
      }
    }
  },
  data () {
    return {
      msg:'请选择分类，默认为电影',
      searinfo:'',
      select:'1'
    }
  },
  methods:{
    getdata(){
      let type = this.select;
      let apitype = ''
      let search = this.searinfo.split('|');
      console.log(search);
      switch (type){
        case '1':
       apitype = 'v2/movie/search'
        break;
        case '2':
        apitype = 'v2/book/search'
        break;
        case '3':
        apitype='v2/music/search'
        break;
      }
      console.log(apitype);
      let url = api + apitype;
      alert(url)
      // this.$http.jsonp(url).then(function(res){
          
      // })
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
  margin:2rem 0.5rem 1rem;
}
.tip{
  padding: 10px;
  font-size: 16px;
}
</style>
