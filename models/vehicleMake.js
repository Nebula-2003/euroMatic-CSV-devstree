const mongoose = require("mongoose");
let softDelete = require("mongoosejs-soft-delete");

const Schema = mongoose.Schema;

const vehicleMakeSchema = new Schema(
    {
        name: String,
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
    { timestamps: true, collection: "vehicleMake" }
);

vehicleMakeSchema.plugin(softDelete);
vehicleMakeSchema.index(
    { name: 1 },
    {
        collation: {
            locale: "en",
            strength: 2,
        },
    }
);

const vehicleMake = mongoose.model("vehicleMake", vehicleMakeSchema);

module.exports = vehicleMake;
