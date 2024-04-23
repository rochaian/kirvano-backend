"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAccessToken = void 0;
function validateAccessToken(req, res, next) {
    const accessToken = req.query.access_token;
    if (accessToken === 'ABCDE12345') {
        next(); // Token válido, continuar
    }
    else {
        res.status(401).json({ error: 'Acesso negado. Token inválido.' });
    }
}
exports.validateAccessToken = validateAccessToken;
