import request from "./request.js";

export function bscLogin(data) {
  return request.post('bscLogin', data)
}

export function changeName(data) {
  return request.post('changeName', data)
}

export function nftid(data) {
  return request.post('nftid', data)
}

export function nftsave(data) {
  return request.post('nftsave', data)
}

export function projectjobid(data) {
  return request.post('projectjobid', data)
}

export function projectjobAdd(data) {
  return request.post('projectjobAdd', data)
}

export function clickTelegram(data) {
  return request.post('clickTelegram', data)
}

export function clickTwitter(data) {
  return request.post('clickTwitter', data)
}

export function setTelegram(data) {
  return request.post('setTelegram', data)
}

export function setTwitter(data) {
  return request.post('setTwitter', data)
}

export function appearanceUpdate(data) {
  return request.post('appearanceUpdate', data)
}

export function gameStart(data) {
  return request.post('gameStart', data)
}