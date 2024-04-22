import express from 'express';
import { validateAccessToken } from '../middlewares/auth';
import { processPayment } from '../controllers/paymentController';

const router = express.Router();

// Middleware para validar token de acesso
router.use(validateAccessToken);

// Rota para processar pagamentos
router.post('/', processPayment);

export default router;