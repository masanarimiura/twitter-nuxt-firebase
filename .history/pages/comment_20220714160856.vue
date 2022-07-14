<template>
  <div class="comment">
    <SideBar></SideBar>
    <div class="comment__inner">
      <h2>コメント</h2>
      <TweetContent :showTweets="showTweets"></TweetContent>
      <h3>コメント</h3>
      <!-- <CommentContent></CommentContent> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTweets: {},
      // uid: null,
      // id: null,
    };
  },
  methods: {
    async getTweetLike() {
      const TweetId = {
        id : this.$route.query.id
      }
      const tweetData = await this.$axios.get("http://127.0.0.1:8000/api/v1/comment" { params: TweetIdNum });
      console.log(tweetData.data.data)
      this.showTweets = tweetData.data.data;
      // コメントが表示されないな
    },
  },
  created() {
    this.$store.dispatch('onAuth')
    this.getTweetLike()
    // const userUid = firebase.auth().currentUser.uid;
    // const searchUid = {
    //   uid: userUid,
    // };
    // console.log(searchUid)
    // this.$axios
    //   .get("http://127.0.0.1:8000/api/v1/user", { params: searchUid } )
    //   .then((userData) => {
    //     this.id = userData.data.data.id;
    //     const userId = {
    //       id: this.id
    //     };
    //     this.$store.commit('sendLoginUserId', userId);
    //   })
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