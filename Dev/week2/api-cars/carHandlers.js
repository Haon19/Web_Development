const Car = require("./carLib");

const getAllCars = (req, res) => {
    const cars = Car.getAllCars();
    res.json(cars);
};