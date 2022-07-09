<!-- shere ホーム ログアウト シェア のサイドバー、tweet と comment で使う。 
<SideBar></SideBar>で使えるよ
-->
<template>
  <div class="side__bar">
    <!-- shere とログアウトへのルート、tweetできるテキストボックスのバーを作っておく   -->

    <NuxtLink to="/">
      <img src="../img/logo.png" class="side__bar__img"></img>
    </NuxtLink>
    <NuxtLink to="/">ホーム</NuxtLink>
    <div class="logout">
      <button @click="logout">ログアウト</button>
      <br />

    </div>

    <validation-observer ref="obs" v-slot="ObserverProps">
      <validation-provider v-slot="ProviderProps" rules="required|max_value:120">
        <label for="content">シェア</label>
        <input v-model="content" id="content" type="text" name="シェア" />
        <div class="error">{{ ProviderProps.errors[0] }}</div>
      </validation-provider>
      <button type="button" :disabled="ObserverProps.invalid || !ObserverProps.validated">
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

<style></style>