<template>
  <div class="comment">
    <SideBar></SideBar>
    <div class="comment__inner">
      <h2>コメント</h2>
      <TweetContent></TweetContent>
      <h3>コメント</h3>
      <CommentContent></CommentContent>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // ここのuser_idとtweet_idがない
      showTweets: {},
      user_id: "",
      tweet_id: "",
      likeCounts: "",

      testData:"",
      
      // showLikes:{},
      // loginUserId: "",
      // tweetId:"",
      // tweetContent:"",
      // tweetUserName: "",
    };
  },
  methods: {
    async getTweetLike() {
      const resTweet = await this.$axios.get("http://127.0.0.1:8000/api/v1/tweet");
      this.showTweets = resTweet.data.data;
      console.log(resTweet.data.data)
    },
    async onLikeBtn(tweetData) {
      const sendLikeData = {
        testData: tweetData
        // user_id: this.$store.state.loginUserId, 
        // tweet_id: tweetData.id
      }
      console.log(tweetData)
      const resData = await this.$axios.post("http://127.0.0.1:8000/api/v1/like", sendLikeData);
      location.reload();
    },
    async toComment(TweetIdNum) {
      // const TweetId = {
      //   id : TweetIdNum
      // }
      const tweetData = await this.$axios.get("http://127.0.0.1:8000/api/v1/tweet/" + TweetIdNum);
      console.log(tweetData)
      const sendTweetData = {
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch('login', userData);
      // this.$router.push("comment/" );
    }
    // async insertLike() {
    //   const sendData = {
    //     user_id: this.loginUserId,
    //     tweet_id: this.tweetId,
    //   };
    //   await this.$axios.post("http://127.0.0.1:8000/api/v1/like/", sendData);
    //   this.getTweet();
    //   this.getLike();
    // },
    // async deleteLike(id) {
    //   await this.$axios.delete("http://127.0.0.1:8000/api/v1/like/" + id);
    //   this.getTweet();
    //   this.getLike();
    // },
    // async deleteTweet(id) {
    //   await this.$axios.delete("http://127.0.0.1:8000/api/v1/tweet/" + id);
    //   this.getTweet();
    //   this.getLike();
    // },
  },
  created() {
    this.getTweetLike()
  }
};
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