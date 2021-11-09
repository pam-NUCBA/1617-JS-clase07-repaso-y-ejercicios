//*imprimir tabla:

function tablas(multiplo) {
  for (let i = 0; i <= 10; i++) {
    for (let j = multiplo; j <= multiplo; j++) {
      console.log(`${j} x ${i} = ${j * i}`);
    }
  }
}

tablas(3);
