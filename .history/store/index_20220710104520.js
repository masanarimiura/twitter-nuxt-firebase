export const state = () => ({
  loginUserEmail:"",
  loginUserId: "",
});

export const mutations = {
  sendUserEmail(state,receiveUserEmail) {
    state.loginUserId = receiveUserId;
  }
  sendUserId(state,receiveUserId) {
    state.loginUserId = receiveUserId;
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