// page/component/orders/orders.js
Page({
  data: {
    address: { name: "林先生", phone: "18865236942", detail: "北京市北京城区朝阳区西街635号", },
    hasAddress: true,
    goodPrice: 5002,
    goodsfreight: 5,
    totalPrice: 395.00,
    txtPay: "立即支付",
    order: [
      { goodId: '1', goodName: '特级红茶120g', goodImg: '../../static/images/ShoppingMall/goods.jpg', discountPrice: '490.00', goodCount: 4, goodStock: 10 },
      { goodId: '2', goodName: '特级红茶120g', goodImg: '../../static/images/ShoppingMall/goods.jpg', discountPrice: '490.00', goodCount: 1, goodStock: 50 }
    ],
  },
  onLoad: function () {
    this.getTotalPrice();
    this.setData({

    })
  },
  /*绑定加数量事件*/
  increaseCount: function (e) {
    const index = e.currentTarget.dataset.index;
    let order = this.data.order;
    let goodCount = order[index].goodCount;
    goodCount++;
    if (goodCount > order[index].goodStock) {
      wx.showToast({
        title: '库存不够啦，亲~',
        icon: 'none',
        mask: true
      })
      order[index].goodCount = order[index].goodStock;
    } else {
      order[index].goodCount = goodCount;
    }
    this.setData({
      order: order
    });
    this.getTotalPrice();
  },
  /*绑定减数量事件*/
  decreaseCount: function (e) {
    const index = e.currentTarget.dataset.index;
    let order = this.data.order;
    let goodCount = order[index].goodCount;
    if (goodCount <= 1) {
      wx.showToast({
        title: '数量最低为1',
        icon: 'none',
        mask: true
      })
      return false;
    }
    goodCount--;
    order[index].goodCount = goodCount;
    this.setData({
      order: order
    });
    this.getTotalPrice();
  },
  /*手动输入商品数量的验证*/
  validateData: function (e) {
    const index = e.currentTarget.dataset.index;
    let order = this.data.order;
    let goodCount = e.detail.value;
    var re = /^\+?[1-9][0-9]*$/;
    if (!re.test(goodCount)) {
      wx.showToast({
        title: '购买数量有误',
        icon: 'none',
        mask: true
      })
      return order[index].goodCount;
    }
    if (goodCount > order[index].goodStock) {
      wx.showToast({
        title: '库存不够啦，亲~',
        icon: 'none',
        mask: true
      })
      return order[index].goodStock;
    }
  },
  /*手动输入商品的后续操作*/
  updateGoodCount: function (e) {
    const index = e.currentTarget.dataset.index;
    let order = this.data.order;
    let goodCount = e.detail.value;
    if (goodCount <= order[index].goodStock) {
      order[index].goodCount = goodCount;
    } else {
      order[index].goodCount = goodStock;
    }
    this.setData({
      order: order
    });
    this.getTotalPrice();
  },
  /*计算总价*/
  getTotalPrice: function () {
    let order = this.data.order;
    let total = 0;
    for (let i = 0; i < order.length; i++) {
      total += order[i].goodCount * order[i].discountPrice;
    }
    let totalPrice = this.data.goodsfreight + total;
    this.setData({
      goodPrice: total.toFixed(2),
      totalPrice: totalPrice.toFixed(2)
    });
  }
})