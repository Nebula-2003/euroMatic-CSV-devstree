const mongoose = require("mongoose");
let softDelete = require("mongoosejs-soft-delete");

const Schema = mongoose.Schema;

const cityMasterSchema = new Schema(
    {
        city: String,
        country: {
            type: Schema.Types.ObjectId,
            ref: "countryMaster",
        },
        province: {
            type: Schema.Types.ObjectId,
            ref: "provinceMaster",
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
    { timestamps: true, collection: "cityMaster" }
);

cityMasterSchema.plugin(softDelete);

cityMasterSchema.index(
    { city: 1 },
    {
        collation: {
            locale: "en",
            strength: 2,
        },
    }
);
const CityMaster = mongoose.model("cityMaster", cityMasterSchema);

module.exports = CityMaster;
