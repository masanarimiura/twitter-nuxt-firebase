<template>
  <div class="tweet">
    <SideBar></SideBar>
    <div class="tweet__ttl">
      <h2>ホーム</h2>
      <TweetContent :showTweets="showTweets"></TweetContent>
    </div>
  </div>
</template>

<script>
// import firebase from '~/plugins/firebase'
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
      const tweetData = await this.$axios.get("http://127.0.0.1:8000/api/v1/tweet");
      const likesCount = tweetData.data.data[0].likes
      console.log(likesCount)
      console.log([likesCount[0], likesCount[1]])
      console.log([likesCount[0], likesCount[1]].includes(likesCount[0]));
      for (let i = 0; i < likesCount.length; i++) {
        console.log(likesCount[i].user_id)
      }

      this.showTweets = tweetData.data.data;
    },
  },
  created() {
    this.$store.dispatch('onAuth')
    this.getTweetLike()
    console.log(this.$store.state.userUid)
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