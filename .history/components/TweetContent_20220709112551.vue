<template>
  <div id="app">
    <div v-for="(user_id, content) in tweets" :key="user_id" class="tweet__show">
      {{ user_id + "は" + content + "とつぶやいた" }}
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    tweetShow() {
      ;
    },
  },
};

    
</script>

<style>
.tweet__show {
  padding: 20px;
  border: solid 1px #fff;
}
</style>