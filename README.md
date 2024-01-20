
# Visão Geral

O projeto AbasBank é uma aplicação bancária Angular que inclui recursos avançados como checagem de formulários, paginação para listar os bancos e funções CRUD para criar contas bancárias. A aplicação utiliza a API pública Brasil API - Bancos para listar bancos e obter detalhes específicos por código.

## Acesso à Aplicação Online

A versão mais recente da aplicação está disponível  [aqui](https://abas-bank-joao.vercel.app/). Explore os recursos e funcionalidades oferecidos pela aplicação.

## Recursos Principais

    Tela de Listagem de Bancos:
        Apresenta uma lista de todos os bancos, utilizando a API pública para obter dados.
        Inclui um campo de pesquisa por código de banco, permitindo ao usuário consultar um banco específico.
        Redireciona para a Tela de Cadastro ao clicar em um banco na lista.

    Tela de Cadastro:
        Exibe todas as informações detalhadas do banco selecionado.
        Possui campos para o usuário informar agência e conta para cadastro.
        Inclui um botão para cadastrar a conta, armazenando as informações no Local Storage.

Documentação do Projeto AbasBank - Atualizado
Visão Geral

O projeto AbasBank é uma aplicação bancária Angular que inclui recursos avançados como checagem de formulários, paginação para listar os bancos e funções CRUD para criar contas bancárias. A aplicação utiliza a API pública Brasil API - Bancos para listar bancos e obter detalhes específicos por código.
Recursos Principais

    Tela de Listagem de Bancos:
        Apresenta uma lista de todos os bancos, utilizando a API pública para obter dados.
        Inclui um campo de pesquisa por código de banco, permitindo ao usuário consultar um banco específico.
        Redireciona para a Tela de Cadastro ao clicar em um banco na lista.

    Tela de Cadastro:
        Exibe todas as informações detalhadas do banco selecionado.
        Possui campos para o usuário informar agência e conta para cadastro.
        Inclui um botão para cadastrar a conta, armazenando as informações no Local Storage.

Instruções Técnicas
Ambiente de Desenvolvimento

Certifique-se de ter o Angular CLI instalado globalmente em seu ambiente de desenvolvimento:

bash

npm install -g @angular/cli@17.1.0

Iniciando o Servidor de Desenvolvimento

Execute o seguinte comando para iniciar o servidor de desenvolvimento:

bash

ng serve

Acesse http://localhost:4200/ em seu navegador para visualizar a aplicação em modo de desenvolvimento.
Construção do Projeto

Para construir o projeto e gerar os artefatos de construção, utilize:

bash

ng build

Os artefatos serão armazenados no diretório dist/. Eles podem ser implantados em um servidor para disponibilizar a aplicação em um ambiente de produção.
Integração com a API Brasil - Bancos

A aplicação utiliza a API Brasil - Bancos para listar bancos e obter detalhes específicos. A API é integrada nas telas de listagem e cadastro.
Tela de Listagem de Bancos

    Listagem de Bancos: https://brasilapi.com.br/api/banks/v1
    Consulta por Código: https://brasilapi.com.br/api/banks/v1/{code}

Tela de Cadastro

    As informações detalhadas do banco são obtidas pela API.

# Funcionalidades Específicas

## Checagem de Formulários

    Utilização de funcionalidades avançadas de checagem de formulários para garantir a integridade dos dados informados.

## Paginação na Listagem de Bancos

    Implementação de paginação para melhorar a experiência do usuário ao visualizar a lista de bancos.

## Funções CRUD para Contas Bancárias

    Possibilidade de cadastrar contas bancárias, armazenando as informações no Local Storage.


# Instruções Técnicas

### Ambiente de Desenvolvimento

Certifique-se de ter o Angular CLI instalado globalmente em seu ambiente de desenvolvimento:

bash

npm install -g @angular/cli@17.1.0

Iniciando o Servidor de Desenvolvimento

Execute o seguinte comando para iniciar o servidor de desenvolvimento:

bash

ng serve

Acesse http://localhost:4200/ em seu navegador para visualizar a aplicação em modo de desenvolvimento.
Construção do Projeto

Para construir o projeto e gerar os artefatos de construção, utilize:

bash

ng build

Os artefatos serão armazenados no diretório dist/. Eles podem ser implantados em um servidor para disponibilizar a aplicação em um ambiente de produção.       
