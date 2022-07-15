<template>
  <div class="tweet">
    <SideBar></SideBar>
    <div class="tweet__ttl">
      <h2>ホーム</h2>
      <TweetContent :showTweets="showTweets"></TweetContent>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTweets: {},
    };
  },
  methods: {
    async getTweetLike() {
      const tweetData = await this.$axios.get("http://127.0.0.1:8000/api/v1/tweet");
      this.showTweets = tweetData.data.data;
      console.log
    },
  },
  created() {
    this.$store.dispatch('onAuth')
    this.getTweetLike()
  }
}
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