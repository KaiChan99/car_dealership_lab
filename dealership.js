const Dealership = function(name, carSpaces){
    let _name = name;
    let _carSpaces = carSpaces;
    let _cars= [];

    this.getName = ()=> _name;
    this.setName = (name)=> _name = name;
    this.getCarSpaces = ()=> _carSpaces;
    this.setCarSpaces = (carSpaces)=> _carSpaces = carSpaces;
    this.addCars = (car) => _cars.push();
    this.removeCars = (car) => _cars.splice(_cars.indexOf((car), 1));
    this.getCars = () => _cars;
}

const Dealership1 = new Dealership("Bob's dealership", 5);
const Dealership2 = new Dealership("Steve's dealership", 5);

// Trying different approach

// const DealerName = (dealership)=> Dealership.getName();
// const CarSpaces = (dealership)=> Dealership.getCarSpaces();
// const ListCars = (dealership)=> Dealership.getCars();


module.exports = {Dealership}