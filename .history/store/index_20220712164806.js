export const state = () => ({
  loginUid: {},
  loginId
});

export const mutations = {
  sendLoginUid(state,receiveUid) {
    state.loginUid = receiveUid;
  }
};