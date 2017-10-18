import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import movie from '../components/movie/movie'
import bookList from '../components/book/booklist.vue'
import musiclist from '../components/music/musiclist.vue'
import movieinfo from '../components/movie/movieinfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path:'/movie',
    	name:'movie',
    	component:movie
    },
    {
      path:'/movie/movielist/:id',
      name:'movieinfo',
      component:movieinfo
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
