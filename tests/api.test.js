
const supertest = require('supertest');
const app = require('../server');

describe('Endpoint /api/user_holder', ()=>{

    it('GET / response with 401:Unauthorizad for you are not Admin', callback => {
        supertest(app)
            .get('/api/user_holder')
            .set('Accept','application/json')
            .expect(401, callback)
    });

    it('GET / response with 200:Ok, get user by you are Admin', callback => {
        supertest(app)
            .get('/api/user_holder')
            .set('Accept','application/json')
            .send({"tipo":"Admin"})
            .expect(200, callback)
    });

    it('POST / response with 201:created, you are Admin', callback => {
        supertest(app)
            .post('/api/user_holder?tipo=Admin')
            .set('Accept','application/json')
            .send(
                {
                    "email":"solar@solar.com",
                    "password":"12345670",
                    "name":"solar",
                    "last_name":"gaona",
                    "age":22,
                    "cuenta":0
                }
            )
            .expect(201, callback)
    });

    it('PUT / response with 404:Not Fund, for not exist user and not indentificate', callback => {
        supertest(app)
            .put('/api/user_holder/123')
            .set('Accept','application/json')
            .expect(404, callback)
    });

    it('DELETE / response with 401:Unauthorizad, you are not Admin', callback => {
        supertest(app)
            .delete('/api/user_holder/60fa0ab3ea82fd332cbbc36c')
            .set('Accept','application/json')
            .expect(401, callback)
    });

    it('DELETE / response with 200:Ok, delete holder you are Admin', callback => {
        supertest(app)
            .delete('/api/user_holder/60fa0ab3ea82fd332cbbc36c')
            .set('Accept','application/json')
            .send({"tipo":"Admin"})
            .expect(200, callback)
    });


});


describe('Endpoint /api/auth_login', () => {
    it('POST / response with 200:ok', callback => {
        supertest(app)
            .post('/api/auth_login')
            .set('Accept','application/json')
            .send(
                {
                    "email":"admin@admin.com",
                    "password":"admin123",
                }
            )
            .expect(200, callback)
    });
});

describe('Endpoint /api/transfers', () => {
    it('POST / response with 201:created', callback => {
        supertest(app)
            .post('/api/transfers')
            .set('Accept','application/json')
            .send(
                {
                    "transmiter":"admin@admin.com",
                    "receiver":"holder@holder.com",
                    "total":1500
                }
            )
            .expect(201, callback)
    });

    it('GET / response with 200:ok, response transfers data', callback => {
        supertest(app)
            .get('/api/transfers')
            .set('Accept','application/json')
            .expect(200, callback)
    });

});