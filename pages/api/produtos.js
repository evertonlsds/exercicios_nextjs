



export default function handler(req, res){
    res.status(200).json([
        {id: 1, nome: 'Caneta', preco: 5.60},
        {id: 1, nome: 'Caderno', preco: 20.60},
        {id: 1, nome: 'Grafite', preco: 7.60},
        {id: 1, nome: 'Borracha', preco: 4.40},
    ])
}