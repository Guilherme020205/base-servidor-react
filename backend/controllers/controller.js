let banco = [

    { id: 1, titulo: "Dados1" },
    { id: 2, titulo: "Dados2" },
    { id: 3, titulo: "Dados3" }

]

exports.mostraAlgo = (req, res) => {

    res.status(200).send(banco)

}