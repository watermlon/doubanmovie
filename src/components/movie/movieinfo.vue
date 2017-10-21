<template>
	<div class="temp">
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content bg-purple-dark">
		  		<img class="poster" :src="movieinfo.images.large">
		  	</div>
		  </el-col>
		</el-row>
		<div class="htitle">
			<el-row :gutter="20">
			  <el-col :span="16"><div class="grid-content bg-purple"><h3 class="title">{{movieinfo.title}}</h3></div></el-col>
			  <el-col :span="10"><div class="grid-content bg-purple year">{{movieinfo.year}}年</div></el-col>
			  <!-- <el-col :span="8"><div class="grid-content bg-purple year">{{movieinfo.rating.average}}分</div></el-col> -->
				<el-rate
					v-model="value5"
					disabled
					show-text
					text-color="#ff9900"
					text-template="{value}">
				</el-rate>
			</el-row>
		</div>
		<div class="pbody">
			<el-card class="box-card">
			  <div>
			   {{movieinfo.summary}}
			  </div>
			</el-card>
		</div>
		<div class="pbody">
			<div  class="text item">
			  	<!-- 主演：<span v-for="o in movieinfo.casts" :key="o.id">{{o.name}}&nbsp;&nbsp;</span><br> -->
					<ul>
						<li v-for="o in movieinfo.casts" :key="o.id"><img :src="o.avatars.small" alt=""><span >{{o.name}}&nbsp;&nbsp;</span></li>
					</ul>
			  	导演：<span v-for="v in movieinfo.directors" :key="v.id">{{v.name}}&nbsp;&nbsp;</span>
			</div>
		</div>
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
		this.getdata()
	},
	methods:{
		getdata(){
			let url = api+'v2/movie/subject/'+this.id
			this.$http.jsonp(url).then((res)=>{
				console.log(res.body)
				this.movieinfo = res.body
				this.value5 = this.movieinfo.rating.average/2
			})
		}
	}
}
</script>

<style scoped>
	.htitle{
		padding: 0 10px;
	}
	.poster{
		width: 100%;
	}
	.title{
		font-size: 0.6rem;
	}
	.year{
		font-size: 0.3rem;
	}
	.pbody{
		padding: 10px;
	}
	.text ul{
		height: 103px;
		overflow: auto;
	}
	.text li{
		float: left;
	}
</style>