const mongoose = require("mongoose");
let softDelete = require("mongoosejs-soft-delete");
const Schema = mongoose.Schema;

const usersSearchSchema = new Schema(
    {
        refIdUsers: { type: Schema.Types.ObjectId, ref: "User" },
        refIdImport: { type: Schema.Types.ObjectId, ref: "importShopCustomer" },
        // Two fields for as to use Atlas Search
        shopUser: [{ type: Schema.Types.ObjectId, ref: "Shop" }],
        shopImport: { type: Schema.Types.ObjectId, ref: "Shop" },
        shopApexAuto: [{ type: Schema.Types.ObjectId, ref: "Shop" }], // shops for which the user is apex auto customer
        firstName: { type: String, default: "" },
        lastName: { type: String, default: "" },
        fullName: { type: String, default: "" },
        phoneNumber: { type: String, required: false, default: "" },
        company: { type: String, default: "" },
        email: { type: String, default: "" },
        vehicle: [{ type: String, default: "" }],
        /**
         *  Need to convert to array of object
         */
        // vehicle: [{ desc: { type: String, default: "" }, refIdVehicle: { type: Schema.Types.ObjectId, ref: "Vehicle" } }],
        isImportData: { type: Boolean, default: false },
        chatUserId: { type: String, default: "" },
        chatRoleId: { type: String, default: "" },
        profilePic: { type: String, default: "" },
    },
    { timestamps: true, collection: "usersSearch" }
);

usersSearchSchema.plugin(softDelete);

const UsersSearch = mongoose.model("usersSearch", usersSearchSchema);

module.exports = UsersSearch;
