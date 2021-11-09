//tengo dos strings... los quiero comparar pero no quiero que importe el case... cómo hago?

const string1 = "nucba";
const string2 = "NucBa";

const comparando = (str1, str2) => {
  if (str1 === str2) {
    console.log(`son iguales porque son ${str1} y ${str2}`);
  } else {
    console.log(`no son iguales porque son ${str1} y ${str2}`);
  }
};

comparando(string1.toUpperCase(), string2.toUpperCase());
