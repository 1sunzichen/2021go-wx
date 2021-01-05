// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  count:0,
  data: {
    motto: 'Hello World typescript',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  // 事件处理函数
  bindViewTap() {
    // wx.navigateTo({
    //   url: '../logs/logs',
    // })
    console.log("taped");
    
  },
  onLoad() {
    app.globalData.userInfo.then(userInfo=>{
      this.setData({
        userInfo,
        hasUserInfo: true,
      })
    })
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true,
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true,
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true,
    //       })
    //     },
    //   })
    // }
    this.updateMotto()
  },
  getUserInfo(e: any) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })
  },
  updateMotto(){
  this.count++
    if(this.count<100){

      this.setData({
        motto:`count:${this.count}`
      },()=>{
        this.updateMotto()
      })
    }
    
  }
})
