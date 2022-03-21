// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    refresherTriggered:false,
    hideBottom: true,
    loadMoreData: '数据加载中...',
    listData:[{
      number:'E22028'
    },{
      number:'E22028'
    },{
      number:'E22028'
    },{
      number:'E22028'
    },{
      number:'E22028'
    },{
      number:'E22028'
    },{
      number:'E22028'
    },{
      number:'E22028'
    },{
      number:'E22028'
    },{
      number:'E22028'
    },{
      number:'E22028'
    },{
      number:'E22028'
    },{
      number:'E22028'
    },{
      number:'E22028'
    },{
      number:'E22028'
    },{
      number:'E22028'
    },{
      number:'E22028'
    },{
      number:'E22028'
    },{
      number:'E22028'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },
  loadMore:function(){
    console.log(123123);
    this.setData({
      hideBottom: false  
    })
    wx.showLoading({
      title: '数据加载中...',
    });

    setTimeout(()=>{
      console.log('上拉加载更多');
      wx.hideLoading({
        success: (res) => {},
      })
      this.setData({
        hideBottom: true,  
        listData:this.data.listData.concat([{
          number:'E22028'
        },{
          number:'E22028'
        },{
          number:'E22028'
        },{
          number:'E22028'
        },{
          number:'E22028'
        },{
          number:'E22028'
        },{
          number:'E22028'
        },{
          number:'E22028'
        },{
          number:'E22028'
        },{
          number:'E22028'
        },{
          number:'E22028'
        },{
          number:'E22028'
        },{
          number:'E22028'
        },{
          number:'E22028'
        },{
          number:'E22028'
        },{
          number:'E22028'
        },{
          number:'E22028'
        },{
          number:'E22028'
        },{
          number:'E22028'
        }])
      })
    },1000)
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  goDetail:function(e){
    console.log(e)
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/detail/detail?id='+e.currentTarget.dataset.id
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onSearch:function(){

  },
  onCancel:function(){

  },
  refresh:function(){
    setTimeout(()=>{
      this.setData({
        refresherTriggered:false
      })
    },3000)
  
  }
})