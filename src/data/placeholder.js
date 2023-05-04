const url = 'https://ajutprojekt-default-rtdb.europe-west1.firebasedatabase.app/products.json';

const productsArray = [];

const product1 = {
    imgSrc: 'https://media.istockphoto.com/id/184276818/sv/foto/red-apple.jpg?s=612x612&w=0&k=20&c=5LnsyKsBVTluIpYFltA5H1NuXfPWoHXJ5y2DsOvzu2U=',
    name: 'Apple',
    price: 7,
    stock: 15
}

const product2 = {
    imgSrc: 'https://thumbs.dreamstime.com/b/orange-13642243.jpg',
    name: 'Orange',
    price: 9,
    stock: 10
}

const product3 = {
    imgSrc: 'https://cdnprod.mafretailproxy.com/sys-master-root/h25/hf6/14596474863646/243913_main.jpg_480Wx480H',
    name: 'Chocolate',
    price: 8,
    stock: 30
}

const product4 = {
    imgSrc: 'https://media.delitea.se/product-images/XL/pringles-sour-cream-och-onion-200-g-2.jpg',
    name: 'Pringles',
    price: 33,
    stock: 5
}

const product5 = {
    imgSrc: 'https://www.dittsvenskaskafferi.se/media/catalog/product/cache/59c5f66e6349f5df641b51635acb14e0/image/6965ebf7/fun-light-cactus-apple-1-liter.jpg.mst.webp',
    name: 'Fun Light',
    price: 29,
    stock: 3
}

productsArray.push(product1, product2, product3, product4, product5);


async function putFirebase() {

    const options = {
        method: 'PUT',
        body: JSON.stringify(productsArray),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    await fetch(url, options);
}