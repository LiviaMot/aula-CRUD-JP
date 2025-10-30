import express from 'express'
import router from './router/users.js';
import database from '../config/database.js';

const app = express();
app.use(express.json())

// rotas
app.use('/api/v1', router)

// porta
const port = 3000 // ou 3001 ou 9090 ou 9091 ou 9000

database.db
  .sync({ force: false })
  .then((_) => {
    app.listen(port, () => {
      console.info("Servidor rodando na porta " + port)
    })
  }) // deu certo
  .catch((e) => {
    console.log("Não foi possível conectar com o banco!" + e)
  }) // deu errado