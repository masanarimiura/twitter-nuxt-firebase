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