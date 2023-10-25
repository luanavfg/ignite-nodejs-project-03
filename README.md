# App

GymPass styles app.

## RFs (Requisitos Funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser posível se autenticar;
- [x] Deve ser posível obter os dados de um usuário logado;
- [x] Deve ser posível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser posível o usuário obter seu histórico de check-ins;
- [ ] Deve ser posível o usuário buscar academias próximas;
- [x] Deve ser posível o usuário buscar academias pelo nome;
- [x] Deve ser posível o usuário realizar check-in em uma academia;
- [ ] Deve ser posível validar o check-in de um usuário;
- [x] Deve ser posível cadastrar uma academia;

## RNs (Regras de Negócio)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só poder ser cadastrada por administradores;


## RNFs (Requisitos Não Funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser itentificado por um JWT (JSON Web Token);