import { Request, Response, NextFunction } from 'express';

export function validateAccessToken(req: Request, res: Response, next: NextFunction) {
  const accessToken = req.query.access_token as string;

  if (accessToken === 'ABCDE12345') {
    next(); // Token válido, continuar
  } else {
    res.status(401).json({ error: 'Acesso negado. Token inválido.' });
  }
}