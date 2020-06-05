import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'get',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/getuserInfo',
    method: 'get',
    params: { token }
  })
}
