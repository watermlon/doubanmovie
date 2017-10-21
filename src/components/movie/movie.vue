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
		<ul class="movielist">
			<li v-for='(item,index) in movieData' :key='index'>
				<router-link v-bind="{to:'/movie/movielist/'+item.id}">
					<img :src="item.images.small" class="fl">
					<div class="movielistTitle">
						<p class="title">{{item.title}}</p>
						<p class="tag">
							<span v-for='(v,i) in item.genres' :key="i">{{v}}&nbsp;</span>
						</p>
						<p class="casts">
							主演：<span v-for='(val,index) in item.casts' :key="index">{{val.name}}&nbsp;</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
		<div class="pageing clearfix">
			<el-button type="primary" icon="arrow-left" class="fl pre" @click="pre">上一页</el-button>
			  <el-select v-model="pageNum" placeholder="">
				<el-option
				v-for="item in allpages"
				:key="item"
				:label="item"
				:value="item">
				</el-option>
			</el-select>
  			<el-button type="primary" class="fr next" @click="next">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
		</div>
	</div>
</template>

<script>

import { api } from '../../kits/common.js';
import { Indicator } from 'mint-ui';
export default {
	data() {
		return {
			imgurl: [],
			movieData: [],
			selected: 'in_theaters',
			movielist: {},
			pages: 1,
			allpages: 1,
			pageNum:1
		}
	},
	watch: {
		selected: function(o, n) {
			console.log(o);
			let url = o;
			this.getdata(o);
			this.imgurl = this.movieData.slice(0, 5);
		}
	},
	created() {
		let apiParms = 'in_theaters';
		this.getdata(apiParms);
	},
	methods: {
		getdata(apiParms) {
			//  先检查下缓存中有没有数据，如果有就从缓存中取，不请求接口
			if (this.movielist[apiParms]) {
				this.movieData = this.movielist[apiParms];
				Indicator.close();
				return
			}
			let url = api + 'v2/movie/' + apiParms
			Indicator.open('加载中...');
			this.$http.jsonp(url).then((res) => {
				let data = res.body;
				this.movieData = data.subjects;
				this.imgurl = data.subjects.slice(0, 5)
				this.movielist[apiParms] = data.subjects;//  缓存下数据，防止对接口请求过多
				this.allpages = Math.ceil(data.total / data.count);//  获取总页数
				Indicator.close();
			}, (err) => { alert('服务器错误'); Indicator.close(); })
		},
		pre(){
			if(this.pageNum==1){
				return
			}
			
			let apiParms = this.selected+'?start='+this.pageNum*20+'&count=20';
			this.pageNum--
			this.getdata(apiParms);
		},
		next(){
			if(this.pageNum==this.allpages){
				return
			}
			console.log(this.pageNum*20)
			let apiParms = this.selected+'?start='+this.pageNum*20+'&count=20';
			this.pageNum++
			this.getdata(apiParms);
		}
	}
}
</script>

<style scoped>
.sroll {
	width: 100%;
	height: 7rem;
	position: relative;
}

.sroll img {
	width: 100%;
	height: 100%;
}

.mtitle {
	position: absolute;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.3);
	width: 100%;
	height: 50px;
	color: #DFDEDE;
	text-align: center;
	font-size: 25px;
	line-height: 50px;
}

.movielist li {
	margin-top: 5px;
	width: 100%;
	height: 110px;
	border-bottom: 1px solid #C8C6C6;
	padding-left: 20px;
}

.movielistTitle {
	padding-left: 75px;
}

.movielistTitle .title {
	font-size: 20px;
}

.movielistTitle .tag {
	font-size: 15px;
	line-height: 30px;
	height: 30px;
	color: #666
}

.movielistTitle .casts {
	font-size: 12px;
	line-height: 30px;
	height: 30px;
	color: #999
}

.nav li {
	margin-left: 1rem;
	float: left;
	font-size: 16px;
}
.pre {
	margin-left: 30px;
}
.next{
	margin-right: 30px;
}
.pageing{
	text-align: center;
	margin: 10px 0;
}
.el-select{
	width: 20%;
}
</style>