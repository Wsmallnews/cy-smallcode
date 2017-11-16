Page({
  onrecharge: function (event) {
    wx.navigateTo({
      url: "../wallet/recharge/recharge"
    });
  },
  onextract: function(event){
    wx.navigateTo({
      url: '../wallet/extract/extract',
    })
  },
  onTapmodify: function (event) {
    wx.navigateTo({
      url: "../personal/modify/modify"
    });
  },
  onTaptrade: function (event) {
    wx.navigateTo({
      url: "../personal/trade/trade"
    });
  }
})