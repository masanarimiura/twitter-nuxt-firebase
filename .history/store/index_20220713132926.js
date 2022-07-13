import firebase from '~/plugins/firebase'
export const state = () => ({
  loginUserId: null,
  userUid: '',
  loggedIn: false,
});

export const mutations = {
  sendLoginUserId(state, receiveUserId) {
    state.loginUserId = receiveUserId;
  },
  loginStatusChange(state, status) { // 認証状態を双方向に変化
    state.loggedIn = status
  },
  setUserUid(state, userUid) {
    state.userUid = userUid
  },
};

export const actions = {
  login( {commit},{email,password} ) {
    // const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
      console.log(result)
      const user = result.user
      commit('loginStateChange', true)
      console.log('Login was successful')
      commit('setUserUid', user.uid)
      // commit('setUserName', user.displayName)
      this.$router.push('/tweet')
    }).catch((error) => {
      const errorCode = error.code
      console.log('error : ' + errorCode)
    });
  },
  // 認証状態の取得をするaction
  onAuth({ commit }) {
    firebase
      .auth()
      .onAuthStateChanged(user => {
        user = user ? user : {}
      console.log(user.uid)
      commit('setUserUid', user.uid)
      commit('loginStatusChange', user.uid ? true : false)
      const searchUid = {
        uid: user.uid
      }
      console.log(searchUid)
      this.$axios
        .get("http://127.0.0.1:8000/api/v1/user", { params: searchUid } )
        .then((userData) => {
          console.log(userData)
          this.id = userData.data.data.id;
          const userId = {
            id: this.id
          };
          console.log(userId)
          this.$store.commit('sendLoginUserId', userId.id);
        })
      })

  }
}