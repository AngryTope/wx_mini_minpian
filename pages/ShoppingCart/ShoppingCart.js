Page({
  data: {
    cartIsNull:false,
    showDelete:false,
    imgModeScale: 'scaleToFill',
    imgModeWidthFix: 'widthFix',
    nullCartImgSrc: '../../static/images/ShoppingCart/nullCart.png',
    txtNullCart:'您的购物车是空的哦~',
    txtEditGoods:'编辑商品',
    txtDeleteGood:'移除',
    carts:[
      { selected: true, goodId: '1', goodName: '特级红茶120g', goodImg: '../../static/images/ShoppingMall/goods.jpg', discountPrice: '490.00', goodCount: 4, goodStock: 50 },
      { selected: false, goodId: '2', goodName: '特级红茶120g', goodImg: '../../static/images/ShoppingMall/goods.jpg', discountPrice: '490.00', goodCount: 1, goodStock: 50 },
      { selected: true, goodId: '3', goodName: '特级红茶120g', goodImg: '../../static/images/ShoppingMall/goods.jpg', discountPrice: '490.00', goodCount: 1, goodStock: 50 },
      { selected: false, goodId: '4', goodName: '特级红茶120g', goodImg: '../../static/images/ShoppingMall/goods.jpg', discountPrice: '490.00', goodCount: 1, goodStock: 50 },
      { selected: true, goodId: '5', goodName: '特级红茶120g', goodImg: '../../static/images/ShoppingMall/goods.jpg', discountPrice: '490.00', goodCount: 1, goodStock: 50 },
      { selected: true, goodId: '6', goodName: '特级红茶120g', goodImg: '../../static/images/ShoppingMall/goods.jpg', discountPrice: '490.00', goodCount: 1, goodStock: 50 }
    ],
    txtChooseAll:'全选',
    txtTotal:'总计：',
    totalPrice:'0',
    txtSettlement:'结算',
    selectAllStatus:true,//默认全选
    isSelected : false //是否存在被选择项
  },
  onLoad: function () {
    this.isSelectAll();
    this.getTotalPrice();
    this.isGoodSelected();
    this.setData({
      
    })
  },
  /*结算or删除*/
  settlementGoods: function() {
    let isSelected = this.data.isSelected;
    if (!isSelected)
    {
      return false;
    } else {
      let txtSettlement = this.data.txtSettlement;
      let carts = this.data.carts;
      if (txtSettlement == "结算") {


      } else if (txtSettlement == "删除") {
        for (let i = 0; i < carts.length; i++) {
          if (carts[i].selected == true) {
            carts.splice(i, 1);
            i--;
          }
        }
        this.setData({
          carts: carts
        });
        if (carts.length == 0)
        {
          this.setData({
            cartIsNull: true // 全删后购物车为空白
          });
        }
        this.getTotalPrice();
        this.isSelectAll();
        this.isGoodSelected();
      }
    }
  },
  /*编辑商品*/
  allowDelete:function() {
    let flag = this.data.showDelete;
    let text = this.data.txtEditGoods;
    let txtSettlement = this.data.txtSettlement;
    if (flag) {
      flag = false;
      text = '编辑商品';
      txtSettlement = '结算';
    } else {
      flag = true;
      text = '完成编辑';
      txtSettlement = '删除';
    }
    this.setData({
      showDelete: flag,
      txtEditGoods: text,
      txtSettlement: txtSettlement
    });
  },
  /*商品存在被选择项*/
  isGoodSelected: function(){
    let carts = this.data.carts;
    let count = 0;
    let isSelected = false;
    for (let i = 0; i < carts.length; i++)
    {
      if (carts[i].selected == true)
      {
        count++;
      }
    }
    if (count == 0)
    {
      isSelected = false;
    } else {
      isSelected = true;
    }
    this.setData({
      isSelected: isSelected
    })
  },
  /*商品选取*/
  selectList: function(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    const selected = carts[index].selected;
    carts[index].selected = !selected;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
    this.isSelectAll();
    this.isGoodSelected();
  },
  /*全选判断*/
  isSelectAll: function(e) {
    let isSelectAllItems = true;
    let carts = this.data.carts;
    if (carts.length == 0)
    {
      isSelectAllItems = false; // 若无元素，则显示为非全选
    }
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].selected != true)
       {
        isSelectAllItems = false;
        break;
       }
    }
    this.setData({
      selectAllStatus: isSelectAllItems,
    });
  },
  /*购物车全选事件*/
  selectAll: function(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice();
    this.isGoodSelected();
  },
  /*绑定加数量事件*/
  increaseCount: function(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let goodCount = carts[index].goodCount;
    goodCount++;
    if (goodCount > carts[index].goodStock) {
      wx.showToast({
        title: '数量超过范围',
        icon: 'none',
        mask: true
      })
      carts[index].goodCount = carts[index].goodStock;
    } else{
      carts[index].goodCount = goodCount;
    }
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  /*绑定减数量事件*/
  decreaseCount: function(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let goodCount = carts[index].goodCount;
    if (goodCount <= 1) {
      wx.showToast({
        title: '数量最低为1',
        icon: 'none',
        mask: true
      })
      return false;
    }
    goodCount--;
    carts[index].goodCount = goodCount;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  /*手动输入商品数量的验证*/
  validateData:function(e){
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let goodCount = e.detail.value;
    var re = /^\+?[1-9][0-9]*$/;
    if (!re.test(goodCount)) {
      wx.showToast({
        title: '购买数量有误',
        icon: 'none',
        mask: true
      })
      return carts[index].goodCount;
    }
    if (goodCount > carts[index].goodStock)
    {
      wx.showToast({
        title: '数量超过范围',
        icon: 'none',
        mask: true
      })
      return carts[index].goodStock;
    }
  },
  /*手动输入商品的后续操作*/
  updateGoodCount: function (e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let goodCount = e.detail.value;
    if (goodCount <= carts[index].goodStock) {
      carts[index].goodCount = goodCount;
    } else {
      carts[index].goodCount = goodStock;
    }
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  /*删除商品*/
  deleteList: function(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index, 1);
    this.setData({
      carts: carts
    });
    if (carts.length == 0) {
      this.setData({
        cartIsNull: true
      });
    } else {
      this.getTotalPrice();
    }
    this.isGoodSelected();
  },
  /*计算总价*/
  getTotalPrice: function() {
    let carts = this.data.carts;  
    let total = 0;
    for (let i = 0; i < carts.length; i++) {    
      if (carts[i].selected) {                    
        total += carts[i].goodCount * carts[i].discountPrice; 
      }
    }
    this.setData({                              
      totalPrice: total.toFixed(2)
    });
  }
})