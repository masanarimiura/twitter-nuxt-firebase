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
// import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      showTweets: {},
      user_id: "",
      tweet_id: "",
      likeCounts: "",
      testData: "",
      // uid: null,
      // id: null,
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
    this.$store.dispatch('onAuth')
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