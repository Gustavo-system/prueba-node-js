# prueba-node-js
prueba node js RF

## install 
npm i

## start serve
nodemos server

# Endpoints
## /api/auth_login
require email and posword in body request
methos https is post

## /api/user_admin
method post and get 
the method POST requires syntax 
```
{
  "email":"email@email.com",
  "password":"password"
}

```

/api/user_holder
methos GET, UPDATE, DELETE
need in body request 

```
{
  "tipo":"Admin"
}

```

POST sintax -> need a params for query -> api/user_holder?tipo=Admin

```
{
  "email":"email@email.com",
  "password":"password",
  "name":"name",
  "last_name":"last_name",
  "age":number,
  "cuenta":number
}

```
                
/api/transfers
methos GET, POST

POST sintax ->

```
{
  "transmiter":"mail",
  "receiver":"mail",
  "total":number
}

```
