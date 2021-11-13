<template>
  <div class="home">
    <h1>Добро пожаловать на наш информационный сайт</h1>
    <router-link to="/news" class='button'>Посмотреть все новости</router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>
  .home{
    margin: 200px 150px;
  }
  .button{
    background-color: cadetblue;
    padding: 20px;
    border-radius: 5px;
    color: white;
  }
</style>