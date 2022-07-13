<template>
    <div class="tweet">
      <!-- <SideBar></SideBar> -->
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
      uid: null ,
    };
  },
  created() {
    const userUid = firebase.auth().currentUser.uid;
    console.log(userUid)
    this.uid = userUid;
    const sendUid = {
      uid: this.uid,
    };
    this.$store.commit('sendLoginUid', sendUid);
    console.lo



    // const searchUid = {
    //   uid : this.$store.state.loginUid
    // }
    // console.log(searchUid)
    // this.$axios
    //   .get("http://127.0.0.1:8000/api/v1/user", searchUid)
    //   .then((data) => {
    //     this.id = data.id;
    //     const userId = {
    //       id: this.id
    //     };
    //     this.$store.commit('sendLoginUserId', userId);
    //     console.log(this.$store.state.loginUserId)
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