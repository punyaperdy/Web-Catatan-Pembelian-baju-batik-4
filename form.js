const purchaseForm = document.getElementById('purchase-form');
const productNameInput = document.getElementById('product-name');
const quantityInput = document.getElementById('quantity');
const unitPriceInput = document.getElementById('unit-price');
const totalPriceDisplay = document.getElementById('total-price');

function calculateTotalPrice() {
    const quantity = parseFloat(quantityInput.value) || 0;
    const unitPrice = parseFloat(unitPriceInput.value) || 0;
    const totalPrice = quantity * unitPrice;
    totalPriceDisplay.textContent = totalPrice.toFixed(2);
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const productName = productNameInput.value.trim();
    const quantity = parseFloat(quantityInput.value);
    const unitPrice = parseFloat(unitPriceInput.value);

    if (!productName || isNaN(quantity) || isNaN(unitPrice) || quantity <= 0 || unitPrice <= 0) {
        alert('Please fill in all fields correctly.');
        return;
    }

    const purchaseData = {
        name: productName,
        quantity: quantity,
        unitPrice: unitPrice,
        totalPrice: quantity * unitPrice,
        date: new Date().toISOString().split('T')[0]
    };

    // Here you would typically send purchaseData to your storage or API
    console.log('Purchase Data:', purchaseData);

    purchaseForm.reset();
    calculateTotalPrice();
}

purchaseForm.addEventListener('submit', handleFormSubmit);
quantityInput.addEventListener('input', calculateTotalPrice);
unitPriceInput.addEventListener('input', calculateTotalPrice);