import axios from 'axios'
import { local } from '@/utils/util'
import { ElMessage, ElLoading } from 'element-plus'

let count = 0
const request = async (url: string, params: any, method: any, option?: any) => {
  // 开启页面加载loading
  let loadingInstance: any
  if (!count) {
    loadingInstance = ElLoading.service({
      fullscreen: true,
      body: true,
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    count++
  }
  function closeLoading() {
    loadingInstance && loadingInstance.close()
    count = 0
  }
  const timestamp = new Date().valueOf()

  let token = ''
  if (local.get('token')) {
    token = local.get('token')
  }

  const headers = {
    'Content-Type': 'application/json',
    timestamp,
    token,
  }

  try {
    const res = await axios({
      method: method || 'post',
      url,
      data: params,
      headers
    })
    if (res.data.code === 200) {
      closeLoading()
      return res.data
    } else {
      ElMessage.error(res.data.resultMsg)
      closeLoading()
    }
  } catch (error: any) {
    // 服务异常
    if (error.response.status === '503') {
      ElMessage.error(error.message)
      closeLoading()
      // 非法输入拦截
    } else if (error.response.status === '401') {
      // 您暂无权限访问该地址
      ElMessage.error('您暂无权限访问该地址')
      closeLoading()
      // 非法输入拦截
    } else if (error.response.status === '400') {
      ElMessage.error('非法输入拦截')
      closeLoading()
      return {
        code: error.response.data.status,
        resultMsg: error.response.data.message
      }
    } else {
      ElMessage.error(error)
      closeLoading()
      return error
    }
  }
}

export {
  request
}
