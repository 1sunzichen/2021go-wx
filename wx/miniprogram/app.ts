import {getSetting,getUserInfo} from './utils/util';
// app.ts
App<IAppOption>({
  globalData: {
    userInfo:new Promise((resolve,reject)=>{
      getSetting().then(res=>{
        if (res.authSetting['scope.userInfo']) {
          return getUserInfo()
        }
        return undefined
      }).then(res=>{
        if(!res){
          return 
        }
        resolve(res.userInfo)
        // this.globalData.userInfo = res.userInfo
        //   if (this.userInfoReadyCallback) {
        //     this.userInfoReadyCallback(res)
        //   }
      }).catch(err=>reject(err))
    })
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
    // const setting=wx.getSetting()

    // 获取用户信息  //串联 解决回调低于
    // getSetting().then(res=>{
    //   if (res.authSetting['scope.userInfo']) {
    //     return getUserInfo()
    //   }
    //   return undefined
    // }).then(res=>{
    //   if(!res){
    //     return 
    //   }
    //   this.globalData.userInfo = res.userInfo
    //     if (this.userInfoReadyCallback) {
    //       this.userInfoReadyCallback(res)
    //     }
    // })
    // wx.getSetting({//回调函数
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         },
    //       })
    //     }
    //   },
    // })
  },
})