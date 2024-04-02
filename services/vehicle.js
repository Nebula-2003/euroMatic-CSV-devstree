const vehicleMakeModel = require('../models/vehicleMake');
const vehicleModelModel = require('../models/vehicleModel');
const vehicleTrimModel = require('../models/vehicleTrim');
const vehicleModel = require('../models/vehicle');


exports.detailsToIds = async ({ make, model, trim, ...rest }) => {
    const makeObj = await vehicleMakeModel.findOne({ name: make }).collation({ locale: "en", strength: 2 }).select('_id');
    const modelObj = await vehicleModelModel.findOne({ name: model }).collation({ locale: "en", strength: 2 }).select('_id');
    const trimObj = await vehicleTrimModel.findOne({ name: trim }).collation({ locale: "en", strength: 2 }).select('_id');
    return { makeId: makeObj?._id, modelId: modelObj?._id, trimId: trimObj?._id, ...rest };
}

exports.insertVehicle = async (vehicleData) => {
    const { make, model, trim, year, vin, userId, licenseNumber } = vehicleData;
    const { makeId, modelId, trimId } = await this.detailsToIds({ make, model, trim });
    const vehicle = await vehicleModel.insertOne({
        user: userId,
        vehicleMake: makeId,
        vehicleModel: modelId,
        vehicleModelTrim: trimId,
        year,
        vin,
        licenseNumber,
        createdBy: adminId,
        updatedBy: adminId,
    });
    return vehicle;
}


exports.insertManyVehicles = async (vehiclesData, userId) => {
    return await vehicleModel.insertMany(vehiclesData.map(vehicle => ({
        vehicleMake: vehicle.makeId,
        vehicleModel: vehicle.modelId,
        vehicleModelTrim: vehicle.trimId,
        year: vehicle.year,
        vin: vehicle.vin,
        licenseNumber: vehicle.licenseNumber,
        user: userId
    })));
}