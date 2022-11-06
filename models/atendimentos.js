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

    listar(res, error) {
        if(error) {return res.status(400).send({error: error})};

        const sql = 'SELECT * FROM atendimentos'
        conexao.query(sql, (erro, resultados) => {
            
        if(error) {return res.status(400).send({error: error})}

        res.status(202).send({resultados})
        })
    }

    listarPorId(id, res, error) {
        if(error) {return res.status(400).send({error: error})};

        const sql = `SELECT * FROM atendimentos WHERE id=${id};`
        conexao.query(sql, (erro, resultados) => {
            
            if(error) {return res.status(400).send({error: error})}

            res.status(202).send({resultados})
        })
    }

    apagaRegistro(id, res, error) {
        if(error) {return res.status(400).send({error: error})}

        const sql = `DELETE FROM atendimentos WHERE id=${id};`
        conexao.query(sql, (error) => {
               
            if(error) {return res.status(400).send({error: error})}

            const response = {
                mensagem: 'Registro deletado com sucesso!',
                registroApagado: {
                    request: {
                        tipo: 'POST',
                        descricao: 'Realizar novo registro',
                        url: 'http://localhost:3000/atendimentos'
                    }
                }
            }
            res.status(202).send({response})
        })
    }
}

module.exports = new Atendimento