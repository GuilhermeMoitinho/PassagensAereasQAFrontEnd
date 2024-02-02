# Documentação Frontend - Consumo da API BackEndAeroQA com React e Vite
# Projeto ainda em andamento.

## Visão Geral
Desafio HORIZON. Esta documentação descreve como o frontend consome a API BackEndAeroQA utilizando as bibliotecas React e Vite. São fornecidas instruções e explicações sobre as principais funcionalidades implementadas no frontend.

## Status do Projeto
O projeto está atualmente em desenvolvimento. Para testá-lo, você pode acessar a versão mais recente [aqui](https://passagensaereashorizon.vercel.app), pois foi implantado usando Vercel.

## Autenticação
A autenticação é realizada através do endpoint `/api/usuario/login`. O token JWT retornado é armazenado no local storage para autenticação subsequente.

## Rotas Protegidas
Rotas protegidas são implementadas usando o componente PrivateRoute, verificando a autenticação antes de renderizar a rota.

## Consumo de Dados da API
As funções axios são utilizadas para realizar requisições à API. Cada função corresponde a uma operação específica.

## Componentes de Páginas
Os componentes de páginas são responsáveis por renderizar as diferentes páginas da aplicação.

## Edição de Voo
A edição de um voo é realizada através da página EditarVoo. Os detalhes do voo são carregados e, após a edição, os dados atualizados são enviados à API.

## Cadastro de Passageiro
O cadastro de passageiro é realizado através da página CadastroDePassageiro. Os dados são enviados à API para persistência.

## Cadastro de Gestor
Para testar a autenticação de gestor, utilize as seguintes credenciais:
- **Email:** gestao@gmail.com.br
- **Senha:** GuilhermeMoitinhoNovoContratado

## Conclusão
Esta documentação fornece uma visão abrangente de como o frontend consome a API BackEndAeroQA usando React. Certifique-se de seguir as boas práticas de desenvolvimento e implementar tratamentos de erro apropriados para uma experiência do usuário robusta e confiável.

