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
      uid: null,
      id: null,
    };
  },
  created() {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return firebase.auth().signInWithEmailAndPassword(email, password);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    const userUid = firebase.auth().currentUser.uid;
    const searchUid = {
      uid: userUid,
    };
    console.log(searchUid)
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