import Vuex from 'vuex'

export const state = () => ({
  loginUid: {},
});

export const mutations = {
  sendLoginUid(state,receiveUid) {
    state.loginUid = receiveUid;
  }
};
