<template>
<v-container>
	<post-form v-if="me"></post-form>
	<div>
		<post-card v-for="p in mainPosts" :key="p.id" :post="p"/>
	</div>
</v-container>
</template>

<script>
  import PostForm from '~/components/PostForm';
  import PostCard from '~/components/PostCard';
  export default {
    components: {PostCard, PostForm},
    name: 'index',
	  data() {
      return {
        searchForm : {
          searchCondition: '11',
          searchDetailConditon: '22'
        }
      }
	  },
	  created() {
      const { searchCondition, searchDetailConditon } = this.searchForm
		  const option = {
        searchCondition, searchDetailConditon
		  }
		  console.log(option)
    },
    computed: {
      me() {
        return this.$store.state.users.me;
      },
      mainPosts() {
        return this.$store.state.posts.mainPosts;
      }
    },
  }
</script>

<style scoped>

</style>
