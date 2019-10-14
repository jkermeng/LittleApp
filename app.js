//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var that = this;
    that.globalData.isLogin = true;
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  

    // 登录
    wx.login({
      success: res => {
        if (res.code) { 
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx742080f9e86e9867&secret=224b34d3432c95c998115141e07eb7ac&js_code='+res.code+'&grant_type=authorization_code',
          method:'GET',
          data:{
            'code':res.code
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (response){
            // console.log(response) 
             if(response.data.openid){
                wx.setStorage({
                  key: 'tokenId',
                  data: response.data.openid,
                })
             }
          }
        })
        }
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
    //       wx.navigateTo({
    //   url: '../../message/index/index'
    //   // url: '../logs/logs'
    // })
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // console.log(res.userInfo)
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              // wx.navigateTo({
              //   url: '../../message/index/index'
              // })
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})