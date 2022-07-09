<template>
  <div>
    <div v-for="(data,index) in tweets" :key="index" class="tweet__show">
      p{{ data.user_id + "は" + data.content + "とつぶやいた" }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tweets: [
        {
          user_id: 1,
          content: 'つぶやき1',
        },
        {
          user_id: 2,
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