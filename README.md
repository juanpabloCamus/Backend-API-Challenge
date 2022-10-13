
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
    
## Tech Stack


**Server:** Node, Express, MongoDB, Mongoose, JWT


## Authors

- [@juanpabloCamus](https://www.github.com/juanpabloCamus)

