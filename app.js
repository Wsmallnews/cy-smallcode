App({
    onLaunch: function () {
        //调用API从本地缓存中获取数据
        // var logs = wx.getStorageSync('logs') || []
        // logs.unshift(Date.now())
        // wx.setStorageSync('logs', logs)
        this.getUserInfo(function(res) {
        // alert(JSON.stringify(res));
        });
    },
    getUserInfo: function (cb) {
        var that = this;
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登录接口
            wx.login({
                success: function (res) {
                    // 拿到 code
                    var code = res.code;
                    wx.getUserInfo({//getUserInfo流程
                        success: function (result) {//获取userinfo成功
                            console.log(result);
                            wx.request({
                                url: 'https://cyapi.smcdn.top/deskapi/mini',
                                data: {
                                    code: code,
                                    iv: result.iv,
                                    encrypt: result.encryptedData
                                },
                                success: function(res1){
                                    console.log("----");
                                    console.log(res1);
                                }
                            })
                        }
                    })
                }
            });
        }
    },
    globalData: {
        userInfo: null
    }
})
