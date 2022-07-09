<template>
  <div class="register">

    <TopBar></TopBar>

    <div class="register__inner">
      <div class="register__box">
        <p>新規登録</p>
        <br />
        <validation-observer ref="obs" v-slot="ObserverProps">
          <validation-provider v-slot="{ errors }" rules="required|max:20">
            <input v-model="name" v-modal="dbname" type="name" required placeholder="ユーザーネーム" />
            <div class="error">{{ errors[0] }}</div>
          </validation-provider>
          <br />
          <input v-model="email" v-modal="dbemail" type="email" required placeholder="メールアドレス" />
          <br />
          <input v-model="password" v-modal="dbpassword" type="password" required placeholder="パスワード" />
          <br />
          <button @click="register" class="register__btn">新規登録</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      name:null,
      email: null,
      password: null,
      dbname:null,
      dbemail: null,
      dbpassword: null,

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
    addUser() {
      const newUserData = {
        name: this.dbname,
        email: this.dbemail,
        password: this.dbpassword,
      };
      this.$axios.post("http://127.0.0.1:8000/api/v1/user", newUserData);
    },
  },
}
</script>

<style>
.register__inner{
  display: flex;
  justify-content: center;
}
.register__box{
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
.register__btn{
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