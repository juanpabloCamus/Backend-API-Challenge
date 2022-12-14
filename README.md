
# Pokemon Cards API - Challenge

Desarrollar una RESTful API relacionada con las cartas de Pokémon que permite ser
consumida desde un Front-end o una App.




## Aclaraciones del challenge
La base de datos esta en MongoDB cloud, asi no es necesario que creen una, la deje precargada ya con una data existente. Añadi autenticacion, deje un usuario creado por defecto
```
{
    username: admin,
    password: admin
}
``` 
Para crear mas usuarios, hay un endpoint de Register y el de login nos provee un JWT para poder utilizar las rutas de POST, PUT y DELETE.

Las **credenciales** de la base de datos y el **secreto** del JWT, las deje hardcodeadas en el codigo. Esto evidentemente si fuera un espacio de produccion irian en sus correspondientes variables de entorno, en este caso lo deje asi para que no deban crear las suyas.
## Instalacion

Pararse dentro de la carpeta Test Backend y ejecutar

```bash
  npm install
```
Luego para iniciar la API ejecutar
```bash
  npm start
```
por defecto iniciara en el puerto 3000
    
## API Reference

#### Register a user

```http
  POST /register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required** |
| `password` | `string` | **Required** |

#### Login and get JWT

```http
  POST /login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username` | `string` | **Required** |
| `password` | `string` | **Required** |

Will return a JWT for cards endpoints usage
#### Get all cards

```http
  GET /card
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | query: `string`  | If you pass this argument you can use this endpoint to search a card by name |
| `expansion` |  query: `string` | You can pass this to filter by expansion |
| `type` |  query: `string`|You can pass this to filter by type  |
| `rarity` |  query: `string` | You can pass this to filter by rarity |

The filters are stackable
#### Get one card by id

```http
  GET /card/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | params: `string`  | **Required**|

Will return one card bassed on the id passed by params
#### Post a card

```http
  POST /card
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `JWT` | `JWT` | **Required** You have to pass the token via Authorizathion Headers|
| `hp` | `number` | **Required** You have to pass the hp via body|
| `firstEdition` | `boolean` | You can pass if first edition via body|
| `expansion` | `enum` | **Required** You have to pass the expansion via body. Avaliable values: ['Base Set', 'Jungle', 'Fossil', 'Base Set 2']|
| `type` | `enum` | **Required** You have to pass the types via body. Avaliable values: ['Water', 'Fire', 'Grass', 'Electric']|
| `rarity` | `enum` | **Required** You have to pass the rarity via body. Avaliable values: ['Common', 'Not Common', 'Rare']|
| `price` | `number` | **Required** You have to pass the price via body|
| `image` | `url` | **Required** You have to pass the url image|

Will post a card in database
#### Edit card

```http
  PUT /card/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `JWT` | `JWT` | **Required** You have to pass the token via Authorizathion Headers|
| `id` | `string` | **Required** You have to pass the card id via params|
| `hp` | `number` | **Required** You have to pass the hp via body|
| `firstEdition` | `boolean` | You can pass if first edition via body|
| `expansion` | `enum` | **Required** You have to pass the expansion via body. Avaliable values: ['Base Set', 'Jungle', 'Fossil', 'Base Set 2']|
| `type` | `enum` | **Required** You have to pass the types via body. Avaliable values: ['Water', 'Fire', 'Grass', 'Electric']|
| `rarity` | `enum` | **Required** You have to pass the rarity via body. Avaliable values: ['Common', 'Not Common', 'Rare']|
| `price` | `number` | **Required** You have to pass the price via body|
| `image` | `url` | **Required** You have to pass the url image|

Will edit a card in database
#### Delete card
```http
  DELETE /card/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required** You have to pass the card id via params|

Will delete a card in database






## Tech Stack


**Server:** Node, Express, MongoDB, Mongoose, JWT


## Authors

- [@juanpabloCamus](https://www.github.com/juanpabloCamus)

