import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const UIDKey = '-1'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUID() {
  return Cookies.get(UIDKey)
}

export function setUID(UID) {
  return Cookies.set(UIDKey, UID)
}

export function removeUID() {
  return Cookies.remove(UIDKey)
}
