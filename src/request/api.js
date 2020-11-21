import { post } from './http'

export const test001 = p => post('/api/test001', p);
export const getUserInfo = p => post("/api/getUserInfo",p);
export const userlogin = p => post("/api/login",p);
export const apiTest = p => post("/api/resource/testredis",p);
