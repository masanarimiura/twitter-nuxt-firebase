<template>
  <div>
    <div v-for="tweet in showTweets" :key="tweet.id" class="tweet__show">
      <div class="tweet__show__inner">
        <p class="user__name">{{tweet.user.name}}</p>
        <div class="like__btn" @click="onLikeBtn(tweet.id)"><img src="../img/heart.png" class="like__img"><span
            class="likes">{{ tweet.liks }}</span>
        </div>
        <div class="delete__btn" @click="deleteTweet(tweet.id)"><img src="../img/cross.png" class="delete__img"></div>
        <div class="comment__btn" @click="toComment(tweet.id)"><img src="../img/detail.png" class="comment__img"></div>
      </div>
      <p class="tweet__content">{{tweet.content}}</p>
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
      likeCount
      
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
    // async getLikes(idNum) {
    //   const tweetId = {
    //     tweet_id: idNum ,
    //   }
    //   const resLike = await this.$axios.get("http://127.0.0.1:8000/api/v1/like", { params: tweetId });
    //   console.log(resLike)
    //   const count = resLike.data.count;
    //   console.log(count)
    //   // this.showTweets = resTweet.data.data;
    // },
    async onLikeBtn(tweetId) {
      const sendLikeData = {
        user_id: this.$store.state.loginUserId, 
        tweet_id: tweetId
      }
      const resData = await this.$axios.post("http://127.0.0.1:8000/api/v1/like", sendLikeData);
      location.reload();
    },
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
    // toComment(id) {
    //   this.$router.push("comment/" + id);
    // }
  },
  created() {
    this.getTweetLike()
  }
};
</script>

<style>
.tweet__show {
  padding: 20px;
  border: solid 1px #fff;
}
.tweet__show__inner {
  display: flex;
}
.user__name, .tweet__content {
  color: #fff;
}
.tweet__content {
  font-size: 14px;
  font-weight: normal;
}
.like__btn, .delete__btn, .comment__btn {
  margin: 0 10px;
}
.like__img, .delete__img, .comment__img {
  width: 20px;
  height: auto;
}
.likes {
  color: #fff;
  padding-left: 5px;
}
</style>