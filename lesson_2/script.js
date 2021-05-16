'use strict'

class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><div class="img-item"></div><h3>${this.title}</h3><button class="btn-price" data-price=${this.price}>Добавить</button></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  }
  // **********************************************************************************************************************************************************************************************************************************
  // 2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
  summaryPrice(){
    let mySum = 0.00;
    this.goods.map(item => mySum += item.price);
    return mySum;
  }
  // **********************************************************************************************************************************************************************************************************************************

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
}

// **********************************************************************************************************************************************************************************************************************************


// 1. Добавьте пустые классы для корзины товаров и элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.
class ShopingCartItem {
  constructor(title, price, cnt = 1) {
    this.title = title;
    this.price = price;
    this.cnt = cnt;
  }
  render() {
    return `<div class="shoping-cart-item">
              <div class="name-cart-item">${this.title}</div>
              <div class="price-cart-item">${this.price}</div>
              <button class="btn-price-plus" data-price=${this.title}>+</button>
              <div class="cnt-cart-item">${cnt.price}</div>
              <button class="btn-price-minus" data-price=${this.title}>+</button>
            </div>`
  }
}

class ShopingCart {
  constructor(goods = []){
    this.goods = [];
  }

  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150, cnt: 1},
      { title: 'Socks', price: 50, cnt: 2},
      { title: 'Jacket', price: 350, cnt: 4},
      { title: 'Shoes', price: 250, cnt: 1},
    ];
  }

  addItem(item){
    this.goods.push(item);
  }
  rmvItem(item){
    const itemInsex = this.goods.indexOf(item);
    this.goods.splice(itemInsex, 1);
  }
  plusCntItem(item){
    item.cnt += 1;
  }
  minusCntItem(item){
    item.cnt -= 1;
    if (item.cnt <= 0 ) {
      rmvItem(item);
    }
  }

  showShopingCart(){
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new ShopingCartItem(good.title, good.price, good.cnt);
      listHtml += goodItem.render();
    });
    document.querySelector('.shoping-cart-list').innerHTML = listHtml;
  }

  summaryPrice(){
    let mySum = 0.00;
    this.goods.map(item => mySum += item.price * item.cnt);
    return mySum;
  }
}
// **********************************************************************************************************************************************************************************************************************************

const list = new GoodsList();
list.fetchGoods();
list.render();
console.log(list.summaryPrice());
