<template>
  <div class="comment">
    <SideBar></SideBar>
    <div class="comment__inner">
      <h2>コメント</h2>
      <TweetContent :showTweets="showTweets"></TweetContent>
      <h3>コメント</h3>
      <CommentContent :tweetIdNum="tweetIdNum"></CommentContent>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTweets:null,
      tweetIdNum:null,
    };
  },
  methods: {
    async getTweetLike() {
      this.tweetIdNum = this.$route.query.id
      const tweetId = {
        id: this.tweetIdNum
      }
      const tweetData = await this.$axios.get("http://127.0.0.1:8000/api/v1/tweet/target" ,{ params: tweetId })
      this.showTweets = [tweetData.data.data];
    },
  },
  created() {
    this.$store.dispatch('onAuth')
    this.getTweetLike()
  }
}
</script>

<style>
.comment {
  display: flex;
  width: 100vw
}
.comment__inner {
  width: 100%;
}
h2 {
  padding: 20px;
  border: solid 1px #fff;
}
h3 {
  display: block;
  text-align: center;
  padding: 10px;
  border: solid 1px #fff;
  font-weight: normal;
}
</style>