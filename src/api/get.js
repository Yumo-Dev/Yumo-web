import request from "./request.js";

export function inviteRecord() {
  return request.get('inviteRecord')
}

export function getSignDaysInfo() {
  return request.get('getSignDaysInfo')
}

export function behavior7day(lang) {
  return request.get(`behavior7day/${lang}`)
}

export function userInfos(addr) {
  return request.get(`userInfos/${addr}`)
}

export function getProjectjobDetail(jobId) {
  return request.get(`getProjectjobDetail/${jobId}`)
}

export function getPublicProjectjobs(data) {
  return request.get('getPublicProjectjobs', data)
}

export function getUserProjectjobs(data) {
  return request.get('getUserProjectjobs', data)
}

export function appearanceLog(data) {
  return request.get('appearanceLog', data)
}

export function momos(apperance, active, activeweigth) {
  return request.get(`momos/${apperance}/${active}/${activeweigth}`)
}

export function getMyRanking(data) {
  return request.get('getMyRanking', data)
}

export function getPublicRanking(data) {
  return request.get('getPublicRanking', data)
}

export function nftself(data) {
  return request.get('nftself', data)
}