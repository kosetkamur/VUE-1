<template>
    <div class="wrapper">
        <router-link v-for="article in Articles" 
        :to="`/news/${article.id}`" :key="article.name" class='item'>
        <h2>{{ article.name}}</h2>
        <p>{{ article.date }}</p>
        </router-link>
    </div>
</template>

<script>
import Articles from '../../public/articles.json';
export default {
  name: "NewsCard",

  data() {
    return {
      Articles,
    }
  },

}

</script>

<style>
.wrapper{
    display: flex;
    flex-direction: row;
}
a.item{
    margin-right: 30px;
    border: 1px solid rgb(247, 247, 247);
    border-radius: 10px;
    background-color: rgb(247, 247, 247);
    padding: 20px;
    color: black;
}
</style>