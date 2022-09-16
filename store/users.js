export const state = () => ({
  users: [],
})

export const mutations = {
  setUser(state, value){
    state.users = value;
  },
}

export const getters = {
  getUser: state => JSON.parse(JSON.stringify(state.users)),
}

export const actions = {
  async requestUsers({ commit, state }){
    await this.$axios('./user.json').then((response)=>{
      commit('setUser', response.data);
    });
  },
}


