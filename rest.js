const objeto = {
propiedad1: 2,
propiedad2: 'b',
propiedad3: true
}

const objeto2 = {
propiedad1: 'c',
propiedad2: [1,2,3,4,5]
}

const {propiedad1, propiedad2} = objeto;
console.log(propiedad1);
console.log(propiedad2);

const objetoResultado = {...objeto,...objeto2};
console.log(objetoResultado);