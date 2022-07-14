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
      const tweet = await this.$axios.get("http://127.0.0.1:8000/api/v1/tweet");
      console.log(resTweet.data.data)
      this.showTweets = resTweet.data.data;
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