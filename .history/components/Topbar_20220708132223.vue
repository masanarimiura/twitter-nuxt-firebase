<template>
  <div class="top__bar">
    <div class="topinner">
      <img src="../img/logo.png"></img>
      <div class="link__box">
        <NuxtLink to="/" class="link">新規作成</NuxtLink>
        <NuxtLink to="/login" class="link">ログイン</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
.inner {
  padding: 30px;
  display: flex;
  justify-content: space-between;

}
img {
  width: 150px;
  height: auto;
  }
.link {
  margin: 10px;
  color: #fff;
  text-decoration: none;
}
</style>