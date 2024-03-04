#   Libreria - Ribera

This application is an API that uses the js Express() and Sequelize() libraries, for the creation of a Rest API, which can be Created, Read, Updated, Delete (CRUD).


## Libraries Required
    - Node.js
    - Express() 
    - Sequelize()
    - MYSQL2
    - Nodemon
### Database Name
    Name: libreira
    Dialect: mysql
    Change User And Pasword in ./src/db/db.js
    



## API Reference

### Autores
#### Get all Autores

```http
  GET /libreria/autores
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| ` ` | `string` | Get JSON |

#### Create Autores

```http
  POST /libreria/autores
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `body JSON`      | `string` | **Required**. Body to fetch |

### Editoriales
#### Get all Editoriales

```http
  GET /libreria/editoriales
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| ` ` | `string` | Get JSON |

#### Get Editorial

```http
  GET /libreria/editoriales/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Create Editoriales

```http
  POST /libreria/editoriales
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `body JSON`      | `string` | **Required**. Body to fetch |

### Escribe
#### Get all Escribe

```http
  GET /libreria/escribe
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| ` ` | `string` | Get JSON |

#### Create Escribe

```http
  POST /libreria/escribe
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `body JSON`      | `string` | **Required**. Body to fetch |

### Libro
#### Get all Libros

```http
  GET /libreria/libro
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| ` ` | `string` | Get JSON |

#### Create Libros

```http
  POST /libreria/libro
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `body JSON`      | `string` | **Required**. Body to fetch |
