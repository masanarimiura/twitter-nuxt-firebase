export const state = () => ({
  loginUserId: "",
});

export const mutations = {
  sendLoginUserId(state,receiveUserId) {
    state.loginUserId = receiveUserId;
  }
};
