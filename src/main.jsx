import { createRoot } from 'react-dom/client';
import App from './components/App';

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
async function get() {
    const url = 'https://ajutprojekt-default-rtdb.europe-west1.firebasedatabase.app/products.json';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

get();