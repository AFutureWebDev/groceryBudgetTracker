let GroceryModel = require("../Models/groceryModel");

// get - returns all vehicles
exports.list =  function list(request, response) {
    GroceryModel.find(function (err, groceries) {
        if (err) return console.error(err);
        return response.json(groceries);
    })
}

// get one vehicle by id
exports.show = function show(request, response) {
    GroceryModel.findById(request.params.groceryId, function (err, groceries){
        if (err) return console.error(err);
        return response.json(grocery);
    })
}
   
// post
exports.create =  function create(request, response) {
    const newGrocery = new GroceryModel(request.body);
    newGrocery.save((err,v) => {
        response.json(v);
    });
}
   
// // put
// exports.update =  function update(request, response) {
//     let grocery = vehicles.find(i => i._id == request.params.vehicleId);
//     vehicle.make = body.make;
//     response.json(vehicle);
// }

// // delete
// exports.remove =  function remove(request, response) {
//     let vehicle = vehicles.find(i => i._id == request.params.vehicleId);
//     vehicle.isActive = false;
//     response.send("deleted");
//    }