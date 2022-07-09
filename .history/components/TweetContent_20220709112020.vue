<template>
  <div id="app">
    <div v-for="(user_id, content) in tweets" :key="user_id" class="tweet__show">
      {{ index + "番目のプロパティ名は" + key + "で値は" + value }}
    </div>
  </div>
</template>

<script>
    const vm = new Vue({
      el: '#app',
      data: {
        fruits: [
          {
            user_id: '1',
            content: '１つぶやき',
            num: 2,
          },
          {
            name: 'ブドウ',
            weight: 325.4567,
            num: 5
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