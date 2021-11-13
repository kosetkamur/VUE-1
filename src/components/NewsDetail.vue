<template>
    <div v-for="article in Articles" :key="article.name" class='newDetail'>
    <div
        v-if="article.id == pageID">
      <h1>{{ article.name }}</h1>
      <p>{{ article.desc }}</p>
      <p>{{ article.date }}</p>
    </div>
  </div>
</template>
    
<script>
    import Articles from '../../public/articles.json';
    export default {
    name: "NewDetail",
    data() {
        return {
        Articles,
        }
    },
    computed: {
        pageID() {
        return this.$route.params.id;
        },
    }
    }
</script>
<style>
.newDetail{
  margin: 40px 150px;
}
</style>