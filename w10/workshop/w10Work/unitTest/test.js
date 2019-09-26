let assert = require('assert');
let app = require('../server/js');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);
// let http = require('http');

describe('Server test', () => {
    before(() => {
        console.log('before test');
    });
    after(() => {
        console.log("After test");
    });

    describe('/productFind', () => {
        it('should GET all the products', (done) => {
            chai.request(app)
                .get('/productFind')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    // res.body.length.should.be.eql(2);
                    done();
                });
        });
    });

    describe('productInsert', () => {
        it('should insert a doc', (done) => {
            chai.request(app).post('/productInsert').type('form')
            .send({ 'name':'Ryan', 'id':3 })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('name');
                res.body.should.have.property('id');
                console.log(res.body);
                done();
            });
        });
    });
});

// describe('Server test', () => {
//     before(() => {console.log("Before test");});

//     after(() => {console.log("After test");});

//     describe('get/productFind', () => {
//         it ('should return all products', () => {
//             http.get('http://localhost:3000/productFind', (res) => {
//                 assert.equal(res.statusCode, 200);

//                 var body = '';
//                 res.on('data', (d) => {body += d;});
//                 res.on('end', () => {
//                     assert.equal(body, 'Hello Mocha');
//                 });
//             });
//         });
//     });
// });
