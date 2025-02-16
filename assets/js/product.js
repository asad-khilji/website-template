let product = null;

// This function will load the product details based on the productId from the URL
function loadProductData() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId'); // Get the productId from the URL

    // Fetch the product data from JSON
    fetch('./assets/data/product.json')
        .then(response => response.json())
        .then(data => {
            // Find the product by id
            product = data.find(item => item.id === parseInt(productId));

            if (product) {
                displayProductDetails(product);
            } else {
                console.error('Product not found');
            }
        })
        .catch(error => {
            console.error('Error loading product data:', error);
        });
}

// This function will display the product details on the page
function displayProductDetails(product) {
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-name').innerText = product.name;
    document.getElementById('product-price').innerText = product.price;
    document.getElementById('product-description').innerText = product.description;
    document.getElementById('product-description-1').innerText = product.description;
    document.getElementById('product-description-2').innerText = product.description;
    document.getElementById('product-description-3').innerText = product.description;
    document.getElementById('product-description-4').innerText = product.description;
    document.getElementById('product-description-5').innerText = product.description;
}

// Call the loadProductData when the page is loaded
document.addEventListener('DOMContentLoaded', loadProductData);
