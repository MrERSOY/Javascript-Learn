//function selamlaLiteralString(name) {
//return `Hey, ${name}!`;
//}

//console.log(selamlaLiteralString("mehmet"));



const person = {
    name: "Mehmet",
    surname: "Pekcan",
};

//function selamlaConditional(person) {
    // condition ? truthy : falsy
    //const name = person ? person.name : "Yabanci";
    //return `Hey, ${name}`;
//}

//console.log(selamlaConditional("ahmet"));


function selamlaLogicalOR(person) {
    const name = person.name || "Yabanci";
    return `Hey, ${name}`;
}

//console.log(selamlaLogicalOR("Mehmet"));

function selamlaLogicalAnd(person) {
    const name = (person && person.name) || person.name;
    return `Hey, ${name}`;
}

//console.log(selamlaLogicalAnd(person));

function selamlaOptionalChaning(person) {
    const name = person?.name || "Yabanci";
    return `Hey, ${name}`;
}

//console.log(selamlaOptionalChaning('ahmet'));

function selamlaNullishCoalescing(person) {
    const name = person.name ?? "Yabanci";
    return `Hey, ${name}`;
}

console.log(selamlaNullishCoalescing("Ahmet"));

console.log(
    selamlaLogicalOR({
        name: 0,
    })
);
console.log(
    selamlaNullishCoalescing({
        name:null,
    })
);