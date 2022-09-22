const {Car

}= require('./car');

let Car1;

beforeEach(() => {
 Car1 = new Car("Ferrari", 200000, "V10");
});
// console.log(Car1.getManufacturer());
// console.log(Car1.Engine);

test('it should have a manufacturer', () => {
    expect(Car1.getManufacturer()).toBe("Ferrari");
});

test('it should have a price', () => {
    expect(Car1.getPrice()).toBe(200000);
});

test('it should have a manufacturer', () => {
    expect(Car1.getEngine()).toBe("V10");
});
