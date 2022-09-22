const{ Dealership} = require('./dealership');
const{ Car} = require('./car');





   let Dealership1 = new Dealership("Bob's dealership", 5);

   let Car1 = new Car("Ferrari", 200000, "V10");

   let Car2 = new Car("Mercedes", 80000, "V10");


test('it should have a name', () => {
    expect(Dealership1.getName()).toBe("Bob's dealership");
});

test('it should have car spaces', () => {
    expect(Dealership1.getCarSpaces()).toBe(5);
});

test('it should have 2 cars in dealership', () => {
    Dealership1.addCars(Car1);
    Dealership1.addCars(Car2);

    expect(Dealership1.getCars().length).toBe(2);
});

// Using toStrictEqual works and passes the test


test('it should return an Array containing cars manufacturer', () => {
    

    let manufactureList = Dealership1.getCars().map((cars)=> cars.getManufacturer());

    expect(manufactureList).toStrictEqual(["Ferrari", "Mercedes"]);
});

test('it should return Car2 due to filter', () => {
let filteredCars =  Dealership1.getCars().filter(function(cars) {
    return cars.getManufacturer() == "Mercedes";
});

expect(filteredCars).toStrictEqual([Car2]);

});

test('it should be able to sum values of all cars in the dealership', () => {
    let sumCarValue = Dealership1.getCars().reduce((accumulator, object) => {
        return accumulator + object.getPrice();
     }, 0);
    
    expect(sumCarValue).toBe(280000);
    
    });
