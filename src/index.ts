interface Human {
    name:string,
    age:number,
    gender:string
}

const person={
    name:"명제",
    age:26,
    gender:"멋진남자"
}
const sayHi = (person:Human): string =>{
    return (`your name is ${person.name},and age is ${person.age} and you are ${person.gender}`);
}
console.log(sayHi(person));
export {}