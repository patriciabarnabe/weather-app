# Weather Web App <img src="./public/favicon.ico" alt="Ícone do Aplicativo" width="30" style="margin-bottom: -5px;">

Este é um aplicativo meteorológico simples criado com React e TypeScript. O objetivo é buscar e exibir informações meteorológicas atuais de uma cidade específica usando uma API meteorológica pública.

## API Integration Challenge

### Requisitos

1. Usar React como framework principal.
2. Integrar com uma API meteorológica pública (Weatherstack, OpenWeatherMap, ou qualquer uma de sua escolha).
3. Exibir as seguintes informações:
   - Temperatura atual
   - Descrição do tempo
   - Umidade
   - Velocidade do vento
4. Implementar uma interface amigável, simples e objetiva.
5. Configurar a ferramenta para identificar a cidade que você está e carregar os dados de temperatura para a cidade. Em caso do usuário negar o uso da identificação de sua localidade, informe um alerta sobre a necessidade de habilitar essa funcionalidade.
6. Fazer tratativas de erro com mensagens amigáveis - não se preocupe com as tentativas.
7. Adicionar indicadores de carregamento ou mensagens para aprimorar a experiência do usuário durante a busca de dados.

### Bônus Realizados

1. Faça a implantação em algum domínio público gratuito.
2. Incluir pesquisa que permite aos usuários inserir o nome de uma cidade e recuperar informações meteorológicas dessa cidade.
3. Implementar um recurso para alternar entre Celsius e Fahrenheit.

### Critério de Avaliação

- Estrutura e organização do código.
- Uso adequado da estrutura React.
- Tratamento de operações assíncronas (solicitações de API).
- Interface do usuário e experiência do usuário.
- Tratamento de erros e casos extremos.
- Credibilidade bônus para recursos adicionais.

## Instruções para Executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/weather-app.git
   cd weather-app
   ```

2. Instale as dependências:

   ```bash
   npm install

   ```

3. Execute o aplicativo:

   ```bash
   npm start

   ```

4. Abra http://localhost:3000 no seu navegador.

## Implantação

O aplicativo está implantado em: [Weather App](https://weather-app-roan-omega-68.vercel.app/)

## Notas de Implementação

- Utilizamos a API OpenWeatherMap para buscar dados meteorológicos.
- Utilizamos a geolocalização do navegador para buscar a localização do usuário.
- Implementamos uma interface amigável e tratativas de erro.

## Tecnologias Utilizadas

- **React:** Biblioteca para construção da interface do usuário.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
- **Material-UI:** Biblioteca de componentes React para um design consistente e responsivo.
- **Axios:** Biblioteca para fazer requisições HTTP.
