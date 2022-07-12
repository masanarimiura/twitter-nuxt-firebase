export const state = () => ({
  userId: {},
});

export const mutations = {
  sendLoginUid(state,receiveUid) {
    state.userid = receiveUid;
  }
};