<template>
	<v-card style="margin-bottom: 20px">
		<v-image />
		<v-card-text>
			<div>
				<h3>쓴사람</h3>
				<div>게시글</div>
			</div>
		</v-card-text>
		<v-card-actions>
			<v-btn text color="orange">
				<v-icon>mid-twitter-retweet</v-icon>
			</v-btn>
			<v-btn text color="orange">
				<v-icon>mid-heart-outline</v-icon>
			</v-btn>
			<v-btn text color="orange">
				<v-icon>mid-comments-outline</v-icon>
			</v-btn>
			<v-btn text color="orange">
				<v-icon>mid-dots-horizontal</v-icon>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
  export default {
    name: 'PostCard'
  }
</script>

<style scoped>

</style>
