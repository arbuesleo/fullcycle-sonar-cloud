const formula1 = require('./formula1')
 
test("Max Verstappen car's should be RED BULL RACING HONDA RBPT", () => {
    expect(formula1.getF1DriverCar2('Max Verstappen')).toBe('RED BULL RACING HONDA RBPT');
});