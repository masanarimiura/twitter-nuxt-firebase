export const state = () => ({
  loginUid: [uid],
  loginUserId: []
});

export const mutations = {
  sendLoginUid(state,receiveUid) {
    state.loginUid = receiveUid;
  },
  sendLoginUserId(state, receiveUserId) {
    state.loginUserId = receiveUserId;
  }
};