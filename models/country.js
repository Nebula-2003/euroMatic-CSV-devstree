const mongoose = require("mongoose");
let softDelete = require("mongoosejs-soft-delete");

const Schema = mongoose.Schema;

const countryMasterSchema = new Schema(
    {
        country: String,
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
    { timestamps: true, collection: "countryMaster" }
);

countryMasterSchema.plugin(softDelete);
countryMasterSchema.index(
    { country: 1 },
    {
        collation: {
            locale: "en",
            strength: 2,
        },
    }
);

const countryMaster = mongoose.model("countryMaster", countryMasterSchema);

module.exports = countryMaster;
