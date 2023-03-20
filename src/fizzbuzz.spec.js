import fizzbuzz from "./fizzbuzz";

describe("FizzBuzz",()=>{
    it("genera para el 1",()=>{
        expect(fizzbuzz(1)).toEqual("1");
    })
    it("genera para el 2",()=>{
        expect(fizzbuzz(2)).toEqual("2");
    })
    it("genera Fizz para 3",()=>{
        expect(fizzbuzz(3)).toEqual("Fizz");
    })
    it("genera Fizz para multiplos de 3",()=>{
        expect(fizzbuzz(6)).toEqual("Fizz");
    })
})