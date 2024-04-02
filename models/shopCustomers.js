const mongoose = require("mongoose");
let softDelete = require("mongoosejs-soft-delete");
const { ROLE, CREATION_PLATEFORM, GENERATE_METHOD } = require("../config/constant.config");

const Schema = mongoose.Schema;

const shopCustomersSchema = new Schema(
    {
        shop: { type: Schema.Types.ObjectId, ref: "Shop" },
        customer: {
            type: Schema.Types.ObjectId,
            ref: "Users",
        },
        generatorRole: {
            type: String,
            enum: Object.values(ROLE),
        },
        creationPlatform: {
            type: String,
            enum: Object.values(CREATION_PLATEFORM),
        },
        generateMethod: {
            type: String,
            enum: Object.values(GENERATE_METHOD),
        },
        isShopCreated: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true, collection: "shopCustomers" }
);

shopCustomersSchema.plugin(softDelete);

const shopCustomers = mongoose.model("shopCustomers", shopCustomersSchema);

module.exports = shopCustomers;
