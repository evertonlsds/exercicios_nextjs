export default function handler(req, res){
    const id = +req.query.id
    res.status(200).json({ 
        id,
        nome: 'Daniel Lauria',
        email: " dan@hotmail.com"
    })
}