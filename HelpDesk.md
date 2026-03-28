# Sistema de Gerenciamento de Chamados (HelpDesk)

## Papeis

O Sistema terá três papeis: o admin, o técnico e o cliente;

### Admin

É a pessoa responsável pela gestão do Sistema

- Deve criar, editar, listar e deletar contas de **Técnicos**.

- Ao criar uma conta de **Técnico** uma <u>senha provisória será criada pelo Admin</u> e posteriormente repassada ao **Técnico** que poderá alterar essa senha após o <u>primeiro acesso à sua conta</u>.

- Ao criar um Técnico seu horário de disponibilidade padrão será o horário comercial: 08:00 às 12:00 e 14:00 às 18:00

<br>

Exemplo de Array de horários: ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00']

#### **Serviços**

- Deve criar, listar, editar e desativar os Serviços que serão executados pelos Técnicos.

- Ao desativar um Serviço, esse Serviço não deve ser listado na criação de um novo Chamado mas deve deve permanecer nos Chamados já criados.

#### **Clientes**

- Ao excluir uma conta de Cliente, todos os Chamados criados por esse Cliente serão excluídos também.

<br>

O Admin deve conseguir listar todos os Chamados e suas informações.

O sistema deve permitir ao Admin editar o status dos Chamados.

### Técnico

É a pessoa responsável por executar os Serviços que foram cadastrados pelo Admin e foram solicitados pelos Clientes através de um Chamado

- O sistema deve permitir ao Técnico editar o seu próprio perfil.
  <br>
- O sistema deve permitir o envio de imagem para ser usada no perfil do Técnico.
  <br>

- O sistema deve permitir ao Técnico listar todos os Chamados atribuídos a ele.
  <br>

- O sistema deve permitir ao Técnico adicionar novos Serviços ao Chamado se for necessário.
  <br>

- O sistema deve permitir ao Técnico editar o status do Chamado.

  <br>

#### Status do Chamado

Quando o Técnico iniciar um atendimento o status do Chamado deve mudar para 'Em atendimento'.

Quando o Técnico encerrar um atendimento o status do Chamado deve mudar para 'Encerrado'

🚫 **Não é permitido ao Técnico:**

Criar, alterar ou excluir contas de Clientes ou criar Chamados.

### Cliente

É a pessoa responsável por criar um Chamado

- O Cliente deve conseguir criar, editar e excluir sua conta de Cliente.
  <br>
- Ao excluir uma conta de Cliente todos os Chamados criados por esse Cliente serão excluídos também.
  <br>
- O sistema deve permitir o envio de imagem para ser usada no perfil do Cliente.
  <br>
- O sistema deve permitir ao Cliente escolher um Técnico disponível durante a criação do Chamado.
  <br>
- O sistema deve permitir ao Cliente visualizar um histórico com todos os Chamados já criados por ele.
  <br>

🚫 **Não é permitido ao Cliente:**

Alterar ou excluir outras contas que não lhe pertençam.

Alterar qualquer informação de um Chamado após ser criado.

## Chamados

É a relação entre um Cliente e um Técnico

- O sistema deve permitir que vários Chamados sejam criados por um Cliente
  <br>
- O Cliente deve criar um Chamado selecionando a categoria do Serviço
  <br>
- Todo Chamado deve ter pelo menos um Serviço selecionando, podendo ser adicionado novos Serviços pelo Técnico responsável pelo atendimento
  <br>
- O Chamado deve exibir o valor do Serviço solicitado e o valor de cada Serviço adicional incluído pelo Técnico assim como o somatório do valor total de todos os Serviços
  <br>
- Durante a criação de um Chamado o Cliente deve atribuir um Técnico responsável
  <br>
- O Chamado pode ter seu status alterado pelo Técnico responsável ou pelo Admin
  <br>
- O Chamado só pode ter status de: Aberto, Em atendimento ou Encerrado.
  <br>

## Serviços

O Serviço: Categoria de atividades que serão executadas pelo Técnico e solicitadas pelos Clientes

Somente o Admin deve criar, editar e desativar as informações dos Serviços;

Os Serviços serão parte das informações de um Chamado;

Cada Serviço terá um valor a ser cobrado do Cliente.

# Pontos de Atenção

Deve existir uma conta de administrador.
Devem existir pelo menos 3 contas de técnicos:
Técnico 1: atende das 08h às 12h e das 14h às 18h.
Técnico 2: atende das 10h às 14h e das 16h às 20h.
Técnico 3: atende das 12h às 16h e das 18h às 22h.

Devem existir pelo menos 5 serviços a serem oferecidos:

Os usuários deverão se autenticar para ter acesso a aplicação através da tela de login. Deve ser utilizado JWT no processo de autenticação.
