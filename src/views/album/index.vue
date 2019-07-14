<template>
	<div>
		<div class="top">
			<div class="title">
				<span class="title1">时光相册</span>
				<span class="title2"><i>留住这一刻</i></span>
			</div>
		</div>
		<div class="category">
			<div class="category-div">
				<el-select v-model="category" placeholder="默认">
					<el-option v-for="item in options" :key="item.tag" :label="item.label" :value="item.tag"></el-option>
				</el-select>
			</div>
			<div class="category-tag">
				<div v-for="item in tags" :key="item.tag" :value="item.tag">
					<el-tag :type="item.type">{{item.label}}</el-tag>
				</div>
			</div>
		</div>
		<div class="albums">
			<div class="album-div" v-for="(item,index) in [1,2,3,4,5,6,7,8]" :key="index">
				<figure class="imghvr-flip-vert">
					<img src="../../assets/images/avatar.jpg">
					<figcaption>
						// Hover Content
					</figcaption>
					<router-link to='/album/albumInfo'></router-link>
				</figure>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'album',
		data() {
			return {
				options: [
					{label: '按时间分类', tag: 'date'},
					{label: '按地点分类', tag: 'place'},
					{label: '按类型分类', tag: 'category'}
				],
				tags: [
					{label: '全部', tag: 'all', type: ''},
					{label: '2018年12月', tag: '2018/12', type: 'info'},
					{label: '2019年5月', tag: '2019/05', type: 'info'},
					{label: '2019年6月', tag: '2019/06', type: 'info'},
					{label: '2019年7月', tag: '2019/07', type: 'info'}
				],
				category: ''
			}
		}
	}
</script>

<style scoped>
.top{
	height: 400px; width: 100%; background: url('../../assets/images/images/bg3.jpg') no-repeat center;
	background-size: 100%; display: flex; flex-flow: column;
}
.title{
	width: fit-content; height: auto; margin: auto 200px auto auto; display: flex; flex-flow: column; color: white;
}
.title1{
	font-size: 40px; font-weight: bold; line-height: 2em; margin: auto 160px 30px auto; letter-spacing: 25px;
	font-family: cursive;
}
.title2{
	font-size: 20px; line-height: 2em; margin: auto 0px auto auto; letter-spacing: 25px; font-family: cursive;
}
.albums{
	height: auto; width: 75%;	display: flex;	flex-flow: row;	flex-wrap: wrap;	margin: 20px auto;
}
.album-div{
	width: 21%;	height: auto;	margin: 20px auto;
}
.category{
	display: flex; flex-flow: row; justify-content: space-between; margin: 30px auto 0px auto;
	padding-bottom: 20px; border-bottom: solid 1px #dcdcdc; width: 75%;
}
.category-div{
	height: auto; margin: auto auto auto 25px;
}
.category-tag{
	width: auto; height: auto; margin: auto 25px auto auto; display: flex; flex-flow: row;
}
.category-tag>div{
	width: fit-content; height: auto; margin: auto 7px; cursor: pointer;
}
</style>