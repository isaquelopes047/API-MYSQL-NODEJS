const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const PORT = process.env.PORT || 3100

conexao.connect(erro => {

    if(!erro) { 
        const app = customExpress();
        console.log('Conectado com o Bando de Dados com sucesso!')
        app.listen(PORT, () => { 
            console.log(`Servidor rodando em: http://localhost:${PORT}`);
        }); 
    }
    else { console.log(erro) };

});
