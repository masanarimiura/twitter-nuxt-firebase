<template>
  <div class="side__bar">
    <NuxtLink to="/"><img src="../img/logo.png" class="side__bar__logo"></img></NuxtLink>
    <NuxtLink to="/" class="side__bar__link"><img src="../img/home.png" class="side__bar__home"></img>ホーム</NuxtLink>
    <NuxtLink to="/" class="side__bar__link" @click="logout"><img src="../img/logout.png"
        class="side__bar__home"></img>ログアウト</NuxtLink>
    <p class="share">シェア</p>
    <validation-observer ref="obs" v-slot="ObserverProps">
      <validation-provider v-slot="{ errors }" rules="required|max:120">
        <textarea v-model="newTweet" id="tweet_content" type="text" name="シェア"></textarea>
        <div class="error">{{ errors[0] }}</div>
      </validation-provider>
      <button type="button" :disabled="ObserverProps.invalid || !ObserverProps.validated" class="tweet__btn" @click="insertTweet" >送信</button>
    </validation-observer>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      loginUserId: {},
      newTweet: "",
    };
  },
  created() {
    const searchUid = this.$store.loginUid
    this.$axios
      .get("http://127.0.0.1:8000/api/v1/user/", { searchUid })
      .then((data) => {
        this.id = data.id;
        this.$store.commit('sendLoginUserId', resUserId);
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
.side__bar{
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 30px;
}
.side__bar__logo {
  width: 100px;
  height: auto;
  margin-bottom: 20px;
}
.side__bar__link {
    margin-bottom: 20px;
    color: #fff;
    text-decoration: none;
  }
.side__bar__home , .side__bar__logout {
  width: 20px;
  height: auto;
  padding-right: 10px;
}
.share{
  color: #fff;
}
#tweet_content{
  margin-top: 10px;
  width: 100%;
  height: 150px;
  border: solid 1px #fff;
  background-color: #1f1043;
  border-radius: 10px;
  color: #fff;
}
.tweet__btn {
  margin-top: 10px;
  margin-left: 100px;
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