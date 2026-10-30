// Интерактив страницы товара магазина «Кружкин дом»
const PRICE_PER_ITEM = 590;

document.addEventListener('DOMContentLoaded', () => {

  // 1. Смена главного фото по клику на миниатюру
  const mainPhoto = document.getElementById('main-photo');
  const thumbs = document.querySelectorAll('.thumb');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      mainPhoto.src = thumb.src;
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
  thumbs[0].classList.add('active');

  // 2. Пересчёт цены при изменении количества
  const qtyInput = document.getElementById('qty');
  const priceSpan = document.getElementById('price');

  const updatePrice = () => {
    let qty = parseInt(qtyInput.value, 10);
    if (isNaN(qty) || qty < 1) qty = 1;
    priceSpan.textContent = PRICE_PER_ITEM * qty;
  };
  qtyInput.addEventListener('input', updatePrice);

  // 3. Обработка формы: проверка и счётчик корзины
  const form = document.getElementById('order-form');
  let cartCount = 0;

  form.addEventListener('submit', event => {
    event.preventDefault();
    const qty = parseInt(qtyInput.value, 10);
    if (isNaN(qty) || qty < 1) {
      alert('Укажите корректное количество: не меньше 1.');
      return;
    }
    cartCount += qty;
    const color = document.getElementById('color').value;
    alert('В корзину добавлено: ' + qty + ' шт. (' + color + '). Всего товаров в корзине: ' + cartCount);
    form.reset();
    qtyInput.value = 1;
    updatePrice();
  });
});
