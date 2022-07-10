export const state = () => ({
  loginUserId: ""
});

export const mutations = {
  addCount(state,useId) {
    state.loginUserId = u;
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