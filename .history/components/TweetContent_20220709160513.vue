<template>
  <div>
    <div v-for="(data,index) in showTweets" :key="data.id" class="tweet__show">
      <div class="tweet__show__inner">
        <!-- users.name と tweet.id に対応する like数 の出し方が分からない。
            その上で likeをつけたり消したりのコマンドを作らないと行けない。 -->
        <p class="user__name">{{data.user_id}}</p> 
        <div class="like__btn"><img src="../img/heart.png" class="like__img"><span class="likes">{{data.id}}</span>
        </div>
        <div class="delete__btn" @click="deleteTweet(data.id)"><img src="../img/cross.png" class="delete__img"></div>
        <div class="comment__btn" @click="toComment(data.id)"><img src="../img/detail.png" class="comment__img"></div>
      </div>
      <p class="tweet__content">{{data.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // ここのuser_idとtweet_idがない
      showTweets:[],
      showLikes:[],
      loginUserId: "",
      tweetId:"",
      tweetContent:"",
      tweetUserName: "",
    };
  },
  methods: {
    async getTweet() {
    const resData = await this.$axios.get("http://127.0.0.1:8000/api/tweet/");
      this.showTweets = resData.data.data;
    },
    async getLike() {
      const resData = await this.$axios.get("http://127.0.0.1:8000/api/like/");
      this.showLikes = resData.data.data;
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
      await this.$axios.delete("http://127.0.0.1:8000/api/like/" + id);
      this.getTweet();
      this.getLike();
    },
    async deleteTweet(id) {
      await this.$axios.delete("http://127.0.0.1:8000/api/tweet/" + id);
      this.getTweet();
      this.getLike();
    },
    async toComment(id)
  },
  created() {
    this.getTweet();
    this.getLike();
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