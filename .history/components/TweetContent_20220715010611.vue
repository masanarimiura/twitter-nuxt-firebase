<template>
  <div>
    <div v-for="tweet in showTweets" :key="tweet.id" class="tweet__show">
      <div class="tweet__show__inner">
        <p class="user__name">{{tweet.user.name}}</p>
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
    };
  },
  methods: {
    async clickLikeBtn(tweetData) {
      const loginUserID = this.$store.state.loginUserId
      const tweetLike = tweetData.likes
      const sendLikeData = {
        user_id: loginUserID,
        tweet_id: tweetData.id
      }
      if (tweetLike == 0) {
        await this.$axios.post("http://127.0.0.1:8000/api/v1/like", sendLikeData);
      } else {
        for (let i = 0; i < tweetLike.length; i++) {
          if ([tweetLike[i].user_id] == loginUserID) {
            const deleteLikeId = tweetLike[i].id
            await this.$axios.delete("http://127.0.0.1:8000/api/v1/like/" + deleteLikeId);
          } else if ([tweetLike[i].user_id] != loginUserID) {
            await this.$axios.post("http://127.0.0.1:8000/api/v1/like", sendLikeData);
          }
        }
      }
      location.reload();
    },
    toComment(TweetIdNum) {
      this.$router.push({ path: 'comment', query: { id: TweetIdNum } });
    },
    async deleteTweet(tweetId) {
      await this.$axios.delete("http://127.0.0.1:8000/api/v1/tweet/" + tweetId);
      location.reload();
    },
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