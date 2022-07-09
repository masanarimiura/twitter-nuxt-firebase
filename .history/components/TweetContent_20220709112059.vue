<template>
  <div id="app">
    <div v-for="(user_id, content) in tweets" :key="user_id" class="tweet__show">
      {{ user + "番目のプロパティ名は" + key + "で値は" + value }}
    </div>
  </div>
</template>

<script>
    const vm = new Vue({
      el: '#app',
      data: {
        tweets: [
          {
            user_id: '1',
            content: '１のつぶやき',
          },
          {
            user_id: '2',
            content: '2のつぶやき',
          },
        ]
      },
    })
</script>

<style>
.tweet__show {
  padding: 20px;
  border: solid 1px #fff;
}
</style>