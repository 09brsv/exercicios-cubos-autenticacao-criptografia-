![](https://i.imgur.com/xG74tOh.png)


## Criação de API com autenticação

## Descrição :

Este é um projeto para criar uma API RESTful com autenticação e criptografia de senha em NodeJs.

## Instalação:

Clone este repositório na sua máquina: 
```git
git clone https://github.com/09brsv/exercicios-cubos-autenticacao-criptografia-.git
```

Entre no diretório do projeto: 
```git
cd exercicios-cubos-autenticacao-criptografia
```
Instale as dependências: 
```git
npm install
```
ou
```git
yarn
```
Execute o projeto: 
```git
npm run dev
```
ou
```git
yarn dev
```
<br>

## Como Usar :

Para usar a API, você precisa:
1. Ter um gerenciador de banco de dados SQL como por exemplo o [beeckeeper](https://www.beekeeperstudio.io/).
2. Selecionar o banco de dados postgres, pegando as credencias do seu banco
3. Criar um arquivo .env ***"por fora da pasta src"*** e preencher devidamente as variáveis de ambiente que estão exemplificadas no arquivo .env.example
4. Enviar solicitações HTTP para os endpoints disponíveis.

### Endpoints

Aqui estão os endpoints disponíveis na API:

- `GET /pokemons`: Retorna uma lista com as informações de todos os pokemons do usuário logado.
- `GET /pokemons/:id`: Retorna as informações de um pokemon com o ID especificado.
- `POST /usuarios`: Cadastra um usuário no banco de dados com base nos dados fornecidos no corpo da solicitação.
- `POST /login`: Faz a autenticação do usuário no banco de dados com base nos dados fornecidos no corpo da solicitação.
- `POST /pokemons`: Cria um novo pokemon com base nos dados fornecidos no corpo da solicitação.
- `PATCH /pokemons/:id`: Atualiza uma ou mais informações do pokemon com o ID especificado com base nos dados fornecidos no corpo da solicitação.
- `DELETE /pokemons/:id`: Remove o pokemon com o ID especificado.


Para usar a API, envie solicitações HTTP para esses endpoints usando um cliente HTTP, como o [Postman](https://www.postman.com/) ou o [Insomnia](https://insomnia.rest/download).



<br>
## Exemplo de requisição para cadastrar um pokemon

```
{
    "nome": "Pikachu",
    "apelido": "pikachu",
    "habilidades": "static, lightning-rod",
    "imagem": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
}
```

<br>
<br>
## Exemplo de retorno na listagem de pokemons:

```
[
    {
        "id": 1,
        "usuario": "Nome do usuário responsável"
        "nome": "Pikachu",
        "apelido": "pikachu",
        "habilidades": ["static", "lightning-rod"],
        "imagem": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
    },
    {
        "id": 2,
        "usuario": "Nome do usuário responsável"
        "nome": "Bulbasaur",
        "apelido": "bulbasaur",
        "habilidades": ["overgrow", "chlorophyll"],
        "imagem": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
    }
]
```

---
## Contato

Se você tiver alguma dúvida ou sugestão sobre este projeto, sinta-se à vontade para entrar em contato comigo através do meu perfil no [GitHub](https://github.com/09brsv) ou no [Linkedin](https://www.linkedin.com/in/bruno-batista09brsv/)
