//hacer una funcion que redondee (toFixed)

const redondeo = (a) => a.toFixed(0);

console.log(redondeo(15.44848157));

//si queremos controlar bien para qué lado va, nos conviene ceil o floor
const paraArriba = (b) => Math.ceil(b);

console.log(paraArriba(16.5878));
