const itemsPerPage = 16;
let currentPage = 1;
let products = [];
let filteredProducts = [];

// This function will fetch data from the JSON file and update the DOM
function loadData() {
    fetch('./assets/data/product.json')  // Fetch data from JSON
        .then(response => response.json())
        .then(data => {
            products = data; // Store all the products

            // Get the category from the URL query string
            const urlParams = new URLSearchParams(window.location.search);
            const category = urlParams.get('category');  // Get the 'category' query parameter

            if (category) {
                // Filter products by the category if provided in the URL
                filteredProducts = products.filter(item => item.category === category);
            } else {
                // If no category is specified, show all products
                filteredProducts = products;
            }

            displayProducts(); // Display the products for the first page
            setupPagination(); // Set up pagination buttons
        })
        .catch(error => {
            console.error('Error loading data:', error);
        });
}

// This function will display products based on the current page
function displayProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clear existing products

    // Calculate the start and end indices for the items on the current page
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    
    // Slice the filtered products array to get only the items for the current page
    const currentItems = filteredProducts.slice(start, end);

    // Loop through each item and display it
    currentItems.forEach(item => {
        const productElement = document.createElement('div');
        productElement.classList.add('col-4');
        
        // Create a link with a query parameter for the product ID
        const productLink = document.createElement('a');
        productLink.href = `product.html?productId=${item.id}`;  // Pass productId in the URL
        productLink.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <h3>${item.price}</h3>
        `;
        
        productElement.appendChild(productLink);
        productContainer.appendChild(productElement);
    });
}


// This function will set up the pagination controls
function setupPagination() {
    const paginationContainer = document.getElementById('pagination-container');
    paginationContainer.innerHTML = ''; // Clear existing pagination links

    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    // Create "Previous" button
    if (currentPage > 1) {
        const prevButton = document.createElement('button');
        prevButton.innerText = 'Previous';
        prevButton.addEventListener('click', () => {
            currentPage--;
            displayProducts();
            setupPagination();
        });
        paginationContainer.appendChild(prevButton);
    }

    // Create page number buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        if (i === currentPage) {
            pageButton.disabled = true; // Disable the current page button
        }
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayProducts();
            setupPagination();
        });
        paginationContainer.appendChild(pageButton);
    }

    // Create "Next" button
    if (currentPage < totalPages) {
        const nextButton = document.createElement('button');
        nextButton.innerText = 'Next';
        nextButton.addEventListener('click', () => {
            currentPage++;
            displayProducts();
            setupPagination();
        });
        paginationContainer.appendChild(nextButton);
    }
}

// Call loadData when the page is loaded
document.addEventListener('DOMContentLoaded', loadData);
