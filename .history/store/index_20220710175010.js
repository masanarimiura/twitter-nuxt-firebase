export const state = () => ({
  loginUserId: "",
});

export const mutations = {
  sendLoginUserData(state,receiveUserData) {
    state.loginUserId = receiveUserId;
  }
};
