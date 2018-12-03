const utills = require('../../lib/utils')
const expect = require('chai').expect

describe('/lib/utils' , ()=>{

    it('add function should return 5 as the sum of 2 & 3', ()=>{
        const result = utills.add(2,3);
        expect(result).equal(5)
    })

})