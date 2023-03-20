import fizzbuzz from "./fizzbuzz";

describe("FizzBuzz",()=>{
    it("genera para el 1",()=>{
        expect(fizzbuzz(1)).toEqual("1");
    })
})