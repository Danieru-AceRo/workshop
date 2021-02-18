/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app/";
const appNode = document.querySelector('#app');
const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "MXN",
    }).format(price);
    return newPrice;
}

window.fetch(`${baseUrl}api/avo`)

.then((respuesta) => respuesta.json())

.then((responseJson) => {
    const allItems = [];
    responseJson.data.forEach((item) => {
        const image = document.createElement("img");
        image.src = `${baseUrl}${item.image}`
        image.className = 'mx-auto';

        const title = document.createElement("h2");
        title.textContent = item.name;
        title.className = 'text-4xl text-green-800 mb-6';

        const priceContainer = document.createElement('div')
        priceContainer.className = 'text-2xl mb-4'
        const priceBold = document.createElement('span')
        priceBold.className = 'font-bold'
        const price = document.createElement('p'); 
        price.textContent = formatPrice(item.price);

        const titleDescription = document.createElement("h3");
        titleDescription.textContent = 'Description:';
        titleDescription.className = 'text-3xl text-green-400 ';


        const description = document.createElement('p'); 
        description.className = 'text-justify';
        description.textContent = item.attributes.description;
        
        const container = document.createElement ('div')
        container.className = 'justify-self-center px-14 shadow-xl mt-20 mx-4 ';
        container.append(image, title, priceContainer, titleDescription, description);

        priceContainer.append(price)
        price.insertAdjacentElement('afterbegin', priceBold)
        priceBold.textContent = 'Price: '
        

        allItems.push(container)
    });
    
    appNode.append(...allItems)
    appNode.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '
})