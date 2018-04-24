// pages/hello/hello.js
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
    inputname:""
  },
  onLoad: function (options) {
    console.info("------");
    ss = options.inputname;
    console.info(ss);
    this.setData({
      inputname : ss+"----"
    });
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
