const mongoose = require("mongoose");
let softDelete = require("mongoosejs-soft-delete");

const Schema = mongoose.Schema;

const vehicleModelSchema = new Schema(
    {
        name: String,
        vehicleMake: {
            type: Schema.Types.ObjectId,
            ref: "vehicleMake",
        },
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
    },
    { timestamps: true, collection: "vehicleModel" }
);

vehicleModelSchema.plugin(softDelete);
vehicleModelSchema.index(
    { name: 1 },
    {
        collation: {
            locale: "en",
            strength: 2,
        },
    }
);

const vehicleModel = mongoose.model("vehicleModel", vehicleModelSchema);

module.exports = vehicleModel;
