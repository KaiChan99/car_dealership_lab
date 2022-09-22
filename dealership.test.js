const{ Dealership

} = require('./dealership');

let dealership1;

beforeEach(() => {
    dealership1 = new Dealership("Bob's dealership", 5);
});

test('it should have a name', () => {
    expect(dealership1.getName()).toBe("Bob's dealership");
});

test('it should have car spaces', () => {
    expect(dealership1.getCarSpaces()).toBe(5);
});