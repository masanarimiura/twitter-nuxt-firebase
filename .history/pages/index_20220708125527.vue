<template>
  <div class="register">

    <TopBar></TopBar>
    
    <div class="register__box">
      <p>新規登録</p>
      <input v-model="email" type="email" required placeholder="ユーザーネーム" />
      <br />
      <input v-model="email" type="email" required placeholder="メールアドレス" />
      <br />
      <input v-model="password" type="password" required placeholder="パスワード" />
      <br />
      <button @click="register">新規登録</button>
    </div>
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
    register() {
      if (!this.email || !this.password) {
        alert('メールアドレスまたはパスワードが入力されていません。')
        return
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          data.user.sendEmailVerification().then(() => {
            this.$router.replace('/login')
          })
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。')
              break
            case 'auth/email-already-in-use':
              alert('このメールアドレスはすでに使われています。')
              break
            case 'auth/weak-password':
              alert('パスワードは6文字以上で入力してください。')
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

<style>
.register__box{
  width: 300px;
  height: auto;
  background-color: #fff;
}
p{

}
input{

}
button{

}
</style>