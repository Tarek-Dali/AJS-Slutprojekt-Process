const url = 'https://ajutprojekt-default-rtdb.europe-west1.firebasedatabase.app/products.json';
const response = await fetch(url);
const data = await response.json();