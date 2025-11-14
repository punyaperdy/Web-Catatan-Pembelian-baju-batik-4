const STORAGE_KEY = 'purchases';

export function savePurchases(purchases) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(purchases));
}

export function getPurchases() {
    const purchases = localStorage.getItem(STORAGE_KEY);
    return purchases ? JSON.parse(purchases) : [];
}

export function clearPurchases() {
    localStorage.removeItem(STORAGE_KEY);
}