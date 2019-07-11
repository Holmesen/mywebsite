<template>
	<div>
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
		name: 'album'
	}
</script>

<style scoped>
.albums{
	height: auto;
	width: 75%;
	display: flex;
	flex-flow: row;
	flex-wrap: wrap;
	margin: auto;
}
.album-div{
	width: 21%;
	height: auto;
	margin: 20px auto;
}
</style>