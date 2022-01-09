function numeroAleatorio(min = 1, max = 100000){
    return parseInt(Math.random() * (max - min)) + min
}



export default function handler(req, res){
    res.status(200).json([
        {id: numeroAleatorio(), nome: 'Caneta', preco: 5.60},
        {id: numeroAleatorio(), nome: 'Caderno', preco: 20.60},
        {id: numeroAleatorio(), nome: 'Grafite', preco: 7.60},
        {id: numeroAleatorio(), nome: 'Borracha', preco: 4.40},
    ])
}