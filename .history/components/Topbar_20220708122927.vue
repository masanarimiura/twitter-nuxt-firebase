<!-- shere と新規登録とログインのバー 、index と login で使う  
<TopBar></TopBar>で使えるよ
-->

<template>
  <div class="top__bar">
    <!-- shere と新規登録とログインへのルートのバーを入れるボックスを作っておく   -->
    <div class="inner">
      <img src="../img/logo.png"></img>
      <div class="link__box">
        <NuxtLink to="/" class="link">新規作成</NuxtLink>
        <NuxtLink to="/login" class="link">ログイン</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
.inner{
  
}
img {
  width: 100px;
  height: auto;
  }
.link {
  color: #fff;
  text-decoration: none;
}
.inner {
  display: flex;
  text-align: center;
}
</style>