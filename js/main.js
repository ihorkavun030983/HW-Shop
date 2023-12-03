const categories = document.querySelectorAll('.categories');

categories.forEach(category => {
  const products = category.querySelectorAll('.products');

  products.forEach(product => {
    hideElement(product);

    const productItems = product.querySelectorAll('.product');

    productItems.forEach((item) => {
      const descriptionEl = item.querySelector('.description');
      hideElement(descriptionEl);

      descriptionEl.addEventListener('click', (event) => event.stopPropagation());

      item.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleVisibility(descriptionEl);
      })

      addProductItemPurchaseClickListener(item);
    });
  });

  category.addEventListener('click', () =>
  products.forEach(toggleVisibility));
});

function toggleVisibility(element){
  if (element.style.display === 'none'){
    element.style.setProperty('display', 'block');

  } else {
    element.style.setProperty('display', 'none');
  }
}

function hideElement(element) {
  if (element.style.display !== 'none'){
    toggleVisibility(element);
  }
}

function addProductItemPurchaseClickListener(productItem){
  const buttonEl = productItem.querySelector('button');
  
  buttonEl.addEventListener('click', (event) => {
    alert('Товар придбано!');
  
    event.shopPropagation();
    
    document.querySelectorAll('.description').forEach(hideElement);
    document.querySelectorAll('.products').forEach(hideElement);
  })
}