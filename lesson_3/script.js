'use strict'

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsItem {
  constructor(product_name, price) {
    this.product_name = product_name;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods(cb) {
    makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      this.goods = goods;
      cb();
    })
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }

  summaryPrice(){
    let mySsum = this.goods.reduce((acc, item) => acc + item.price, 0);
    console.log(mySsum);
  }
}

// 1. Переделайте makeGETRequest() так, чтобы она использовала промисы.
function makeGETRequest(url, callback) {
  fetch(url, {
  })
  .then((response) => response.json()   )
  .then((data) => {
    //console.log(data);
    callback(data);
  })
  .catch((err) => {
    console.log(err)
  })
  /*
  let xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  }

  xhr.open('GET', url, true);
  xhr.send();
  */
}

// 2. Добавьте в соответствующие классы методы добавления товара в корзину, удаления товара из корзины и получения списка товаров корзины.

class ShopingCartItem {
  constructor(product_name, price) {
    this.product_name = product_name;
    this.price = price;
  }
  render() {
    return `<div class="cart-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
  }
}

class ShopingCart {
  constructor() {
    this.goods = [
      {id_product: 456, product_name: "Мышка", price: 1000}
    ];
  }
  addGoods(newElement){
    this.goods.push(newElement);
  }
  rmGoods(newElement){
    this.goods.splice(this.goods.indexOf(newElement), 1);
  }
  goodsList(){
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new ShopingCartItem(good.product_name, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.cart-list').innerHTML = listHtml;
  }
}
// **********************************************************************************************************************************************************************************************************************************

const list = new GoodsList();
list.fetchGoods(() => {
  list.render();
});

list.fetchGoods(() => {
  list.summaryPrice();
});

const cart = new ShopingCart();
cart.goodsList();
const myNewObj = {id_product: 123, product_name: "Ноутбук", price: 45600};
cart.addGoods(myNewObj);
cart.goodsList();
cart.rmGoods(myNewObj);
cart.goodsList();
