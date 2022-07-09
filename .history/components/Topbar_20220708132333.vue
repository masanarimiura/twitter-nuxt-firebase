<template>
  <div class="top__bar">
    <div class="top__bar__inner">
      <img src="../img/logo.png" class="top__bar__img"></img>
      <div class="link__box">
        <NuxtLink to="/" class="link">新規作成</NuxtLink>
        <NuxtLink to="/login" class="link">ログイン</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
.top__bar__inner {
  padding: 30px;
  display: flex;
  justify-content: space-between;

}
/top__bar__img {
  width: 150px;
  height: auto;
  }
.link {
  margin: 10px;
  color: #fff;
  text-decoration: none;
}
</style>