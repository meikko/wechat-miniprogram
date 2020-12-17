// pages/mypage/mypage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    list:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
      // 用户列表
      houduanRequest:function(){
        var listdata = this;
        wx.request({
          url: 'http://10.0.130.152:7989/test/myest',
          method: 'GET',
          data: {
            zifu:'Y',
            shuzi:'3',
          },
          header: {
            'content-type': 'application/json'
          },
          success: function (req) {
            // console.log(res.data);
            // var list = req.data.data.list;
            listdata.setData({
              list: req.data.data.list,
            })
            }
        })
      }
  
  
  }


})
