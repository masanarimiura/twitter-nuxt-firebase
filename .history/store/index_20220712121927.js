export const state = () => ({
  loginUserData: {},
});

export const mutations = {
  sendLoginUserData(state,receiveUserData) {
    state.loginUserData = receiveUserData;
  }
};
