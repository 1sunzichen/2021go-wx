import { getSetting, getUserInfo } from './utils/util'
//用户头像 网络延迟 异步影响
let resolveUserInfo: (
  value?:
    | WechatMiniprogram.UserInfo
    | Promise<WechatMiniprogram.UserInfo>
    | undefined
) => void
// let resolveUserInfo:(value?:WechatMiniprogram.UserInfo|Promise<WechatMiniprogram.UserInfo>)
let rejectUserInfo: (reason?: any) => void
// app.ts
App<IAppOption>({
  globalData: {
    userInfo: new Promise((resolve, reject) => {
      resolveUserInfo = resolve
      rejectUserInfo = reject
    }),
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: (res) => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
    // const setting=wx.getSetting()
    getSetting()
      .then((res) => {
        if (res.authSetting['scope.userInfo']) {
          return getUserInfo()
        }
        return undefined
      })
      .then((res) => {
        if (!res) {
          return
        }
        resolveUserInfo(res.userInfo)
      })
      .catch(rejectUserInfo)
  },
  resolveUserInfo(userInfo: WechatMiniprogram.UserInfo) {
    resolveUserInfo(userInfo)
  },
})
