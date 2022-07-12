export const state = () => ({
  loginUid: {},
});

export const mutations = {
  sendLoginUserData(state,receiveUserData) {
    state.loginUserData = receiveUserData;
  }
};
