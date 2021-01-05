/// <reference path="./types/index.d.ts" />
//取消 回调函数
//将userinfo 编程 promise
//用then 方法 接收结果 定义接口的类型为promise
// interface IAppOption {
//   globalData: {
//     userInfo: Promise<WechatMiniprogram.UserInfo>
//   }
//   resolveUserInfo(userInfo: WechatMiniprogram.UserInfo): void
//   // userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
// }

interface IAppOption {
  globalData: {
    userInfo: Promise<WechatMiniprogram.UserInfo>
  }

  resolveUserInfo(userInfo: WechatMiniprogram.UserInfo): void
}
