export const state = () => ({
  loginUid: {},
  loginUser
});

export const mutations = {
  sendLoginUid(state,receiveUid) {
    state.loginUid = receiveUid;
  }
};