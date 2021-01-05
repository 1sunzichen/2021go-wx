/// <reference path="./types/index.d.ts" />
//取消 回调函数
//将userinfo 编程 promise 
//用then 方法 接收结果
interface IAppOption {
  globalData: {
    userInfo:Promise<WechatMiniprogram.UserInfo>,
  }
  // userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}