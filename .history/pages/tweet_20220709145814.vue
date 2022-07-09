<template>
    <div class="tweet">
      <SideBar></SideBar>
      <div class="tweet__ttl">
        <h2>ホーム</h2>
        <TweetContent></TweetContent>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      // ここのuser_idはログイン情報から取得？パラメータに乗せる？
      tweets: [],
      likes:[],
      loginUserId: "" ,
      newTweet: "",
      tweetId:"",
    };
  },
  methods: {
    async getTweet() {
    const resData = await this.$axios.get("http://127.0.0.1:8000/api/tweet/");
      this.tweets = resData.data.data;
    },
    async getLike() {
    const resData = await this.$axios.get("http://127.0.0.1:8000/api/like/");
      this.likes = resData.data.data;
    },
    async insertTweet() {
      const sendData = {
      user_id: this.loginUserId,
      content: this.newTweet,
      };
    await this.$axios.post("http://127.0.0.1:8000/api/tweet/", sendData);
      this.getTweet();
    },
    async insertLike() {
      const sendData = {
      user_id: this.loginUserId,
      tweet_id: this.tweetId,
      };
    await this.$axios.post("http://127.0.0.1:8000/api/like/", sendData);
      this.getTweet();
      this.getLike();
    },
    async deleteLike(id) {
      await this.$axios.delete("http://127.0.0.1:8000/api/contact/" + id);
      this.getTweet();
      this.getLike();
    },
    async deleteTweet(id) {
      await this.$axios.delete("http://127.0.0.1:8000/api/contact/" + id);
      this.getTweet();
      this.getLike();
    },
  },
  created() {
    this.getTweet();
    this.getLike();
  },
};
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