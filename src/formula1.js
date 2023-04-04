const DRIVERS_DATABASE_2023 = [
    {DRIVER: 'Max Verstappen', NATIONALITY: 'NED', CAR: 'RED BULL RACING HONDA RBPT'},
    {DRIVER: 'Sergio Perez', NATIONALITY: 'MEX', CAR: 'RED BULL RACING HONDA RBPT'},
    {DRIVER: 'Fernando Alonso', NATIONALITY: 'ESP', CAR: 'ASTON MARTIN ARAMCO MERCEDES'},
    {DRIVER: 'Lewis Hamilton', NATIONALITY: 'GBR', CAR: 'MERCEDES'},
    {DRIVER: 'Carlos Sainz', NATIONALITY: 'ESP', CAR: 'FERRARI'},
    {DRIVER: 'Lance Stroll', NATIONALITY: 'CAN', CAR: 'ASTON MARTIN ARAMCO MERCEDES'},
    {DRIVER: 'George Russell', NATIONALITY: 'GBR', CAR: 'MERCEDES'},
    {DRIVER: 'Lando Norris', NATIONALITY: 'GBR', CAR: 'MCLAREN MERCEDES'},
    {DRIVER: 'Nico Hulkenberg', NATIONALITY: 'GER', CAR: 'HAAS FERRARI'},
    {DRIVER: 'Charles Leclerc', NATIONALITY: 'MON', CAR: 'FERRARI'},
    {DRIVER: 'Valtteri Bottas', NATIONALITY: 'FIN', CAR: 'ALFA ROMEO FERRARI'},
    {DRIVER: 'Esteban Ocon', NATIONALITY: 'FRA', CAR: 'ALPINE RENAULT'},
    {DRIVER: 'Oscar Piastri', NATIONALITY: 'AUS', CAR: 'MCLAREN MERCEDES'},
    {DRIVER: 'Pierre Gasly', NATIONALITY: 'FRA', CAR: 'ALPINE RENAULT'},
    {DRIVER: 'Zhou Guanyu', NATIONALITY: 'CHN', CAR: 'ALFA ROMEO FERRARI'},
    {DRIVER: 'Yuki Tsunoda', NATIONALITY: 'JPN', CAR: 'ALPHATAURI HONDA RBPT'},
    {DRIVER: 'Kevin Magnussen', NATIONALITY: 'DEN', CAR: 'HAAS FERRARI'},
    {DRIVER: 'Alexander Albon', NATIONALITY: 'THA', CAR: 'WILLIAMS MERCEDES'},
    {DRIVER: 'Logan Sargeant', NATIONALITY: 'USA', CAR: 'WILLIAMS MERCEDES'},
    {DRIVER: 'Nyck De Vries', NATIONALITY: 'NED', CAR: 'ALPHATAURI HONDA RBPT'},
];

function getDriverCar(driverName){
    return getDriverByName(driverName)?.CAR;
}

function getDriverNationality(driverName){
    return getDriverByName(driverName)?.NATIONALITY;
}

function getDriverByName(driverName){
    return DRIVERS_DATABASE_2023.find(driver => driver.DRIVER == driverName);
}

module.exports = {
    getDriverCar,
    getDriverNationality
};