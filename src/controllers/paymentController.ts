import { Request, Response } from 'express';

// Verificação simples do cartão e validade
function isCardValid(cardNumber: string): boolean {
  const invalidCards = ['1234 1234 1234 1234', '1111 1111 1111 1111', '2222 2222 2222 2222'];
  return !invalidCards.includes(cardNumber);
}

export function processPayment(req: Request, res: Response) {
  const { cardNumber, expirationDate } = req.body;

  // Validação básica do cartão
  if (!isCardValid(cardNumber)) {
    res.status(400).json({ error: 'Pagamento recusado.' });
  } else {
    res.status(200).json({ message: 'Pagamento aceito.' });
  }
}