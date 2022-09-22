const Car = function(manufacturer, price, engine){
    let _manufacturer = manufacturer;
    let _price = price;
    let _engine = engine;

    this.getManufacturer = ()=> _manufacturer;
    this.setManufacturer = (manufacturer)=> _manufacturer = manufacturer;
    this.getPrice = ()=> _price;
    this.setPrice = (price)=> _price = price;
    this.getEngine = ()=> _engine;
    this.setEngine = (engine)=> _engine = engine;

}

const Car1 = new Car("Ferrari", 200000, "V10");
const Car2 = new Car("Mercedes", 80000, "V10");

// Attempting different approaches

// const Engine = (car)=> Car.getEngine();
// const Price = (car)=> Car.getPrice();
// const Manufacturer = (car)=> Car.getManufacturer();

console.log(Car1.getEngine());
console.log(Car1.getManufacturer());
console.log(Car1.getPrice());

// console.log(Car1.getManufacturer())=> course.getTitle()));
module.exports = {Car}

