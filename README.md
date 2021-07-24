# prueba-node-js
prueba node js RF

## install 
npm install

## start serve
nodemon server

## start test
npm test

# Endpoints
## /api/auth_login
method POST require email and possword in body request
```
{
  "email":"email@email.com",
  "password":"password"
}
```

## /api/user_admin
method POST and GET 
the method POST requires syntax 
```
{
  "email":"email@email.com",
  "password":"password"
  "name":"name"
}
```

/api/user_holder
methods GET, POST, UPDATE and DELETE
need in body request 

```
{
  "tipo":"Admin"
}
```

POST syntax -> need a params for query: api/user_holder?tipo=Admin

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
method GET and POST

POST need syntax ->

```
{
  "transmiter":"mail",
  "receiver":"mail",
  "total":number
}
```
