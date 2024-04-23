"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middlewares/auth");
const paymentController_1 = require("../controllers/paymentController");
const router = express_1.default.Router();
// Middleware para validar token de acesso
router.use(auth_1.validateAccessToken);
// Rota para processar pagamentos
router.post('/', paymentController_1.processPayment);
exports.default = router;
