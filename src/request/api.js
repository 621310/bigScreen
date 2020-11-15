import { get, post } from './http'

export const test001 = p => post('/api/test001', p);
export const getUserInfo = p => post("/api/getUserInfo",p);
