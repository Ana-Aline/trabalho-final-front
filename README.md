# Automação E2E - Automation Exercise (Cypress)

Projeto de automação de testes End-to-End (E2E) desenvolvido para a suíte de validação da plataforma Automation Exercise, estruturado com foco em boas práticas de engenharia de qualidade, organização em camadas e relatórios avançados.

## Tecnologias e Ferramentas Utilizadas

* Cypress: Framework principal para execução dos testes E2E.

* JavaScript (ES6+): Linguagem base para a implementação dos scripts e page objects.

* Allure Report (allure-cypress): Geração de relatórios visuais gerenciais com histórico, gravador de passos e anexos de falhas.

* GitHub Actions: Pipeline de CI/CD para execução automatizada dos testes e armazenamento de artefatos.

## Justificativas das Escolhas Técnicas

* Page Object Model (POM) + Components: A arquitetura foi dividida em páginas (pages), elementos mapeados separadamente (elements), massa de dados centralizada (data) e componentes visuais globais (components).

  > Nota de Portfólio: A estruturação específica de Componentes (como o mapeamento isolado de header e footer) foi adotada como um estudo de caso para este portfólio, aplicando uma técnica modular que ainda não havia utilizado em projetos anteriores, garantindo altíssima reutilização de código e menor impacto em manutenções futuras.

* Massa de Dados Dinâmica (getNewUser Factory): Utilização de funções de fábrica baseadas em Date.now() e Math.random() para evitar gargalos de e-mails duplicados em cadastros simultâneos.

* Resiliência e Sincronismo: Uso assertivo de cy.url().should('include', ...) e asserções explícitas de visibilidade no pós-login e checkout para blindar os testes contra comportamentos flaky.

## Estrutura do Projeto

A organização dos diretórios segue um padrão limpo e modular:

trabalho-final-front/
├── cypress/
│   ├── e2e/                     # Arquivos de testes (Specs)
│   ├── fixtures/                # Dados estáticos auxiliares
│   └── support/
│       ├── components/          # Componentes visuais reutilizáveis (Header, Footer)
│       ├── data/                # Fábricas de massa (userData, messages, etc.)
│       ├── pages/               # Page Objects e seus respectivos mapeamentos
│       ├── commands.js          # Comandos customizados do Cypress
│       └── e2e.js               # Configurações globais e suporte ao Allure
├── .gitignore                   # Arquivos ignorados pelo Git
├── cypress.config.js            # Configurações gerais do Cypress e do Allure
├── pipeline.yml                 # Arquivo de CI/CD para o GitHub Actions
└── package.json                 # Dependências e scripts do projeto

## Como Instalar e Executar

### Pré-requisitos

* Node.js (versão 18 ou superior) instalado na sua máquina.

* Gerenciador de pacotes npm.

### 1. Instalação das Dependências

Clone o repositório e execute o comando abaixo na raiz do projeto para instalar os pacotes:
npm install

### 2. Executando os Testes

* Modo Interativo (Cypress Test Runner):
  npx cypress open

* Modo Headless (Sem interface gráfica - Padrão):
  npx cypress run

* Rodando com o Allure Report ativado:
  npx cypress run --env allure=true

## Visualizando o Allure Report Localmente

Após rodar os testes gerando os resultados do Allure, compile e abra o dashboard interativo no seu navegador com o comando:

npx allure serve allure-results

### Como visualizar o artefato do relatório na sua máquina:
Como os relatórios do Allure utilizam requisições estáticas em JavaScript, abri-los diretamente pelo explorador de ficheiros do sistema pode gerar bloqueios de segurança do navegador (CORS). Para contornar isso de forma leve e sem dependência de Java, utilize um servidor local via Node.js:

1. Descarregue e descompacte o artefato `allure-report.zip` gerado na aba **Actions** do repositório.
2. Abra o terminal na pasta extraída do relatório.
3. Execute o comando abaixo para iniciar o servidor web e abrir o painel automaticamente:
   ```bash
   npx http-server . -o
   ```

## Pipeline de CI/CD (GitHub Actions)

O projeto conta com automação contínua configurada no arquivo pipeline.yml. A cada push ou pull_request para as branchs principais:

1. O ambiente Node.js é configurado.

2. As dependências são instaladas de forma limpa (npm ci).

3. Os testes do Cypress são executados.

4. O Allure CLI compila o relatório estático e o disponibiliza diretamente como Artefato (allure-report) na aba Actions do repositório no GitHub.

Desenvolvido por Ana Rocha
Readme feito com IA
