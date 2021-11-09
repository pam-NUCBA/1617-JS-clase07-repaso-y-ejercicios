//si es par, diga par. Si es impar, diga impar.Hasta un numero, lo pasamos en funcion (o hasta 10)

const esPar = (num) => {
  for (let i = 0; i <= num; i++) {
    //   if (i % 2 === 0) console.log(`${i} es par`);
    //   else console.log(`${i} es impar`);
    i % 2 === 0 
        ? console.log("es par") 
        : console.log("es impar");
  }
};

esPar(16);
