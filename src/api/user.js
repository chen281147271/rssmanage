import request from '@/utils/rss-request'

export function login(data) {
  return request({
    url: '/api/Login/login',
    method: 'post',
    data
  })
}

export function getInfo(uid) {
  return request({
    url: '/api/Login/GetUserInfo',
    method: 'get',
    params: { uid }
  })
}

export function logout(uid) {
  return request({
    url: '/api/Login/LoginOut',
    method: 'get',
    params: { uid }
  })
}

export function GetUserInfo(params) {
  return request({
    url: '/api/user/GetUserInfo',
    method: 'get',
    params
  })
}

export function CheckUserName(params) {
  return request({
    url: '/api/user/CheckUserName',
    method: 'get',
    params
  })
}

export function requestUpPW(data) {
  return request({
    url: '/api/Login/UpPW',
    method: 'post',
    data
  })
}
