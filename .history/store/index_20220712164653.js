export const state = () => ({
  usrid: {},
});

export const mutations = {
  sendLoginUid(state,receiveUid) {
    state.loginUid = receiveUid;
  }
};