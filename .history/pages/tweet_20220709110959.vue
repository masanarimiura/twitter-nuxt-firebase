<template>
  <div class="tweet">
    <SideBar></SideBar>
    <div class="tweet__ttl">
      <h2>ホーム</h2>
      <TweetContent id="app" v-for=" id, in tweets" :key="id"></TweetContent>
    </div>
  </div>
</template>

<script>
    const vm = new Vue({
      el: '#app',
      data: {
        tweets: ['リンゴ', 'ブドウ', 'ミカン']
      },
    })
</script>

<style>
.tweet {
  display: flex;
  width: 100vw
}
.tweet__ttl {
  width: 100%;
}
h2 {
  padding: 20px;
  border: solid 1px #fff;
}
</style>