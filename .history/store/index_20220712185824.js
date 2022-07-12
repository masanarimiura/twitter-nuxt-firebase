export const state = () => ({
  loginUid: [uid = dOxM9MJIUAd6iMjXkMjN1YOeQ043],
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