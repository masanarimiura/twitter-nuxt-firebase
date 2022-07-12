export const state = () => ({
  loginUid: {},
});

export const mutations = {
  sendLoginUserData(state,receiveUid) {
    state.loginUid = receiveUserData;
  }
};
