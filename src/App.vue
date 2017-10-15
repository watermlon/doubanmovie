<template>
  <div id="app">
      <mt-header :title="title">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <router-view/>
      <mt-tabbar>
        <mt-tab-item id="home">
          <router-link to='/' slot="icon" class="fa fa-home" aria-hidden="true"></router-link>
          首页
        </mt-tab-item>
        <mt-tab-item id="movie">
          <router-link to='/movielist' slot="icon" class="fa fa-film" aria-hidden="true"></router-link>
          电影
        </mt-tab-item>
        <mt-tab-item id="book">
          <router-link to='/booklist' slot="icon" class="fa fa-book" aria-hidden="true"></router-link>
          图书
        </mt-tab-item>
        <mt-tab-item id="music">
          <router-link to='/musiclist' slot="icon" class="fa fa-music" aria-hidden="true"></router-link>
          音乐
        </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      title:'豆瓣'
    }
  },
  created(){
    this.gethash();
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
        case 'movielist':
        this.title = '电影';
        break;
         case 'booklist':
        this.title = '图书';
        break;
         case 'musiclist':
        this.title = '音乐';
        break;

      }
      // this.title = 
    }
  }
}
</script>

<style>
.fa{
  font-size: 20px;
}
</style>
