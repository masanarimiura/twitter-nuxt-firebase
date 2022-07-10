export const state = () => ({
  loginUserId: "",
});

export const mutations = {
  sendLoginUserData(state,receiveUserId) {
    state.loginUserId = receiveUserId;
  }
};
