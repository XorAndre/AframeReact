# AframeReact
## Repositório com alguns exemplos de aplicações 3D usando React e Aframe

A Aframe é uma ferramenta criada para desenvolver softwares com experiências em 3D. Desde seu surgimento, ela vem surpreendendo bastante! Eu já havia brincado algumas vezes com ela de maneira mais bruta (inserindo seu script externo em um documento HTML), com Aframe é possível criar vários cenários legais em 3D.

## Passo inicial da aplicação

### Criando a aplicação com React

- Crie um projeto em React, no meu caso estou usando um template em TypeScript, mas você pode usar o padrão em JavaScript. Para criar um projeto com TypeScript basta executar o seguinte comando: npx create-react-app my-app --template typescript;
- Abra a pasta de seu projeto no terminal e execute o comando npm start ou yarn start. Após executado o comando e seu projeto está rodando 100% na web com Hello World do React, isso significa que poderemos ir para os próximos passos de adicionar 2 pacotes que usaremos. 
    #### Configurações extras (Configurando TypeScript e Testes)
    1) Incrementaremos o ESLint como dependência de desenvolvimento, para isso adicionamos o seguinte comando no terminal: "yarn add eslint -D" ;
    2) Nosso próximo passo é iniciar o ESLint, usaremos o comando "yarn eslint --init"; 
    3) Em seu terminal irá abrir as seguintes questões:
        ```Comando Terminal
            ? How would you like to use ESLint?
            > To check syntax, find problems, and enforce code style
            ? What type of modules does your project use?
            > JavaScript modules (import/export)
            ? Which framework does your project use?
            > React
            ? Does your project use TypeScript?
            > y
            ? Where does your code run? (Press <space> to select, <a> to toggle all, <i> to in
            vert selection)
            > Browser
            ? How would you like to define a style for your project?
            > Use a popular style guide
            ? Which style guide do you want to follow?
            > Airbnb
            ? What format do you want your config file to be in?
            > JSON
            ? The style guide "airbnb" requires eslint@^5.16.0 || ^6.8.0. You are currently us
            ing eslint@7.1.0. Do you want to downgrade?
            > y
            ? Would you like to install them now with npm?
            > n
        ```
    4) Agora iremos adicionar o Prettier, para adicionar o Prettier iremos escrever o seguinte código em nosso terminal: "yarn add prettier eslint-config-prettier eslint-plugin-prettier -D";
    5) Com o pacote baixado em nosso Node Modules, criaremos um arquivo de nome prettier.config.js que irá conter as informações de configuração do Prettier. Agora incrementamos os seguintes trechos:
     ```Código do arquivo prettier.config.js
        module.exports = {
            singleQuote: true,
            trailingComma: 'all',
            allowParens: 'avoid',
        };
     ```   

### Adicionando o Styled-Components
Para deixar nossos componentes mais bonitinhos, usaremos o Styled Component. Abaixos os passos para adicionar o Styled Component em nossa aplicação.
- No terminal já dentro da pasta do projeto criado escreva o seguinte comando: npm install --save styled-components, aguarde alguns minutos em quanto os pacotes são baixados.