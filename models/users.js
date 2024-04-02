const mongoose = require("mongoose");
let softDelete = require("mongoosejs-soft-delete");
const {
    ROLE,
    USER_STATUS,
    GENDER,
    DEVICE_TYPE,
    LOGIN_TYPE,
    CREATION_PLATEFORM,
    CREATED_FROM,
    SUBSCRIPTION_PLATFORMS,
    GENERATE_METHOD,
} = require("../config/constant.config");

const Schema = mongoose.Schema;

const usersSchema = new Schema(
    {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        fullName: {
            type: String,
        },
        // email cannot be unique , customer can be mechanic
        email: {
            type: String,
            unique: false,
            required: false,
            default: "",
        },
        addressDetailObject: Object,
        addressLatLong: {
            type: { type: String, default: "Point" },
            coordinates: {
                type: [Number],
                index: "2dsphere",
                default: [0, 0],
            },
        },
        streetAddress: { type: String },
        city: { type: Schema.Types.ObjectId, ref: "cityMaster" },
        province: { type: Schema.Types.ObjectId, ref: "provinceMaster" },
        postalCode: { type: String },
        country: { type: Schema.Types.ObjectId, ref: "countryMaster" },
        numberOfEmployes: { type: String },
        phoneNumber: {
            type: String,
            required: false,
            default: "",
        },
        password: {
            type: String,
            required: false,
        },
        businessName: {
            type: String,
        },
        shop: {
            type: Schema.Types.ObjectId,
            ref: "Shop",
        },
        profilePic: {
            type: String,
            required: false,
            default: "",
        },
        otp: {
            type: Number,
            required: false,
            default: 0,
        },
        fcmToken: {
            type: String,
        },
        deviceType: {
            type: String,
            enum: [DEVICE_TYPE.ANDROID, DEVICE_TYPE.IOS, ""],
        },
        deviceId: {
            type: String,
        },
        deviceName: {
            type: String,
        },
        isNotificationOn: {
            type: Boolean,
            default: true,
        },
        loginTime: {
            type: Date,
        },
        googleId: String,
        appleId: String,
        facebookId: String,
        loginType: {
            type: String,
            enum: [LOGIN_TYPE.NORMAL, LOGIN_TYPE.GOOGLE, LOGIN_TYPE.APPLE, LOGIN_TYPE.FACEBOOK],
            default: LOGIN_TYPE.NORMAL,
        },
        status: {
            type: String,
            enum: [USER_STATUS.VERIFIED, USER_STATUS.PENDING, USER_STATUS.DEACTIVATED, USER_STATUS.REJECTED, USER_STATUS.DRAFT],
            default: USER_STATUS.PENDING,
            required: false,
        },
        roleManagement: {
            type: Schema.Types.ObjectId,
            ref: "roles",
        },
        role: {
            type: String,
            required: false,
        },
        isFirstTimeLogin: {
            type: Boolean,
            default: true,
        },
        countryCode: {
            type: String,
        },
        isShopOwnerApproved: {
            type: Boolean,
            default: false,
        },
        approvedBy: {
            type: Schema.Types.ObjectId,
            ref: "Users",
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
        approvedAt: {
            type: Date,
        },
        creationPlateform: {
            type: String,
            enum: [CREATION_PLATEFORM.ADMIN, CREATION_PLATEFORM.CUSTOMER_APP, CREATION_PLATEFORM.MECHANIC_APP, CREATION_PLATEFORM.WEB_APP],
        },
        createdFrom: {
            type: String,
            enum: [CREATED_FROM.SHOP_CREATED, CREATED_FROM.APEX_AUTO_APP],
        },
        rejectedBy: {
            type: Schema.Types.ObjectId,
            ref: "Users",
        },
        signUp: {
            type: Schema.Types.ObjectId,
            ref: "signUp",
        },
        stripeCustomerId: {
            type: String,
        },
        subscription: {
            subscriptionUserId: {
                type: Schema.Types.ObjectId,
                ref: "subscriptionUserMaster",
            },
            allowedPlatforms: [{ type: String, enum: Object.values(SUBSCRIPTION_PLATFORMS) }],
        },
        userTimeZone: String,
        rejectedAt: Date,
        mobilenotificationsPushNotification: { type: Boolean, default: true },
        emailNotificationsNewAppointments: { type: Boolean, default: true },
        emailNotificationsCancellations: { type: Boolean, default: true },
        emailNotificationsEstimates: { type: Boolean, default: true },
        emailNotificationsMessagefromMechanics: { type: Boolean, default: true },
        emailNotificationsPromotionsandAnnouncements: { type: Boolean, default: true },
        emailNotificationsReschedules: { type: Boolean, default: true },
        emailNotificationsApprovals: { type: Boolean, default: true },
        emailNotificationsMessagefromCustomer: { type: Boolean, default: true },
        overallPauseAppointment: { type: Boolean },
        overallPausedAppointmentAt: Date,
        chatUserId: { type: String, default: "" },
        chatRoleId: { type: String, default: "" },
        formattedShopOwnerPhoneNumber: String,
        formattedCustomerPhoneNumber: String,
        passwordUpdatedAt: { type: Date },
        company: {
            type: String,
            default: "",
        },
        allowedNotifications: Object,
        allowedEmails: Object,
        mobileNotificationsNewAppointments: { type: Boolean, default: true },
        mobileNotificationsCancellations: { type: Boolean, default: true },
        mobileNotificationsEstimates: { type: Boolean, default: true },
        mobileNotificationsMessageFromMechanics: { type: Boolean, default: true },
        mobileNotificationsPromotionsandAnnouncements: { type: Boolean, default: true },
        mobileNotificationsReschedules: { type: Boolean, default: true },
        mobileNotificationsApprovals: { type: Boolean, default: true },
        mobileNotificationsMessageFromCustomer: { type: Boolean, default: true },
        isLoginRestricted: { type: Boolean, default: false },
        loginRestrictedAfter: { type: Date },
    },
    { timestamps: true }
);

usersSchema.plugin(softDelete);
usersSchema.index({ phoneNumber: 1 }, { background: true });

const Users = mongoose.model("Users", usersSchema);


module.exports = Users;
