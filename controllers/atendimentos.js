const Atendimento = require('../models/atendimentos');

module.exports = app => {

    app.get('/atendimentos', (req, res)=> {
        Atendimento.listar(res);
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Atendimento.listarPorId(id, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Atendimento.apagaRegistro(id, res)
    })

    app.post('/atendimentos', async (req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento, res);
    })

}
