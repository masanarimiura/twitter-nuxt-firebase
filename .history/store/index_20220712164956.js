export const state = () => ({
  loginUid: {},
  loginUserId: {}
});

export const mutations = {
  sendLoginUid(state,receiveUid) {
    state.loginUid = receiveUid;
  };
  sendLoginUserId(state,)
};