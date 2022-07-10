export const state = () => ({
  loginUserId: ""
});

export const mutations = {
  addCount(state,receiveUserId) {
    state.loginUserId = userId;
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