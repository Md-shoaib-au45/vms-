const {app} = require("../../index")
const supertest = require("supertest")


// testing of get method
describe("testing of get method", () =>{
    test('get method', async() => {
        await supertest(app)
        .get("/voucher")
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