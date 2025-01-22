document.getElementById('store-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const storeName = document.getElementById('store-name').value.trim();
    const storeOwner = document.getElementById('store-owner').value.trim();
    
    if (storeName && storeOwner) {
        alert("Prodavnica je uspešno dodata!");
        // Dodajte logiku za slanje podataka na server
    } else {
        alert("Molimo popunite sva polja.");
    }
});
