export const state = () => ({
  loginUid: {},
});

export const mutations = {
  sendLoginUserData(state,receiveUserData) {
    state.loginUid = receiveUserData;
  }
};
