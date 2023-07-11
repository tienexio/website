import request from '@/utils/request'

export function Logininterface(params) {
  return request({
    url: '/api/frontend/login',
    method: 'post',
    params:params
  })
}

export function getrewardLog(page) {
  return request({
    url: '/api/frontend/user/rewardLog',
    method: 'get',
    params: { page, limit:5}
  })
}

export function getinfo() {
  return request({
    url: '/api/frontend/user/info',
    method: 'get',
    params: {}
  })
}

export function getverifyInvitationCode(invitation_code) {
  return request({
    url: '/api/frontend/verifyInvitationCode',
    method: 'post',
    params: {invitation_code}
  })
}

export function getdataCount() {
  return request({
    url: '/api/frontend/user/dataCount',
    method: 'get',
    params: {}
  })
}





