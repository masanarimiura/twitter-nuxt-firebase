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
export default {
  data() {
    return {
      id:"",
    };
  },
  created() {
    const searchUid = {this.$store.state.loginUid
  }
    console.log(searchUid)
    this.$axios
      .get("http://127.0.0.1:8000/api/v1/user", searchUid)
      .then((data) => {
        this.id = data.id;
        const userId = {
          id: this.id
        };
        this.$store.commit('sendLoginUserId', userId);
        console.log(this.$store.state.loginUserId)
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