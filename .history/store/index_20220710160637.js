export const state = () => ({
  loginUid: "",
});

export const mutations = {
  sendLoginUid(state,receiveUid) {
    state.loginUid = receiveUid;
  }
};

// export const actions = {
//   timerCount({ commit }) {
//     setTimeout(function() {
//       commit("addCount");
//     }, 1000);
//   }
// };

// export const getters = {
//   double(state) {
//     return state.count * 2;
//   }
// };