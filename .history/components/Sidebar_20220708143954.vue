<template>
  <div class="side__bar">
    <NuxtLink to="/"><img src="../img/logo.png" class="side__bar__img"></img></NuxtLink>
    <NuxtLink to="/">ホーム</NuxtLink>
    <NuxtLink to="/" class="logout" @click="logout">ログアウト</NuxtLink>

    <validation-observer ref="obs" v-slot="ObserverProps">
      <validation-provider v-slot="ProviderProps" rules="required|max_value:120">
        <label for="content">シェア</label>
        <input v-model="content" id="content" type="text" name="シェア" />
        <div class="error">{{ ProviderProps.errors[0] }}</div>
      </validation-provider>
      <button type="button" :disabled="ObserverProps.invalid || !ObserverProps.validated" class="tweet__btn">
        送信
      </button>
    </validation-observer>

  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
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
  },
}
</script>

<style>
.side__bar{
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 30px;
}
.side__bar__img {
  width: 100px;
  height: auto;
}
#content{
  width: 100%;
  height: 150px;
  border: solid 1px #fff;
}
.tweet__btn {
  margin: 20px;
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