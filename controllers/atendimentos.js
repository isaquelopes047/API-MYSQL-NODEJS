const Atendimento = require('../models/atendimentos');

module.exports = app => {

    app.get('/atendimentos', (req, res)=> {
        Atendimento.listar(res);
    })

    app.post('/atendimentos', async (req, res) => {

        const atendimento = req.body
        Atendimento.adiciona(atendimento, res);

    })
}
