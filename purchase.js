// purchase.js

const purchaseList = [];
const purchaseHistoryElement = document.getElementById('purchase-history');
const totalPriceElement = document.getElementById('total-price');

function addPurchase(name, quantity, unitPrice) {
    const totalPrice = quantity * unitPrice;
    const purchase = {
        name,
        quantity,
        unitPrice,
        totalPrice,
        date: new Date().toLocaleDateString(),
    };
    purchaseList.push(purchase);
    updatePurchaseList();
    calculateTotalPrice();
}

function updatePurchaseList() {
    purchaseHistoryElement.innerHTML = '';
    purchaseList.forEach((purchase, index) => {
        const purchaseItem = document.createElement('div');
        purchaseItem.innerHTML = `
            <p>${purchase.date} - ${purchase.name} - ${purchase.quantity} x ${purchase.unitPrice} = ${purchase.totalPrice}</p>
            <button onclick="deletePurchase(${index})">Delete</button>
            <button onclick="editPurchase(${index})">Edit</button>
        `;
        purchaseHistoryElement.appendChild(purchaseItem);
    });
}

function calculateTotalPrice() {
    const total = purchaseList.reduce((sum, purchase) => sum + purchase.totalPrice, 0);
    totalPriceElement.innerText = `Total Price: ${total}`;
}

function deletePurchase(index) {
    purchaseList.splice(index, 1);
    updatePurchaseList();
    calculateTotalPrice();
}

function editPurchase(index) {
    const purchase = purchaseList[index];
    // Logic to edit the purchase (e.g., show a form with current values)
    // This can be implemented in a separate function or component
}

// Export functions if needed for other modules
export { addPurchase, deletePurchase, editPurchase };