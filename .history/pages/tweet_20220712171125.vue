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
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      loginUserId: {},
      id:"",
      newTweet: "",
    };
  },
  created() {
    const searchUid = this.$store.loginUid
    this.$axios
      .get("http://127.0.0.1:8000/api/v1/user", { params: { searchUid } })
      .then((data) => {
        this.id = data.id;
        const userId = {
          id: this.id
        };
        this.$store.commit('sendLoginUserId', userId);
        console.log(this.$store.loginUserId)
      })
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert('ログアウトが完了しました')
          this.$router.replace('/')
        })
    },
    async insertTweet() {
      const sendData = {
        user_id: this.loginUserId,
        content: this.newTweet,
      };
      await this.$axios.post("http://127.0.0.1:8000/api/tweet/", sendData);
      this.getTweet();
    },
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