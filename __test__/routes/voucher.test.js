const {app} = require("../../index")
const supertest = require("supertest")


// testing of get method
describe("testing of get method", () =>{
    test('get method', async() => {
        await supertest(app)
        .get("/customer")
        .expect(200)
     })

     test('get method', async() => {
        await supertest(app)
        .get("/")
        .expect(200)
     })
})

// test of post method
describe("testing of post method", () =>{          
    test('post method', async() => {
        await supertest(app)
        .post("/")
        .send({
          voucher_name:"baby dove",
          vouucher_id:" jgjh",
          voucher_status:"jgfuj",
          voucher_type:"jhfjhg",
          "brand_name":"dove"
        })
        .expect(200)
     })
})


// testing of update method
describe("testing of update method", () =>{
    test('update method', async() => {
        await supertest(app)
        .put("/update")
        .send({
          " id":"633f1cb67a938f064cf05c84",
           "name":"plutos_one"
        })
        .expect(200)
     })
})

// testing of delete method
describe("testing of delete method", () =>{
    test('delete method', async() => {
        await supertest(app)
        .delete("/delete")
        .send({
           id:"633f1cb67a938f064cf05c84",
        })
        .expect(200)
     })
})