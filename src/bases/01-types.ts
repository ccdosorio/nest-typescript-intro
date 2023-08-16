export const name = "Christian Osorio";
export const age: number = 13;
export const isValid: boolean = true;

export const templateString = `Esto es un string
multilinea
que puede tener
" dobles
' simples
inyectar valores ${name}
expresiones ${1 + 1}
booleanos: ${isValid}
`;

console.log(templateString);
