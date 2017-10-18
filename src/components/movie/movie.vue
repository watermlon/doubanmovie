<template>
	<div class="temp clearfix">
		<mt-swipe :auto="4000" class='sroll'>
			<mt-swipe-item v-for='(item,index) in imgurl' :key='index'>
				<img :src="item.images.large">
				<p class="mtitle">{{item.title}}</p>
			</mt-swipe-item>
		</mt-swipe>
		<mt-navbar v-model="selected">
			<mt-tab-item id='in_theaters'>正在热映</mt-tab-item>
			<mt-tab-item id='coming_soon'>即将上映</mt-tab-item>
			<mt-tab-item id='top250'>口碑榜</mt-tab-item>
		</mt-navbar>
		<br>
		<mt-tab-container v-model="selected">
			<mt-tab-container-item :id="selected">
				<ul class="movielist">
					<li v-for='(item,index) in movieData' :key='index'>
						<router-link v-bind="{to:'/movie/movielist/'+item.id}">
							<img :src="item.images.small" class="fl">
							<div class="movielistTitle">
								<p class="title">{{item.title}}</p>
								<p class="tag"><span v-for='v in item.genres'>{{v}}&nbsp;</span></p>
								<p class="casts"><span v-for='val in item.casts'>{{val.name}}&nbsp;</span></p>
							</div>
						</router-link>
					</li>
				</ul>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>

// import { Navbar, TabItem } from 'mint-ui';
import {api} from '../../kits/common.js';
import { Indicator } from 'mint-ui';
export default{
	data(){
		return {
			imgurl:[],
			movieData:[],
			selected:'1',
			movielist:{}
		}
	},
	watch:{
		selected:function(o,n){
			console.log(o)
			let url = o
			this.getdata(o)
		}
	},
	created(){
		let apiParms = 'in_theaters'
		this.getdata(apiParms);
	},
	methods:{
		getdata(apiParms){
			if (this.movielist[apiParms]) {
				console.log(123,this.movielist[apiParms])
				this.movieData=this.movielist[apiParms]
				Indicator.close();
				return
			}
			let url = api+'v2/movie/'+apiParms
			Indicator.open('加载中...');
			this.$http.jsonp(url).then((res)=>{
				let data = res.body;
				this.imgurl = data.subjects.slice(0,5);
				this.movieData = data.subjects;
				console.log(this.movieData);
				this.movielist[apiParms]=data.subjects;
				Indicator.close();
			},(err)=>{alert('服务器错误');Indicator.close();})
		}
	}
}
</script>

<style scoped>
.sroll{
	width: 100%;
	height: 7rem;
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
	line-height: 50px;
}
.movielist li{
	margin-top: 5px;
	width: 100%;
	height: 110px;
	border-bottom: 1px solid #C8C6C6;
	padding-left: 20px;
}
.movielistTitle{
	padding-left: 75px;
}
.movielistTitle .title{
	font-size: 20px;
}
.movielistTitle .tag{
	font-size: 15px;
	line-height: 30px;
	height: 30px;
}
.movielistTitle .casts{
	font-size: 15px;
	line-height: 30px;
	height: 30px;
}
.nav li{
	margin-left: 1rem;
	float: left;
	font-size:16px;
}
</style>