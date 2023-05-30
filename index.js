const productContainer = document.querySelector('.product-container');
const productItems = productContainer.querySelectorAll('.product-item');
productItems.forEach(item => {
    const productName = item.querySelector('h3').textContent;
    const productRating = item.querySelector('.product-rating').textContent;
    const productReviews = productRating.match(/\d+/)[0];
    const productPrice = item.querySelector('.product-price').textContent;
    const addToCartButton = item.querySelector('.add-to-cart-btn');
    
    console.log(productName, productRating, productReviews, productPrice, addToCartButton);
  });
  const products = document.querySelectorAll('.product-item');

products.forEach(product => {
  const name = product.querySelector('h3').textContent;
  const rating = product.querySelector('.product-rating span').textContent;
  const price = product.querySelector('.product-price').textContent;
  const image = product.querySelector('img').getAttribute('src');

  console.log(name, rating, price, image);
});