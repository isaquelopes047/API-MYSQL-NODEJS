const customExpress = require('./config/customExpress');
/* const Tabelas = require('./infraestrutura/tabelaAtendimento') */
const PORT = process.env.PORT || 3200
const app = customExpress();

/*  Tabelas.init(conexao) */
app.listen(PORT || process.env.PORT, (error) => { 
    if(!error){
        console.log(`Servidor rodando em: http://localhost:${PORT}`);
    } else {
        console.log(`Erro ao iniciar`);
    }
}); 
    



