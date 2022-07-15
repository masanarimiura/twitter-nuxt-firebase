<template>
  <div>
    <div v-for="tweet in showTweets" :key="tweet.id" class="tweet__show">
      <div class="tweet__show__inner">
        <p class="user__name">{{tweet.user.name}}</p>
        <!-- <div class="like__btn" v-if="tweet.likes" @click="clickUnlike(tweet)">
          <img src="../img/heart.png" class="like__img"><span class="likes">{{ tweet.likes.length }}</span>
        </div> -->
        <div class="like__btn" @click="clickLikeBtn(tweet)">
          <img src="../img/heart.png" class="like__img"><span class="likes">{{ tweet.likes.length }}</span>
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
    async clickLikeBtn(tweetData) {
      const loginUserID = this.$store.state.loginUserId
      const tweetId = tweetData.id
      // const likeUserId = tweetData.likes[tweetId].user_id

      const tweetLike = tweetData.likes
      for (let i = 0; i < tweetLike.length; i++) {
        console.log([tweetLike[i].user_id].includes(loginUserID))
      }


      // ここのtweetIdじゃなくて、user_id が合うやつを探したいけど


      // console.log(tweetData.likes)
      // // console.log(likeUserId)
      // // console.log([likeUserId].includes(this.$store.state.loginUserId))
      // const sendLikeData = {
      //   user_id: loginUserID,
      //   tweet_id: tweetData.id
      // }
      // const UnlikeId = tweetData.likes
      // // console.log(UnlikeId)
      // if ([likeUserId].includes(loginUserID)) {
      //   await this.$axios.delete("http://127.0.0.1:8000/api/v1/like/" + UnlikeId);
      // } else {
      //   await this.$axios.post("http://127.0.0.1:8000/api/v1/like", sendLikeData);
      //   }
      // location.reload();
    },

    // async clickUnlike(tweetData) {
    //   const UnlikeId = tweetData.likes
    //   // ここのlikes の中から likes.user_id が this.$store.state.loginUserId と同じやつの id を割り出して UnlikeId に送りたい
    //   console.log(tweetData)
    //   // await this.$axios.delete("http://127.0.0.1:8000/api/v1/like/" + UnlikeId);
    //   // location.reload();
    // },

    toComment(TweetIdNum) {
      this.$router.push({ path: 'comment', query: { id: TweetIdNum } });
      
      
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