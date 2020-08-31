import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken, getUID, setUID, removeUID } from '@/utils/auth'
import { resetRouter } from '@/router'
const state = {
  token: getToken(),
  name: '',
  avatar: '',
  uid: getUID(),
  roles: [],
  btns: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_UID: (state, avatar) => {
    state.uid = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_BTNS: (state, BTNS) => {
    state.btns = BTNS
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        commit('SET_TOKEN', response.token)
        commit('SET_UID', response.user_id)
        setToken(response.token)
        setUID(response.user_id)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.uid).then(response => {
        // const { data } = response
        // if (!data) {
        //   reject('Verification failed, please Login again.')
        // }

        //  const { name, avatar } = data
        commit('SET_NAME', response.name)
        commit('SET_AVATAR', '')
        if (response.roles.menu == null || response.roles.menu === '' || response.roles.menu.length === 0) {
          commit('SET_ROLES', '1')
        } else {
          commit('SET_ROLES', response.roles.menu)
        }
        if (response.roles.button == null || response.roles.button === '' || response.roles.button.length === 0) {
          commit('SET_BTNS', '1')
        } else {
          commit('SET_BTNS', response.roles.button)
        }
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.uid).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        removeUID()
        resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

