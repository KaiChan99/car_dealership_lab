const { Car } = require("./car");

const Dealership = function(name, carSpaces){
    let _name = name;
    let _carSpaces = carSpaces;
    let _cars= [];

    this.getName = ()=> _name;
    this.setName = (name)=> _name = name;
    this.getCarSpaces = ()=> _carSpaces;
    this.setCarSpaces = (carSpaces)=> _carSpaces = carSpaces;
    this.addCars = (car) => _cars.push(car); // Didn't have car inside the push parameters, fixed now
    this.removeCars = (car) => _cars.splice(_cars.indexOf((car), 1));
    this.getCars = () => _cars;
}

const Dealership1 = new Dealership("Bob's dealership", 5);
const Dealership2 = new Dealership("Steve's dealership", 5);

const Car1 = new Car("Ferrari", 200000, "V10");
const Car2 = new Car("Mercedes", 80000, "V10");

Dealership1.addCars(Car1);
Dealership1.addCars(Car2);

console.log(Dealership1.getCars());
console.log(Dealership1.getCars().length); //Shows number of cars in dealership


// Trying different approach

// const DealerName = (dealership)=> Dealership.getName();
// const CarSpaces = (dealership)=> Dealership.getCarSpaces();
// const ListCars = (dealership)=> Dealership.getCars();





let manufactureList = Dealership1.getCars().map((cars)=> cars.getManufacturer());

console.log(manufactureList);


// console.log(Dealership1.getCars().map((cars)=> cars.getManufacturer())); // This puts all the manufacturers of the cars in the dealership into an array


module.exports = {Dealership}