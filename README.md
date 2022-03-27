# Bexs Front-end

 Aplicação web desenvolvida com React  utilizando styled-components, react-hook-form e yup


# Pré-requisitos

- Yarn ou NPM

# Instalação

```
git clone https://github.com/arthuralveso/credit-checkout.git
cd  credit-checkout
yarn  ou npm install
```

# Como executar

Primeiramente devemos iniciar o json-server para iniciar o servidor fake com os dados, para podermos simular uma requisição para um back-end.

Para iniciar o json-server:

```
yarn server ou npm run server

```

Após iniciar o servidor fake, podemos inicar a aplicação através do seguinte comando

```
yarn start
```

## Visao Geral

Na aplicação temos os seguintes elementos:

- Alguns elementos da aplicação:
    - Pages
        - Layout
    - Components
        - Card
        - CardInformationForm
    - Context
        - CardInformationContext
        
### Layout
        
    layout da aplicação e contem o demais componentes visuais
        
### Card
        
    Componente que exibe as informações do cartao que recebe via context
        
### CardInformationForm
        
    Formulario que faz o binding com as informações exibidas no componente Card,
    além de fazer uma requisição POST para o json-server.
    Formulario utilizado com a lib react-hooks-form e para validação foi utilizada a lib Yup
    As informações do cartão são passadas para o componente Card através do CardInformationContext
    No arquivio masks.ts estão as funções utilizadas para aplicar a mascara nos inputs


