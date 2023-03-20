import fizzbuzz from "./fizzbuzz";

function secuenciaFizzBuzz(num){
    let cadena="";
    for(let i=1;i<=num;i++)
    {
        cadena=cadena+fizzbuzz(i);
        if(i!=num)
            cadena=cadena+",";
    }
    return cadena;
}

export default secuenciaFizzBuzz;