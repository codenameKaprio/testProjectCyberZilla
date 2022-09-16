export const state = () => ({
  users: [],
})

export const mutations = {
  setUser(state, value){
    state.users = value;
  },
}

export const getters = {
  getUser: state => state.users,
}

export const actions = {
  async requestUsers({ commit, state }){
    await this.$axios('./payments.json').then((response)=>{
      console.log(response.data)
      commit('setUser', response.data);
    });
  },
}


