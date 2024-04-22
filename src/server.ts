import express from 'express';
import paymentRouter from './routes/payment';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing JSON
app.use(express.json());

// Configurar rotas
app.use('/api/payments', paymentRouter); 

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});