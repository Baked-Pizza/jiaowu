// 小程序初始化
App({
  globalData: {
    userInfo: null,
    apiBaseUrl: "https://your-api-domain.com"
  },
  onLaunch() {
    // 检查登录状态
    wx.checkSession({
      fail: () => this.login()
    });
  },
  login() {
    wx.login({
      success: res => {
        wx.request({
          url: this.globalData.apiBaseUrl + '/login',
          data: { code: res.code },
          success: (res) => {
            wx.setStorageSync('token', res.data.token);
          }
        });
      }
    });
  }
});