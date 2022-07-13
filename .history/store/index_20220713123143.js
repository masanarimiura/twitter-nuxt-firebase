
export const state = () => ({
  loginUserId: {},
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
  setUserUid(state, userUid) { // user_uidの取得
    state.userUid = userUid
  },
};

export const actions = {
  login( userData ) {
    // const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithEmailAndPassword(userData.email, userData.password)
      .then((result) => {
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
    firebase.auth().onAuthStateChanged(user => {
      user = user ? user : {}
      commit('setUserUid', user.uid)
      commit('loginStatusChange', user.uid ? true : false)
    })
  }
}