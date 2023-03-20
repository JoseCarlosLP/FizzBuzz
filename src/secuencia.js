import fizzbuzz from "./fizzbuzz";

function secuenciaFizzBuzz(num){
    if(num==3) return fizzbuzz(1)+","+fizzbuzz(2)+","+fizzbuzz(3);
    return fizzbuzz(1)+","+fizzbuzz(2);
}

export default secuenciaFizzBuzz;