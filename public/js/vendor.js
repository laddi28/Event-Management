document.getElementById("selectVendorForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const selectedVendor = document.getElementById("vendor").value;
    
    fetch('/user/select-vendor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ vendor: selectedVendor })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Vendor selected successfully!");
        } else {
            alert("Error selecting vendor: " + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('add-item-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('item-name').value;
    const description = document.getElementById('item-description').value;
    const price = document.getElementById('item-price').value;
    const quantity = document.getElementById('item-quantity').value;

    fetch('/vendor/add-item', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description, price, quantity })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Item added successfully!');
        } else {
            alert('Failed to add item.');
        }
    });
});

function loadProducts() {
    fetch('/vendor/view-products')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('product-list');
            productList.innerHTML = '';
            if (data.success) {
                data.products.forEach(product => {
                    const li = document.createElement('li');
                    li.textContent = `${product.name} - $${product.price} - ${product.quantity} in stock`;
                    productList.appendChild(li);
                });
            } else {
                alert('Failed to load products.');
            }
        });
}
