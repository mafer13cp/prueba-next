export default function productos(req,res){
    // Consulta de información
    return res.status(200).json([
        {id:1,nombre:"Producto 1",descripcion:"Mi primer producto"},
        {id:2,nombre:"Producto 2",descripcion:"Mi segundo producto"},
    ])
}