// Дано 3 блоки

// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).

const categories = document.querySelectorAll('.categories');

categories.forEach(category => {
  const products = category.querySelectorAll('.products');
  
  products.forEach(product => {
    product.style.display = 'none';
  });
  category.addEventListener('click', function() {
    
    products.forEach(product => {
      if (product.style.display === 'none') {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
      
    });
    
  });
  
});

const products = document.querySelector('.products');
const productItems = products.querySelectorAll('.product');

productItems.forEach((item) => {
  item.addEventListener('click', () => {
    
    console.log('click')
      
    })
});
