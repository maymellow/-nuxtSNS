<template>
<div>
	<v-container>
		<post-card/>
		<post-card/>
		<post-card/>
		<post-card/>
	</v-container>
</div>
</template>

<script>
  import PostCard from '~/components/PostCard';
  export default {
    components: {PostCard},
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
    }
  }
</script>

<style scoped>

</style>
