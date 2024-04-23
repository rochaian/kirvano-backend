# Kirvano Checkout - FrontEnd

## Node.js TypeScript API Project - Payments Endpoint

Bem-vindo ao repositório da API Node.js escrita em TypeScript! Esta API tem um endpoint para processamento de pagamentos, onde os clientes podem enviar dados do cartão de crédito para validação. O endpoint aceita requisições POST na rota `/api/payments/`, mas para autenticar a chamada é necessário incluir um parâmetro de acesso na URL: `?access_token=ABCDE12345`.

## Exemplo de Dados para a Requisição POST

Para testar a rota, você pode enviar um JSON com o seguinte formato:

```json
{
    "cardNumber": "4111 1111 1111 1111",
    "expirationDateMM": "03",
    "expirationDateYY": "30",
    "cvc": "122"
}
```

## Cartões Que Passam no Teste de Luhn

Para testes, você pode usar cartões de crédito fictícios que passam no algoritmo de Luhn. Aqui estão alguns exemplos:

- **Visa:** 4111 1111 1111 1111
- **MasterCard:** 5500 0000 0000 0004
- **Amex:** 3782 8224 6310 005

Esses exemplos podem ser utilizados para simular pagamentos bem-sucedidos.

## Instruções de Instalação e Execução

Para configurar e executar o projeto:

1. **Clone o repositório:**
   ```bash
   git clone <url_do_repositorio>
   ```

2. **Navegue para a pasta do projeto:**
   ```bash
   cd <nome_do_projeto>
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Compile o projeto TypeScript:**
   ```bash
   npm run build
   ```

5. **Inicie o servidor:**
   ```bash
   npm start
   ```
   
## Licença

Este projeto está licenciado sob a licença MIT. Confira o arquivo LICENSE para mais detalhes.