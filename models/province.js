const mongoose = require("mongoose");
let softDelete = require("mongoosejs-soft-delete");

const Schema = mongoose.Schema;

const provinceMasterSchema = new Schema(
    {
        province: String,
        country: {
            type: Schema.Types.ObjectId,
            ref: "countryMaster",
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
    { timestamps: true, collection: "provinceMaster" }
);

provinceMasterSchema.plugin(softDelete);
provinceMasterSchema.index(
    { province: 1 },
    {
        collation: {
            locale: "en",
            strength: 2,
        },
    }
);

const provinceMaster = mongoose.model("provinceMaster", provinceMasterSchema);

module.exports = provinceMaster;
