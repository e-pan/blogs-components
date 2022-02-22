import { request } from './index'
import { ILogin } from './../type/Loing'
// 登录接口
const login = (params: any, apiHpst: string): Promise<any> => {
  return request(apiHpst + 'login', params, 'post')
    .then((res) => {
      return res.data
    })
}

export {
  login,
}
