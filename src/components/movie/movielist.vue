<template>
	<div>
		<mt-swipe :auto="4000" class='sroll'>
			  <mt-swipe-item v-for='item in msg'>
			  	<img :src="item.images.large">
			  	<p class="mtitle">{{item.title}}</p>
			  </mt-swipe-item>
<!-- 			  <mt-swipe-item>2</mt-swipe-item>
			  <mt-swipe-item>3</mt-swipe-item> -->
		</mt-swipe>
	</div>
</template>

<script>
import {api} from '../../kits/common.js'
export default{
	data(){
		return {
			msg:[]
		}
	},
	created(){
		this.getdata();
	},
	methods:{
		getdata(){
			let url = api+'/v2/movie/coming_soon'
			this.$http.jsonp(url).then((res)=>{
				let data = res.body;
				this.msg = data.subjects.slice(0,5);
				console.log(this.msg);
			})
		}
	}
}
</script>

<style scoped>
	.sroll{
		width: 100%;
		height: 240px;
		position: relative;
	}
	.sroll img{
		width: 100%;
		height: 100%;
	}
	.mtitle{
		position: absolute;
		bottom: 0;
		background-color: rgba(0,0,0,0.3);
		width: 100%;
		height: 50px;
		color: #DFDEDE;
		text-align: center;
		font-size: 25px;
	}
</style>