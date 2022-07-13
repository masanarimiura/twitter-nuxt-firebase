export const state = () => ({
  loginUserId: {}
});

export const mutations = {
  sendLoginUserId(state, receiveUserId) {
    state.loginUserId = receiveUserId;
  }
  
};

export const actions = {
  login({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      const user = result.user
      commit('loginStateChange', true)
      console.log('Login was successful')
      commit('setUserUid', user.uid)
      commit('setUserName', user.displayName)
      this.$router.push('/dashboard')
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
  },
  ...
}