//Si hace 20 grados, chequear si hace mas de 30 grados. si hace menos, llevar paraguas, si hace mas llevar sombrero, si hace menos de 20 llevar bufanda. Si hace más de 30, llevar sombrero

let temp = 31;

if (temp < 20) {
  console.log("llevar bufanda");
}
if (temp >= 20) {
  if (temp > 30) {
    console.log("llevar sombrero");
  } else {
    console.log("llevar paraguas");
  }
}
