export const state = () => ({
  loginUid: {},
});

export const mutations = {
  sendLogin(state,receiveUid) {
    state.loginUid = receiveUid;
  }
};
