const mongoose = require("mongoose");
let softDelete = require("mongoosejs-soft-delete");

const Schema = mongoose.Schema;

const vehicleModelTrimSchema = new Schema(
    {
        name: String,
        vehicleMake: {
            type: Schema.Types.ObjectId,
            ref: "vehicleMake",
        },
        vehicleModel: {
            type: Schema.Types.ObjectId,
            ref: "vehicleModel",
        },
        year: {
            type: String,
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
    { timestamps: true, collection: "vehicleModelTrim" }
);

vehicleModelTrimSchema.plugin(softDelete);
vehicleModelTrimSchema.index(
    { name: 1 },
    {
        collation: {
            locale: "en",
            strength: 2,
        },
    }
);

const vehicleModelTrim = mongoose.model("vehicleModelTrim", vehicleModelTrimSchema);

module.exports = vehicleModelTrim;
