<template>
  <div id="app">
    <div v-for="(user_id, content) in tweets" :key="user_id" class="tweet__show">
      {{ user_id + "は" + content + "とつぶやいた" }}
    </div>
  </div>
</template>

<script>
    // const vm = new Vue({
    //   el: '#app',
    //   data: {
    //     tweets: [
    //       {
    //         user_id: '1',
    //         content: 'つぶやき1',
    //       },
    //       {
    //         user_id: '2',
    //         content: 'つぶやき2',
    //       },
    //     ]
    //   },
    // })
</script>

<style>
.tweet__show {
  padding: 20px;
  border: solid 1px #fff;
}
</style>