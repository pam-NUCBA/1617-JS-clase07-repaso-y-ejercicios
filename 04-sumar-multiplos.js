//sumar los multiplos de 5 menores a 100:

function sum(max) {
  let suma = 0;
  for (let i = 0; i < max; i++) {
    if (i % 2 === 0) {
      console.log(i);
      suma += i;
      console.log(`numero actual: ${suma}`);
    }
  }
}

sum(20);
