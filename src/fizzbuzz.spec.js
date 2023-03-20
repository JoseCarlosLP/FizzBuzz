import fizzbuzz from "./fizzbuzz";
import secuenciaFizzBuzz from "./secuencia";

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
    it("genera Fizz para 5",()=>{
        expect(fizzbuzz(5)).toEqual("Buzz");
    })
    it("genera Fizz para multiplos de 5",()=>{
        expect(fizzbuzz(10)).toEqual("Buzz");
    })
    it("genera Fizz para 15",()=>{
        expect(fizzbuzz(15)).toEqual("FizzBuzz");
    })
    it("genera Fizz para multiplos de 3 y 5",()=>{
        expect(fizzbuzz(30)).toEqual("FizzBuzz");
    })
    it("genera para 2 numeros",()=>{
        expect(secuenciaFizzBuzz(2)).toEqual("1,2");
    })
    it("genera para 3 numeros",()=>{
        expect(secuenciaFizzBuzz(3)).toEqual("1,2,Fizz");
    })
    it("genera para 4 numeros",()=>{
        expect(secuenciaFizzBuzz(4)).toEqual("1,2,Fizz,4");
    })
    it("genera para 10 numeros",()=>{
        expect(secuenciaFizzBuzz(10)).toEqual("1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz");
    })
})

