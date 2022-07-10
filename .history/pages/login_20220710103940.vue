<template>
  <div class="login">

    <TopBar></TopBar>

    <div class="login__inner">
      <div class="login__box">
        <p>ログイン</p>
        <br />
        <input v-model="email" type="email" required placeholder="メールアドレス" />
        <br />
        <input v-model="password" type="password" required placeholder="パスワード" />
        <br />
        <button @click="login" class="login__btn">ログイン</button>
      </div>
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
          this.$router.push('/tweet')
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
  senUser() {
    const newUserData = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    this.$axios.post("http://127.0.0.1:8000/api/v1/user", newUserData);
  },
}
</script>

<style>
.login__inner{
  display: flex;
  justify-content: center;
}
.login__box{
  width: 500px;
  background-color: #fff;
  border-radius: 10px;
  padding: 50px;
  text-align: center;
}
p{
  color: #000;
  font-weight: bold;
}
input{
  margin: 10px;
  width: 400px;
  height: 30px;
}
.login__btn {
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