JWT: JSON Web Token

Usuário faz login, envia e-mail/senha, o back-end cria um token ÚNICO, não modificável e STATELESS

Stateless: Não armazenado em nenhuma estrutura de persistência de dados (banco de dados);

Back-end: Quando vai criar o token, ele usa uma PALAVRA-CHAVE (string)

Palavra-chave: ssakhdaklsqurfvdnhvcberpjg

Email/senha -> header.payload.sign

Os tokens se diferenciam pela palavra-chave a partir da qual foram criados. Apenas o back-end consegue decodificar o token, pois só ele possui a palavra-chave;
O token contém o id do usuário que o criou;
A assinatura é gerada a partir dos outros atributos enviados: header e payload

Login => JWT
JWT => Será enviado em todas as requisições dali para a frente
Header (cabeçalho): Authorization: Bearer JWT