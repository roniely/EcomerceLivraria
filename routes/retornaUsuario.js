
const usu = {
    nome:"Vera",
    idade:21
}

function retornaUsuario(req,res){
    res.send(usu)
}

module.exports = retornaUsuario