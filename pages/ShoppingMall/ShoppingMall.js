Page({
  data: {
    imageMode: "scaleToFill",
    urlHeaderImg: "../../static/images/ShoppingMall/header.jpg",
    currentIndex: 0,
    tabList: [
      { tabtext: '全部', index: 0 },
      { tabtext: '自用茶', index: 1 },
      { tabtext: '定制茶', index: 2 },
      { tabtext: '礼盒茶', index: 3 },
      { tabtext: '茶面膜', index: 4 },
      { tabtext: '茶生活', index: 5 },
      { tabtext: '高端茶', index: 6 }
    ],
    swiperHeight: 1080,
    duration: 500,
    goodList: [
      { 
        good: [
          { goodName: '乌龙茶', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 0 , goodImg:"", goodPrice:"158",discountPrice:"128",goodSalesVolume:8},
          { goodName: '龙井茶', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 1 , goodImg:"", goodPrice:"178",discountPrice:"138",goodSalesVolume:8},
          { goodName: '普洱茶', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 2 , goodImg:"", goodPrice:"458",discountPrice:"228",goodSalesVolume:8},
          { goodName: '铁观音', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 3 , goodImg:"", goodPrice:"158",discountPrice:"128",goodSalesVolume:8},
          { goodName: '白茶', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 4 , goodImg:"", goodPrice:"158",discountPrice:"128",goodSalesVolume:8},
          { goodName: '红茶', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 5 , goodImg:"", goodPrice:"358",discountPrice:"228",goodSalesVolume:8},
          { goodName: '菊花茶', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 6 , goodImg:"", goodPrice:"",discountPrice:"158",goodSalesVolume:8}
        ]
       },
      { 
        good: [
          { goodName: '普洱茶', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 2 , goodImg:"", goodPrice:"458",discountPrice:"228",goodSalesVolume:8},
          { goodName: '铁观音', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 3 , goodImg:"", goodPrice:"158",discountPrice:"128",goodSalesVolume:8}
        ]
       },
      { 
        good: [
          { goodName: '白茶', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 4, goodImg: "", goodPrice: "158", discountPrice: "128", goodSalesVolume: 8 },
          { goodName: '红茶', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 5, goodImg: "", goodPrice: "358", discountPrice: "228", goodSalesVolume: 8 },
          { goodName: '菊花茶', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 6, goodImg: "", goodPrice: "", discountPrice: "158", goodSalesVolume: 8 }
        ]
       },
      { 
        good: [
          { goodName: '白茶', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 4, goodImg: "", goodPrice: "158", discountPrice: "128", goodSalesVolume: 8 },
          { goodName: '红茶', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 5, goodImg: "", goodPrice: "358", discountPrice: "228", goodSalesVolume: 8 },
          { goodName: '菊花茶', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 6, goodImg: "", goodPrice: "", discountPrice: "158", goodSalesVolume: 8 }
        ]
       },
      { 
        good: [
          { goodName: '白茶', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 4, goodImg: "", goodPrice: "158", discountPrice: "128", goodSalesVolume: 8 },
          { goodName: '红茶', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 5, goodImg: "", goodPrice: "358", discountPrice: "228", goodSalesVolume: 8 },
          { goodName: '菊花茶', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 6, goodImg: "", goodPrice: "", discountPrice: "158", goodSalesVolume: 8 }
        ]
       },
      { 
        good: [
          { goodName: '白茶', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 4, goodImg: "", goodPrice: "158", discountPrice: "128", goodSalesVolume: 8 },
          { goodName: '红茶', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 5, goodImg: "", goodPrice: "358", discountPrice: "228", goodSalesVolume: 8 },
          { goodName: '菊花茶', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 6, goodImg: "", goodPrice: "", discountPrice: "158", goodSalesVolume: 8 }
        ]
       },
      { 
        good: [
          { goodName: '菊花茶', src: "../../static/images/ShoppingMall/goods.jpg", goodId: 6, goodImg: "", goodPrice: "", discountPrice: "158", goodSalesVolume: 8 }
        ]
       },
    ],
    goodDetailId:0,
    cartIconSrc:"../../static/images/ShoppingMall/cartMenu.png",
    txtCart:"购物车"
  },
  onLoad: function () {
    this.setData({

    })
  },
  //滑动切换
  swiper: function (e) {
    var that = this;
    that.setData({ currentIndex: e.detail.current });
  },
  //点击切换
  swichNav: function (e) {
    var that = this;
    if (this.data.currentIndex === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentIndex: e.target.dataset.current
      })
    }
  },
  goDetails: function (e) {
    wx.navigateTo({
      url: '../GoodsDetail/GoodsDetail?goodId=' + e.currentTarget.dataset.id
    })
  },
  goCart: function () {
    wx.navigateTo({
      url: '../ShoppingCart/ShoppingCart'
    })
  }
})