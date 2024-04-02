const mongoose = require("mongoose");
let softDelete = require("mongoosejs-soft-delete");

const Schema = mongoose.Schema;

const vehicleSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "Users",
        },
        vehicleMake: {
            type: Schema.Types.ObjectId,
            ref: "vehicleMake",
        },
        vehicleModel: {
            type: Schema.Types.ObjectId,
            ref: "vehicleModel",
        },
        vehicleModelTrim: {
            type: Schema.Types.ObjectId,
            ref: "vehicleModelTrim",
        },
        year: Number,
        vin: String,
        licenseNumber: String,
        odo: String,
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "Users",
        },
        updatedBy: {
            type: Schema.Types.ObjectId,
            ref: "Users",
        },
        deletedBy: {
            type: Schema.Types.ObjectId,
            ref: "Users",
        },
        odoUpdatedAt: Date,
    },
    { timestamps: true, collection: "vehicle" }
);

vehicleSchema.plugin(softDelete);

const vehicle = mongoose.model("vehicle", vehicleSchema);

module.exports = vehicle;
