import express from 'express';
import paymentRouter from './routes/payment';
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Permite CORS apenas para o frontend em localhost:3001
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));


// Middleware para parsing JSON
app.use(express.json());

// Configurar rotas
app.use('/api/payments', paymentRouter); 

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});