"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const payment_1 = __importDefault(require("./routes/payment"));
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Permite CORS apenas para o frontend em localhost:3001
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));
// Middleware para parsing JSON
app.use(express_1.default.json());
app.get('/', (req, res) => res.send('Kirvano Backend'));
// Configurar rotas
app.use('/api/payments', payment_1.default);
// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
