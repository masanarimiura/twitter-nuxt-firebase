<template>
    <div class="tweet">
      <SideBar></SideBar>
      <div class="tweet__ttl">
        <h2>ホーム</h2>
        <!-- <TweetContent></TweetContent> -->
      </div>
    </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      // uid: null,
      // id: null,
    };
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
    const serchUid = {
      uid: this.sta
    }
    this.$axios
      .get("http://127.0.0.1:8000/api/v1/user", { params: searchUid } )
      .then((userData) => {
        this.id = userData.data.data.id;
        const userId = {
          id: this.id
        };
        this.$store.commit('sendLoginUserId', userId);
      })

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