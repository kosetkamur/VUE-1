<template>
  <div id="nav">
    <a href='/' class='logo'>НОВОСТИ МИРА</a>
    <router-link to="/">Главная</router-link>
    <router-link to="/news">Новости</router-link>
  </div>
  <router-view></router-view>
</template>
<style>
#nav{
  background-color: rgb(247, 247, 247);
  padding: 20px;
}
*{
  text-decoration: none;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
a{
  margin:40px 10px 20px 0;
  color:black;
}
.logo{
  margin-left: 150px;
}
</style>
