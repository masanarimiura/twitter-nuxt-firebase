<template>
  <div>
    <div v-for="data in showComments" :key="id" class="comment__show">
      <div class="comment__show__inner">
        <p class="user__name">{{data.id}}</p>
        <p class="comment__content">{{data.content}}</p>
      </div>
    </div>
    <div class="comment__submit">
      <validation-observer ref="obs" v-slot="ObserverProps">
        <validation-provider v-slot="{ errors }" rules="required|max:120">
          <textarea v-model="newComment" id="comment_content" type="text" name="コメント"></textarea>
          <div class="error">{{ errors[0] }}</div>
        </validation-provider>
        <button type="button" :disabled="ObserverProps.invalid || !ObserverProps.validated" class="comment__submit__btn"
          @click="insertComment()">送信</button>
      </validation-observer>
    </div>
  </div>
</template>

<script>
export default {
  props: ['TweetIdNum'],
  data() {
    return {
      newComment:"",
      // ここのuser_idとtweet_idがない
      showComments:[],
      loginUserId: "",
      tweetId:"",
      tweetContent:"",
      tweetUserName: "",
    };
  },
  methods: {
    async getComment() {
    const resData = await this.$axios.get("http://127.0.0.1:8000/api/comment/" +id);
      this.showComments = resData.data.data;
    },
    async insertComment() {
      const sendComment = {
        tweet_id: this.TweetIdNum,
        user_id: this.$store.state.loginUserId,
        content: this.newComment,
      };
      console.log(sendComment)
      await this.$axios.post("http://127.0.0.1:8000/api/v1/comment", sendComment);
      location.reload();
    },
  },
  created() {
    this.getComment();
  },
};
</script>

<style>
.comment__show {
  padding: 20px;
  border: solid 1px #fff;
}
.comment__content {
  color: #fff;
  font-size: 14px;
  font-weight: normal;
  margin-top: 5px;
}
.comment__submit {
  padding: 20px;
  border: solid 1px #fff;
}
#comment_content {
  margin-top: 10px;
  width: 100%;
  height: 25px;
  border: solid 1px #fff;
  background-color: #1f1043;
  border-radius: 10px;
  color: #fff;
}
.comment__submit__btn {
  display: block;
  margin: 0 0 auto auto;
  width: 100px;
  border-radius: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #5a419d;
  color: #fff;
  border: 3px outset #401092;
  cursor: pointer;
}
</style>