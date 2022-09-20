import ferch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
    const response = fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFn = async (urlApi) =>{
    try{//todo el codigo que queremos
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    }catch(error){//aqui el codigo a mostrar en error
        console.log(error);
    }
}