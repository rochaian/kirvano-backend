import { Request, Response } from 'express';

// Verificação simples do cartão
function isCardValid(cardNumber: string): boolean {
  const invalidCards = ['1234 1234 1234 1234', '1111 1111 1111 1111', '2222 2222 2222 2222', '0000 0000 0000 0000'];
  return !invalidCards.includes(cardNumber);
}

// Função para verificar se um número de cartão é válido pelo algoritmo de Luhn
function luhnCheck(cardNumber: string): boolean {
    // Obter os dígitos sem espaços
  const digits = cardNumber.replace(/\s/g, "").split("").map(Number);

  // A partir do último dígito, dobrar cada segundo dígito
  const reversedDigits = digits.reverse();
  const transformedDigits = reversedDigits.map((digit, index) => {
    if (index % 2 === 1) {
      const doubled = digit * 2;
      return doubled > 9 ? doubled - 9 : doubled;
    }
    return digit;
  });

  // Somar todos os dígitos
  const sum = transformedDigits.reduce((acc, val) => acc + val, 0);

  // Verificar se a soma é divisível por 10
  return sum % 10 === 0;
  }

 // Função para validar a quantidade de dígitos em um número de cartão
function validateCardNumberLength(cardNumber: string): boolean {
    // Remover espaços ou caracteres não numéricos
    const cleanedNumber = cardNumber.replace(/\s/g, "");

    // Verificar se o número contém apenas dígitos
    const isNumeric = /^\d+$/.test(cleanedNumber);

    if (!isNumeric) {
    return false; // Se contiver caracteres não numéricos, é inválido
    }

    // Obter a quantidade de dígitos
    const digitCount = cleanedNumber.length;

    // Verificar se a quantidade de dígitos é a esperada (13, 15 ou 16, por exemplo)
    const validLengths = [13, 15, 16];
    return validLengths.includes(digitCount);
}

function padMonth(month: string): string {
    return month.length === 1 ? "0" + month : month; // Adicionar zero à esquerda se necessário
  }
  
  function validateExpirationDate(expirationDateMM: string, expirationDateYY: string): boolean {
    // Padronizar o formato do mês para dois dígitos
    const paddedMonth = padMonth(expirationDateMM);
  
    // Verificar se o mês e o ano têm o formato correto
    const monthPattern = /^\d{2}$/;
    const yearPattern = /^\d{2}$/;
  
    if (!monthPattern.test(paddedMonth) || !yearPattern.test(expirationDateYY)) {
      return false; // Se o formato do mês ou do ano for inválido
    }
  
    const month = parseInt(paddedMonth, 10);
    const year = parseInt("20" + expirationDateYY, 10); // Anos após 2000
  
    // Verificar se o mês é válido (entre 1 e 12)
    if (month < 1 || month > 12) {
      return false; // Mês inválido
    }
  
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Meses 0-indexed
    const currentYear = currentDate.getFullYear();
  
    // Verificar se a data de expiração está no futuro
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return false; // Data no passado
    }
  
    return true; // A data é válida
  }


  function validateCVC(cvc: string): boolean {
    // Verifica se o CVC contém apenas números
    const cvcPattern = /^\d+$/;
  
    // Valida a quantidade de dígitos do CVC
    if (!cvcPattern.test(cvc)) {
      return false; // Não é um número válido
    }
  
    const cvcLength = cvc.length;
  
    // O CVC deve ter 3 ou 4 dígitos
    if (cvcLength !== 3 && cvcLength !== 4) {
      return false; // Comprimento inválido
    }
  
    return true; // CVC válido
  }


export function processPayment(req: Request, res: Response) {
  const { cardNumber, expirationDateMM, expirationDateYY, cvc} = req.body;

  console.log(req.body);

  console.log('cardNumber', cardNumber);
  console.log('expirationDate', expirationDateMM+'/'+expirationDateYY)
  console.log('CVC', cvc);
  

  console.log('isCardValid', isCardValid(cardNumber));
  console.log('validadeLuhn', luhnCheck(cardNumber));
  console.log('validateCardNumberLength', validateCardNumberLength(cardNumber));
  console.log('validateExpirationDate', validateExpirationDate(expirationDateMM, expirationDateYY));
  console.log('validateCVC', validateCVC(cvc))


  // Validação do cartão
  if (
        !isCardValid(cardNumber) || 
        !luhnCheck(cardNumber) || 
        !validateCardNumberLength(cardNumber) ||
        !validateExpirationDate(expirationDateMM, expirationDateYY) ||
        !validateCVC(cvc)
    ) {
    res.status(400).json({ message: 'Pagamento recusado.' });
  } else {
    res.status(200).json({ message: 'Pagamento aceito.' });
  }
}