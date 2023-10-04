# App

GymPass styles app.

## RFs (Requisitos Funcionais)

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser posível se autenticar;
- [ ] Deve ser posível obter os dados de um usuário logado;
- [ ] Deve ser posível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser posível obter o usuário obter seu histórico de check-ins;
- [ ] Deve ser posível o usuário buscar academias próximas;
- [ ] Deve ser posível o usuário buscar academias pelo nome;
- [ ] Deve ser posível o usuário realizar check-in em uma academia;
- [ ] Deve ser posível validar o check-in de um usuário;
- [ ] Deve ser posível cadastrar uma academia;

## RNs (Regras de Negócio)

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só poder ser cadastrada por administradores;


## RNFs (Requisitos Não Funcionais)

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser itentificado por um JWT (JSON Web Token);