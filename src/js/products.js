class Product {
    name;
    description;
    price;
    image;
    constructor(name, description, price, image) {
        this.name = name
        this.description = description
        this.price = price
        this.image = image
    }
    // (Método) transformar o valor para dólar, parâmetro é o que está dentro dos parênteses, são variáveis que só a função lê
    usdPrice(cotacaoAtual){
        // parseFloat utilizado para ter as casas decimais
        return parseFloat(`${this.price / cotacaoAtual}`).toFixed(2)
        
        // arredondado e sem as casas decimais ficaria:
        // return Math.round (this.price/cotacaoAtual)

    }
}

//Aqui os produtos são organizados em um Array
const products = [
    new Product("Celular", "Celular apple iphone", 1200.00, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000"),
    new Product("Carro", "Celular apple iphone", 1200.00, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000"),
    new Product("Moto", "Celular apple iphone", 1200.00, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000"),
    new Product("Mochila", "Celular apple iphone", 1200.00, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000"),
    new Product("PC", "Celular apple iphone", 1200.00, "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000"),
]

const dolar = fetch("https://economia.awesomeapi.com.br/json/last/USD").then((response)=>response.json()).then((resultado)=>{
    const valorAtual = resultado.USDBRL.ask
    console.log (products[3].usdPrice(valorAtual))
})

// para acessar as infos dos produtos
products[3].name

//sem o JQuerry seria document.querySelector("#produtos")

$(document).ready(()=>{
    products.forEach((product)=>{
        console.log (product.name)
        $("#produtos").append(`
        <li>  
        <p>${product.name}</p>
        <p>${product.description}</p>
        <p>${product.price}</p>
        <img src="${product.image}" id="img-produto"/>
        </li>`)
    })
})

