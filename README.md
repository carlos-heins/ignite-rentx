# Rentx
### É um projeto de aluguel de carros desenvolvido para fins de conhecimento no curso de node no IGNITE da [RocketSeat](https://www.rocketseat.com.br/)

## Tópicos
* [Modelo para implementação](#modelo-seguido-para-implementação)
* [Regras de negócio](#regras-de-negócio)
* [Organização](#organização-do-projeto)
* [Tecnologias usadas](#tecnologias-usadas)

# Modelo seguido para implementação:
![](/diagrama.png)


# Regras de Negócio:

## Cadastro de carro

**RF**
- Deve ser possível cadastrar um novo carro.


**RN** 
- Não deve ser possível cadastrar um carro com uma placa já existente.
- O carro deve ser cadastrado, por padrão, com disponibilidade.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

## Listagem de carros

**RF** 
- Deve ser possível listar todos os carros disponíveis
- Deve ser possível listar todos os carros disponíveis pelo - nome da categoria
- Deve ser possível listar todos os carros disponíveis pelo - nome da marca
- Deve ser possível listar todos os carros disponíveis pelo - nome do carro

**RN**
- O usuário não precisar estar logado no sistema.


## Cadastro de Especificação no carro

**RF**
- Deve ser possível cadastrar uma especificação para um carro


**RN**
- Não deve ser possível cadastrar uma especificação para um - carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já - existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário - administrador.


## Cadastro de imagens do carro

**RF**
- Deve ser possível cadastrar a imagem do carro

**RNF**
- Utilizar o multer para upload dos arquivos

**RN**
- O usuário deve poder cadastrar mais de uma imagem para o - mesmo carro
- O usuário responsável pelo cadastro deve ser um usuário - administrador.


## Alugel de carro

**RF**
- Deve ser possível cadastrar um aluguel


**RN**
- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso já - exista um aberto para o mesmo usuário
- Não deve ser possível cadastrar um novo aluguel caso já - exista um aberto para o mesmo carro
- O usuário deve estar logado na aplicação
- Ao realizar um aluguel, o status do carro deverá ser - alterado para indisponível


## Devolução de carro 

**RF**
- Deve ser possível realizar a devolução de um carro

**RN**
- Se o carro for devolvido com menos de 24 horas, deverá - ser cobrado diária completa.
- Ao realizar a devolução, o carro deverá ser liberado para - outro aluguel.
- Ao realizar a devolução, o usuário deverá ser liberado - para outro aluguel.
- Ao realizar a devolução, deverá ser calculado o total do - aluguel. 
- Caso o horário de devolução seja superior ao horário - previsto de entrega, deverá ser cobrado multa - proporcional aos dias de atraso.
- Caso haja multa, deverá ser somado ao total do aluguel.
- O usuário deve estar logado na aplicação


## Listagem de Alugueis para usuário

**RF**
- Deve ser possível realizar a busca de todos os alugueis para o usuário

**RN**
- O usuário deve estar logado na aplicação


## Recuperar Senha

**RF**
- Deve ser possível o usuário recuperar a senha informando o e-mail
- O usuário deve receber um e-mail com o passo a passo para a recuperação da senha
- O usuário deve conseguir inserir uma nova senha

**RN**
- O usuário precisa informar uma nova senha
- O link enviado para a recuperação deve expirar em 3 horas
# Organização do projeto:
- __Rotas:__ tem a responsabilidade de receber um `request`, passar as informações  para outros módulos  retornar um `response`.
- __Controllers:__ um intermediário entre as rotas e os useCases, conhece os dois lados e pode ser onde tratamos exceções.
- __UseCases:__ regras de negócio (validação,cálculos,etc...) - metodo `ececute()` recebe as informações → cria novos erros em caso de falhas nas regras de negócio → Se tudo der certo, executa  o `Repository.create`, passando { informações }.
- __Repository:__ onde temos informações do nosso repositório, estrutura de dados,conexões,etc. - tem as funções de manipulacao do model. ex: create, findbyname, etc.
- __Model:__ onde modelamos nossa entidade → o modelo a ser seguido → também tem a função  de criar o `uuid` caso ainda nao tenha sido criado.
# Tecnologias usadas:
- Começamos o projeto projeto configurando o __typeScript__ e __ESLint/Prettier__;