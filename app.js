// Main JavaScript entry point for the clothing purchase application

import { initializeForm } from './form.js';
import { loadPurchases } from './purchase.js';
import { setupStorage } from './storage.js';

// Initialize the application
function initApp() {
    setupStorage();
    initializeForm();
    loadPurchases();
}

// Run the application
document.addEventListener('DOMContentLoaded', initApp);