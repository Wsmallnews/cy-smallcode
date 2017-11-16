Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 60,
    activeIndex: 0,
    swaitchStatus: true
  },
  savePhoneNumber: function (e) {
    // console.log(e.detail.value)
    this.setData({
      phoneNumber: e.detail.value
    });
  },
  getValidCode: function () {
    
    if (!this.data.phoneNumber) {
       wx.showToast({
         title: '请填写电话号码',
         icon: 'loading',
         duration: 1000
       })
       return false;
     }
    if (this.data.phoneNumber.length != 11) {
      wx.showToast({
        title: '电话号码错误',
        icon: 'loading',
        duration: 1000
      })
      return false;
    }
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!myreg.test(this.data.phoneNumber)) {
      wx.showToast({
        title: '手机号有误！',
        icon: 'loading',
        duration: 1500
      })
      return false;
    } 

    if (this.data.phoneNumber && this.data.count == 60) {
      this.tick()
      return true;
    } 
    
  },
  tick: function () {
    var vm = this
    if (vm.data.count > 0) {
      vm.setData({
        count: vm.data.count - 1
      });
      setTimeout(function () {
        return vm.tick()
      }, 1000)
    } else {
      vm.setData({
        count: 60
      });
    }
  }
})