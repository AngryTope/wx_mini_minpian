Page({
  data:{
    goodId: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    easingFunction: 'easeInOutCubic',
    goodName: '乌龙茶',
    goodImgSrcs: [
      {
      src: '../../static/images/ShoppingMall/goods.jpg'
      },
      {
        src: '../../static/images/ShoppingMall/goods.jpg'
      },
      {
        src: '../../static/images/ShoppingMall/goods.jpg'
      }
    ],
    goodPrice: "￥158",
    discountPrice: "￥128",
    goodSalesVolume: 8,
    imgModeScale: 'scaleToFill',
    imgModeWidthFix: 'widthFix',
    goodDetailInfo: '商品详情',
    goodDetailImg: [
      {
        imgSrc: '../../static/images/ShoppingMall/imgdetail.jpg'
      }
    ],
    mallIconSrc: '../../static/images/ShoppingMall/ShoppingMall.png',
    txtMallIcon: '商城',
    consultIconSrc: '../../static/images/ShoppingMall/consult.png',
    txtConsultIcon: '咨询',
    cartIconSrc: '../../static/images/ShoppingMall/ShoppingCart.png',
    txtCartIcon: '购物车',
    addCart: '加入购物车',
    buyNow: '立即购买'
  },
  onLoad: function (options) {
    this.setData({
      goodId:options.goodId
    })
  }
})