<template>
  <div class="login">

    <TopBar></TopBar>

    <div class="login__inner">
      <div class="__box">
        <p>新規登録</p>
        <br />
        <input v-model="email" type="email" required placeholder="ユーザーネーム" />
        <br />
        <input v-model="email" type="email" required placeholder="メールアドレス" />
        <br />
        <input v-model="password" type="password" required placeholder="パスワード" />
        <br />
        <button @click="register">新規登録</button>
      </div>
    </div>
    <button @click="login">ログイン</button>
    <br />
    <NuxtLink to="/">戻る</NuxtLink>
  </div>
</template>


<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        alert('メールアドレスまたはパスワードが入力されていません。')
        return
      }
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert('ログインが完了しました')
          this.$router.push('/')
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。')
              break
            case 'auth/user-disabled':
              alert('ユーザーが無効になっています。')
              break
            case 'auth/user-not-found':
              alert('ユーザーが存在しません。')
              break
            case 'auth/wrong-password':
              alert('パスワードが間違っております。')
              break
            default:
              alert('エラーが起きました。しばらくしてから再度お試しください。')
              break
          }
        })
    },
  },
}
</script>