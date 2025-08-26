
const sayHelloArrow = () => "Hello, world!";

const double = (x) => (x*2);

const add = (x,y) => (x+y);

const person = {
    name: "Noah",
    sayHi: () => ("HI, I'm"+ this.name)
}

module.exports = {
    sayHelloArrow,
    double,
    add,
    person,
};