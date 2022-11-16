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
    new Product("AIR JORDAN 1 MID", "Tênis Nike Air Jordan 1", 599.00, "https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"),
    new Product("DUNK HI RETRO BTTYS", "Tênis Nike Dunk Hi Retro", 499.00, "https://img01.ztat.net/article/spp-media-p1/fbed345aba8545ff9237705afce95a69/872e823b138149b1a1def5b4ee417e48.jpg?imwidth=762"),
    new Product("AIR FORCE 1 '07", "Tênis Nike Air Force 1", 620.00, "https://img01.ztat.net/article/spp-media-p1/3e67cc42c6c1426f921700706f884995/2064d93dbf0842629a156d0348ec26d7.jpg?imwidth=1800&filter=packshot"),
    new Product("AIR MONARCH IV", "Tênis Nike Air Monarch IV", 670.00, "https://img01.ztat.net/article/spp-media-p1/b50c46b0816e3d8ea13376885d02f10c/6063eb3821a14015960838faec17a22d.jpg?imwidth=1800&filter=packshot"),
    new Product("DUNK HI RETRO", "Tênis Nike Dunk Hi Retro", 525.00, "https://img01.ztat.net/article/spp-media-p1/ef2a5388edc148be8a46c3f914c8b4e0/1209b729da6a46c8b1aa287bb8b7db58.jpg?imwidth=762"),
    new Product("AIR JORDAN 1 MID", "Tênis Nike Air Jordan 1", 599.00, "https://img01.ztat.net/article/spp-media-p1/cfc43f5b35ca43e69e35bc6c89586550/86daded655134c0ba55d7cdcc2535bf2.jpg?imwidth=1800&filter=packshot"),
    new Product("DUNK HI RETRO BTTYS", "Tênis Nike Dunk Hi Retro", 499.00, "https://img01.ztat.net/article/spp-media-p1/fbed345aba8545ff9237705afce95a69/872e823b138149b1a1def5b4ee417e48.jpg?imwidth=762"),
    new Product("AIR FORCE 1 '07", "Tênis Nike Air Force 1", 620.00, "https://img01.ztat.net/article/spp-media-p1/3e67cc42c6c1426f921700706f884995/2064d93dbf0842629a156d0348ec26d7.jpg?imwidth=1800&filter=packshot"),
    new Product("AIR MONARCH IV", "Tênis Nike Air Monarch IV", 670.00, "https://img01.ztat.net/article/spp-media-p1/b50c46b0816e3d8ea13376885d02f10c/6063eb3821a14015960838faec17a22d.jpg?imwidth=1800&filter=packshot"),
    new Product("DUNK HI RETRO", "Tênis Nike Dunk Hi Retro", 525.00, "https://img01.ztat.net/article/spp-media-p1/ef2a5388edc148be8a46c3f914c8b4e0/1209b729da6a46c8b1aa287bb8b7db58.jpg?imwidth=762"),
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
        <img src="${product.image}" id="img-produto"/>
        <p id="product-name">${product.name}</p>
        <p id="product-descr">${product.description}</p>
        <p id="product-price">R$ ${product.price}</p>
        <button class="btn btn-dark" type="button">Button</button>
        </li>`)
    })
})

