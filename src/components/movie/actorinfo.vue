<template>
  <div class="temp">
    <h2>{{movieinfo.name}}</h2>
    <h4 v-show="movieinfo.aka_en[0]" v-for="(item,index) in movieinfo.aka_en" :key='index'>{{item}}</h4>
    <h3>参与作品</h3>
    <ul class="works">
      <li v-for="(v,i) in movieinfo.works" :key="i"><router-link v-bind="{to:'/movie/movielist/'+v.subject.id}">
          <img :src="v.subject.images.small" alt=""><br><p>{{v.subject.title}}</p>
        </router-link></li>
    </ul>
  </div>
</template>

<script>
import {api} from '../../kits/common.js'
export default{
	data(){
		return{
			movieinfo:{},
			id:0,
			value5:0
		}
	},
	created(){
		this.id = this.$route.params.id
		this.getdata('celebrity')
	},
	methods:{
		getdata(domain){
			let url = api+'v2/movie/'+domain+'/'+this.id
			this.$http.jsonp(url).then((res)=>{
				console.log(res.body)
				this.movieinfo = res.body
			})
		}
	}
}
</script>

<style scoped>
h2,h4{
  text-align: center;
}
.works li{
 text-align: center;
}
</style>