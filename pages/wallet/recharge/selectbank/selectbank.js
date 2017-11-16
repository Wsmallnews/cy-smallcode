Page({
  data: {
    radioItems: [
      { picimg:'../../../../images/index-navicon1.jpg', name: '中国民生银行', value: '0', checked: true },
      { picimg: '../../../../images/index-navicon1.jpg', name: '中国工商银行', value: '1' },
      { picimg: '../../../../images/index-navicon1.jpg', name: '中国建设银行', value: '2' }
    ],

  },
  radioChange: function (e) {
    // console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems
    });
  },
  onaddbank:function(event){
    wx.navigateTo({
      url: "../../../wallet/recharge/fillbank/fillbank"
    });
  }

});