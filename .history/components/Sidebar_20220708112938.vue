<!-- shere ホーム ログアウト シェア のサイドバー、tweet と comment で使う。 
<SideBar></SideBar>で使えるよ
-->


<template>
  <div class="side__bar">
    <!-- shere とログアウトへのルート、tweetできるテキストボックスのバーを作っておく   -->

    <div class="logout">
      <button @click="logout">ログアウト</button>
      <br />
      <NuxtLink to="/">戻る</NuxtLink>
    </div>

    <validation-observer ref="obs" v-slot="ObserverProps">
      <validation-provider v-slot="ProviderProps" rules="required">
        <label for="content">シェア</label>
        <input v-model="content" id="content" type="text" content="" />
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