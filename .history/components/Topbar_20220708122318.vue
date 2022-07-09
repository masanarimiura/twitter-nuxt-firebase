<!-- shere と新規登録とログインのバー 、index と login で使う  
<TopBar></TopBar>で使えるよ
-->

<template>
  <div class="top__bar">
    <!-- shere と新規登録とログインへのルートのバーを入れるボックスを作っておく   -->
    <div class="inner">
      <img src="../img/logo.png"></img>
      <NuxtLink to="/">新規作成</NuxtLink>
      <NuxtLink to="/login">ログイン</NuxtLink>
    </div>
  </div>
</template>

<style>
.inner{
  
}
img {
  width: 100px;
  height: auto;}
</style>