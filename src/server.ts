import paymentRouter from './routes/payment';
import express from 'express'
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Permite CORS apenas para o frontend em localhost:3001
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors());


// Middleware para parsing JSON
app.use(express.json());

app.get('/', (req, res) => res.send('Kirvano Backend'));


// Configurar rotas
app.use('/api/payments', paymentRouter); 

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});