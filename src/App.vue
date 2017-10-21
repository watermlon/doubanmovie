<template>
  <div id="app">
      <mt-header :title="title" class='header'>   
        <a href="javascript:;" icon='back' slot='left' v-show="isShow" @click="back">&lt; 返回</a>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header> 
      <router-view/>
      <mt-tabbar class='footer'>
        <mt-tab-item id="home">
          <router-link to='/' slot="icon" class="fa fa-home" aria-hidden="true"></router-link>
          首页
        </mt-tab-item>
        <mt-tab-item id="movie">
          <router-link to='/movie' slot="icon" class="fa fa-film" aria-hidden="true"></router-link>
          电影
        </mt-tab-item>
        <!-- 本来想做，但是没有找到合适接口，暂时封存 -->
        <!-- <mt-tab-item id="book">
          <router-link to='/booklist' slot="icon" class="fa fa-book" aria-hidden="true"></router-link>
          图书
        </mt-tab-item>
        <mt-tab-item id="music">
          <router-link to='/musiclist' slot="icon" class="fa fa-music" aria-hidden="true"></router-link>
          音乐
        </mt-tab-item> -->
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      title:'豆瓣',
      isShow:'false'
    }
  },
  watch:{
			'$route':function(newroute,oldroute){
				if(newroute.path.toLowerCase() == '/'){
					this.isShow = false;
				}else{
					this.isShow = true;
				}
			}
		},
  created(){
    this.gethash();
    console.log(this.isShow)
  },
  methods:{
    gethash(){
      let titleData = this.$route.path
      console.log(titleData)
      switch(titleData)
      {
        case '/':
        this.title = '首页';
        break;
        case '/movie':
        this.title = '电影';
        break;
         case '/book':
        this.title = '图书';
        break;
         case '/music':
        this.title = '音乐';
        break;
      }
    },
    back(){
      this.$router.go(-1);
    }
  }
}
</script>

<style>
.fa{
  font-size: 20px;
}
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
} 
.header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.mint-header{
  background-color: #282828;
}
</style>
