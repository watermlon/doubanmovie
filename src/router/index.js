import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import movieList from '../components/movie/movielist'
import bookList from '../components/book/booklist.vue'
import musiclist from '../components/music/musiclist.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path:'/movielist',
    	name:'movieList',
    	component:movieList
    },
    {
    	path:'/bookList',
    	name:'bookList',
    	component:bookList
    },
    {
    	path:'/musiclist',
    	name:'musiclist',
    	component:musiclist
    }
  ]
})
