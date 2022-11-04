const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento, res) {

        const nomeValido = atendimento.nomeFuncionario.length >= 5

        const validacoes = [
            {
                nome: 'Nome',
                valido: nomeValido,
                mensagem: 'Nome deve possuir mais que 5 caracteres'
            },
        ]

        const erros = validacoes.filter(campo => !campo.valido);
        const existemErros = erros.length

        if (existemErros) {
            res.status(400).json(erros)
        } else {

            const sql = 'INSERT INTO Atendimentos SET ?'
            conexao.query(sql, atendimento, (erro, resultados) => {
                if (erro) {
                    res.status(400).json(erro)
                }
                else {
                    res.status(201).json(resultados)
                }
            })
        }
    }

    listar(res) {
        const sql = 'SELECT * FROM atendimentos'
        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
}

module.exports = new Atendimento