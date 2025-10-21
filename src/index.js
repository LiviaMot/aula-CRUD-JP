import express from 'express'
import router from './router/users.js';

const app = express();
app.use(express.json())

// rotas
app.use('/api/v1', router)

// porta
const port = 3000 // ou 3001 ou 9090 ou 9091 ou 9000
app.listen(port, () => {
  console.info("Servidor rodando na porta " + port)
})