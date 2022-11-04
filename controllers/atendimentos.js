const cadastrarAtendimento = require('../models/atendimentos');

module.exports = app => {

    app.get('/atendimentos', (req, res) => {
        res.send('Tudo Ok')
    })

    app.post('/atendimentos', async (req, res) => {

        const atendimento = req.body
        cadastrarAtendimento.adiciona(atendimento, res)

    })
}
