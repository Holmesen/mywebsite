<template>
	<div>
		<h2 style="margin-top: 80px; etter-spacing: 7px; font-size: 26px;">XXX博客标题</h2>
		<div class="author-div">
			<span><i class="el-icon-user-solid"></i>Holmesen</span>
			<span><i class="el-icon-date"></i>2019/07/20</span>
			<span><i class="el-icon-view"></i>123</span>
		</div>
		<div class="image-div">
			<img src="../../assets/images/images/bg3.jpg" alt="">
		</div>
		<div class="content-div">
			《一拳超人》讲述的是主人公埼玉原本是一名整日奔波于求职的普通人。三年前的一天偶然遇到了要对淘气少年下杀手的异变螃蟹人后，
			回忆起年少年时“想要成为英雄”的梦想，最终拼尽全力救下了淘气少年。重拾对于成为英雄的兴趣之后，通过拼命锻炼，
			埼玉终于脱胎换骨获得了最强的力量，但同时失去了头发成了光头，似乎还失去了某些感情。埼玉在独自做了一段时间英雄后，
			与弟子杰诺斯一起，正式加入英雄协会，与众多英雄一起开始了对抗各种怪人以及灾难的生活。不过经常是在无人知晓的情况下做英雄的工作。
		</div>
		<!-- 操作 -->
		<div class="operate">
			<span><i class="iconfont iconfavor" style="font-size:27px;"></i>收藏</span>
			<span><i class="iconfont iconappreciate" style="font-size:27px;"></i>999</span>
			<span><i class="iconfont iconoppose_light" style="font-size:27px;"></i>666</span>
			<span><i class="iconfont iconshare" style="font-size:27px;"></i>分享</span>
		</div>
		<div class="other">
			<span><i class="el-icon-d-arrow-left"></i>上一篇：XXX博客</span>
			<span>下一篇：XXX博客<i class="el-icon-d-arrow-right"></i></span>
		</div>
		<!-- 评论 -->
		<div class="editor-div">
			<el-divider content-position="left" style="font-size:16px;font-weight:bold;">发表评论</el-divider>
			<div ref="editor" style="text-align:left"></div>
			<div class="submit"><el-button type="primary" round>发表评论</el-button></div>
		</div>
		<div class="comment-div">
			<div v-for="(item,index) in [1,2,3]" :key="index">
				<div class="comment-top">
					<div class="comment-top-left">
						<img src="../../assets/images/avatar.jpg" alt="">
						<span>Holmesen</span>
						<span>2019/07/14</span>
					</div>
					<div class="comment-top-right">
						<span><i class="iconfont iconappreciate" style="font-size:18px;margin-right:5px;"></i>999</span>
						<span><i class="iconfont iconoppose_light" style="font-size:18px;margin-right:5px;"></i>666</span>
					</div>
				</div>
				<div class="comment-bottom">
					<span>
						外媒援引华为副董事长郭平的话称，尽管华为在摩纳哥的业务范围很小，但是5G在摩纳哥的全覆盖是一个重大发展机遇，使得华为打开了一扇窗，可以作为其他国家和运营商的榜样。 在摩纳哥电信官网上，已经开始推广华为Mate 20 X 5G、小米MIX 3 5G两款新手机。
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import E from 'wangeditor'
	export default {
		name: 'blogInfo',
		data() {
			return {
				editorContent: ''
			}
		},
		mounted() {
			var editor = new E(this.$refs.editor)
			editor.customConfig.onchange = (html) => {
				this.editorContent = html
			}
			editor.create()
		}

	}
</script>

<style scoped>
*{
	display: flex; flex-flow: column; align-content: center;
}
.author-div{
	flex-flow: row; width: 60%; margin: auto;
}
.author-div>span{
	margin: auto; flex-flow: row; font-size: 17px; line-height: 40px;
}
.author-div>span>i{
	height: 18px; margin: auto 5px auto 0px;
}
.image-div{
	width: 60%; height: auto; margin: 10px auto;
}
.image-div>img{
	max-width: 100%; height: auto;
}
/* .image-div>div{
	width: 100%; height: 100%; background: url('../../assets/images/images/bg3.jpg') no-repeat center; background-size:cover;
} */
.content-div{
	width: 60%; margin: 10px auto; font-size: 18px; line-height: 2em; text-indent: 2em; text-align: left;
}
.operate{
	flex-flow: row; width: 50%; margin: 20px auto;
}
.operate>span{
	flex-flow: column; margin: auto; text-align: center; font-size: 15px; line-height: 2em; cursor: pointer;
}
.operate>span>i{
	margin: auto;
}
.other{
	width: 60%; flex-flow: row; justify-content: space-between; margin: auto;
}
.other>span{
	margin: auto 0px; flex-flow: row; font-size: 17px; line-height: 40px; cursor: pointer;
}
.other>span>i{
	font-size: 22px; line-height: 40px; margin: auto 20px;
}

.submit{
	width: fit-content;	margin: 20px 10px 20px auto;
}
.editor-div,.comment-div{
	width: 60%;	margin: 15px auto;
}
.comment-div>div{
	width: 100%; margin: 10px auto; padding: 20px 0px; border-bottom: solid 1px #dcdcdc;
}
.comment-top{
	width: 100%; flex-flow: row;	justify-content: space-between;
}
.comment-top-left{
	margin: auto auto auto 0px;	flex-flow: row;
}
.comment-top-right{
	margin: auto 0px auto auto;	flex-flow: row;
}
.comment-top-left>img{
	width:35px; height:35px; border-radius: 100%; margin: auto 7px;
}
.comment-top-left>span{
	font-size: 17px; line-height: 35px; margin: auto 7px;
}
.comment-top-right>i{
	font-size: 36px;
}
.comment-top-right{
	line-height: 35px;
}
.comment-top-right>span{
	flex-flow: row; margin-left: 20px; cursor: pointer;
}
.comment-bottom{
	width: 100%; flex-flow: column;
}
.comment-bottom>span{
	font-size: 15px; line-height: 1.5em; text-align: left; padding-left: 50px; text-indent: 2em;
}
</style>