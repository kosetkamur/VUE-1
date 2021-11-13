<template>
  <div class="about" id='app'>
    <h1>Новости</h1>
    <NewsCard />
  </div>
</template>

<script>
import NewsCard from "@/components/News.vue";

export default {
  name: 'About',
  components: {
    NewsCard,
  }
}
</script>
<style>
.about{
  margin:40px 150px;
}
</style>
