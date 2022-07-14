<template>
  <div>
    <div v-for="tweet in showTweets" :key="tweet.id" class="tweet__show">
      <div class="tweet__show__inner">
        <p class="user__name">{{tweet.user.name}}</p>
        <div class="like__btn" @click="onLikeBtn(tweet)"><img src="../img/heart.png" class="like__img"><span
            class="likes">{{ tweet.likes.length }}</span>
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
  props: ['showTweets'],
  data() {
    return {
      user_id: "",
      tweet_id: "",
      likeCounts: "",
      testData: "",
      
      // showLikes:{},
      // loginUserId: "",
      // tweetId:"",
      // tweetContent:"",
      // tweetUserName: "",
    };
  },
  methods: {
    async onLikeBtn(tweetData) {
      const sendLikeData = {
        testData : tweetData
        // user_id: this.$store.state.loginUserId, 
        // tweet_id: tweetData.id
      }
      console.log(tweetData)
      const resData = await this.$axios.post("http://127.0.0.1:8000/api/v1/like", sendLikeData);
      location.reload();
    },
    async toComment(TweetIdNum) {
      this.$router.push({ path: 'comment', query: { id: this.TweetIdNum } });

      // ここは tweet_id の番号だけもって、comment.vue に飛ぶイメージだけど、クエリパラメータで渡すか、Vuexに保存するかどうするか？どっちにしろ、
      // comment.vue では 下のaxios を使って情報を引き出して TweetContent で表示できるように
      
      const tweetData = await this.$axios.get("http://127.0.0.1:8000/api/v1/tweet/" + TweetIdNum);
      console.log(tweetData)
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