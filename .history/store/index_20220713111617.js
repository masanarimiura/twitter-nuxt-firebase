export const state = () => ({
  loginUserId: {}
});

export const mutations = {
  sendLoginUid(state,receiveUid) {
    state.loginUid = receiveUid;
  },
  sendLoginUserId(state, receiveUserId) {
    state.loginUserId = receiveUserId;
  }
};