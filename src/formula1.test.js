const formula1 = require('./formula1')
 
test("Max Verstappen car's should be RED BULL RACING HONDA RBPT", () => {
    expect(formula1.getF1DriverCar('Max Verstappen')).toBe('RED BULL RACING HONDA RBPT');
});

test("Yuki Tsunoda nationality should be JPN", () => {
    expect(formula1.getF1DriverNationality('Yuki Tsunoda')).toBe('JPN');
});