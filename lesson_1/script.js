const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
];

// 2. Добавьте значения по умолчанию для аргументов функции.
// Как можно упростить или сократить запись функций? - удалить return
const renderGoodsItem = (title='', price=0) => `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;

/*3. *Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит?
map - возвращает массив разделённый запятыми.
Когда идёт подстановка innerHTML - вставляются даже запятые.
*/
// Как это исправить?
// Один из вариантов пропустить массив через .join(''), чтобы убрать разделители и преобразовать массив в строку.
const renderGoodsList = (list) => {
  let goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join('');
  document.querySelector('.goods-list').innerHTML = goodsList;
  //console.log(goodsList);
}

renderGoodsList(goods);
