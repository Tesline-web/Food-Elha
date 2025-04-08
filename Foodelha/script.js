document.addEventListener('DOMContentLoaded', function() {
    const orderBtn = document.getElementById('orderBtn');
    const orderPopup = document.getElementById('orderPopup');
    const closeBtn = document.querySelector('.close');
    const orderForm = document.getElementById('orderForm');

    orderBtn.addEventListener('click', function() {
        orderPopup.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        orderPopup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == orderPopup) {
            orderPopup.style.display = 'none';
        }
    });

    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = {
            menu: document.getElementById('menu').value,
            quantity: document.getElementById('quantity').value,
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value
        };
        
        const prices = {
            'tajine': 14.99,
            'couscous': 19.45,
            'harira': 10.45,
            'pastilla': 16.45
        };
        
        const total = prices[formData.menu] * formData.quantity;
        
        console.log('Order details:', formData);
        console.log('Total price:', total.toFixed(2) + '€');
        
        orderForm.reset();
        orderPopup.style.display = 'none';
        
        alert(`Commande confirmée!\n\nDétails de la commande:\n${document.querySelector(`option[value="${formData.menu}"]`).textContent}\nQuantité: ${formData.quantity}\nTotal: ${total.toFixed(2)}€\n\nVotre commande sera livrée à l'adresse indiquée.`);
    });
});
