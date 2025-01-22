// Primer logike koja bi mogla da postavi tip korisnika, npr. nakon prijave
function setUserRole(role) {
    const adminMessage = document.getElementById('admin-message');
    const storeMessage = document.getElementById('store-message');
    const customerMessage = document.getElementById('customer-message');
    
    // Prikazivanje odgovarajuće poruke i opcija za korisnika
    if (role === 'admin') {
        adminMessage.style.display = 'block';
        document.getElementById('user-nav').innerHTML = `
            <a href="index.html">Početna</a>
            <a href="admin-dashboard.html">Admin Dashboard</a>
            <a href="logout.html">Odjava</a>
        `;
    } else if (role === 'store') {
        storeMessage.style.display = 'block';
        document.getElementById('user-nav').innerHTML = `
            <a href="index.html">Početna</a>
            <a href="add-product.html">Dodaj Proizvod</a>
            <a href="logout.html">Odjava</a>
        `;
    } else if (role === 'customer') {
        customerMessage.style.display = 'block';
        document.getElementById('user-nav').innerHTML = `
            <a href="index.html">Početna</a>
            <a href="cart.html">Korpa</a>
            <a href="orders.html">Istorija porudžbina</a>
            <a href="logout.html">Odjava</a>
        `;
    }
}

// Funkcija koja postavlja ulogu korisnika i menja navigaciju
function setUserRole(role) {
    const adminMessage = document.getElementById('admin-message');
    const storeMessage = document.getElementById('store-message');
    const customerMessage = document.getElementById('customer-message');
    
    // Prikazivanje odgovarajuće poruke i opcija za korisnika
    if (role === 'admin') {
        adminMessage.style.display = 'block';
        document.getElementById('user-nav').innerHTML = `
            <a href="index.html">Početna</a>
            <a href="admin-dashboard.html">Admin Dashboard</a>
            <a href="logout.html">Odjava</a>
        `;
    } else if (role === 'store') {
        storeMessage.style.display = 'block';
        document.getElementById('user-nav').innerHTML = `
            <a href="index.html">Početna</a>
            <a href="add-product.html">Dodaj Proizvod</a>
            <a href="logout.html">Odjava</a>
        `;
    } else if (role === 'customer') {
        customerMessage.style.display = 'block';
        document.getElementById('user-nav').innerHTML = `
            <a href="index.html">Početna</a>
            <a href="products.html">Proizvodi</a>
            <a href="cart.html">Korpa</a>
            <a href="orders.html">Istorija porudžbina</a>
            <a href="logout.html">Odjava</a>
        `;
    }
}

// Primer, setovanje uloge korisnika na 'store'
setUserRole('store');


// Na primer, kad god korisnik uđe na sajt, automatski se poziva setUserRole funkcija
// Ovde ćemo simulirati da je korisnik ulogovan kao prodavnica
setUserRole('store');
