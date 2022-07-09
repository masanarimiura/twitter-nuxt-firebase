<template>
  <div id="app">
    <div v-for="(userid, content) in tweets" :key="userid" class="tweet__show">
      {{ userid + "は" + content + "とつぶやいた" }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tweets: [
        {
          userid: '1',
          content: 'つぶやき1',
        },
        {
          userid: '2',
          content: 'つぶやき2',
        },
      ]
    };
  }
};
</script>

<style>
.tweet__show {
  padding: 20px;
  border: solid 1px #fff;
}
</style>