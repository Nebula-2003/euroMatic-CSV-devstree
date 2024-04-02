module.exports = {
    STORAGE_PATH: "public/storage",

    ROLE: {
        SUPER_ADMIN: "super_admin",
        USER: "user",
        MECHANIC: "mechanic",
        GUEST: "guest",
        CUSTOMER: "customer",
        SHOPOWNER: "shop_owner",
    },

    USER_STATUS: {
        VERIFIED: "verified",
        PENDING: "pending",
        DEACTIVATED: "deactivated",
        BLOCKED: "blocked",
        REJECTED: "rejected",
        DRAFT: "draft",
    },

    COUNTRY_CODES: {
        CANADA: "CA",
        INDIA: "IN",
    },

    GENDER: {
        MALE: "male",
        FEMALE: "female",
    },

    DEVICE_TYPE: {
        ANDROID: "android",
        IOS: "ios",
        WEB: "web",
        NOT_EXIST: "",
    },

    LANGUAGE_CODE: {
        EN: "en",
        AR: "ar",
    },

    LOGIN_TYPE: {
        NORMAL: "normal",
        GOOGLE: "google",
        APPLE: "apple",
        FACEBOOK: "facebook",
    },

    STATUS: {
        IS_ACTIVE: "active",
        IS_DEACTIVE: "deactive",
    },

    AMOUNT_TYPE: {
        FIXED: "fixed",
        // INPERCENT: "in_percent",
    },

    CANCELLATION_TYPE: {
        STANDARD: "standard",
        NO_SHOW: "no_show",
    },

    RESCHEDULING_TYPE: {
        STANDARD: "standard",
        // NO_SHOW: "no_show",
    },

    POLICY_TYPE: {
        CANCELLATION: "cancellation",
        RESCHEDULING: "rescheduling",
    },

    PARTS_PROVIDER: {
        OEM: "oem",
        AFTER_MARKET: "after_market",
        USED: "used",
    },

    DOCUMENT: {
        CERTIFICATE_310Q: "certificate_310Q",
        CERTIFICATE_310S: "certificate_310S",
        CERTIFICATE_310B: "certificate_310B",
        CERTIFICATE_310D: "certificate_310D",
    },

    DOC_VERIFICATION_STATUS: {
        NOT_APPLIED: "not_applied",
        IN_PROGRESS: "in_progress",
        VERIFIED: "verified",
        REJECTED: "rejected",
        REVERFICATION_IN_PROGRESS: "reverfication_in_progress",
    },

    IMAGES: {
        // SHOP: "storage/shop", //For image upload on S3
        SHOP: "shop", //For image upload on server
    },

    SHOP_STATUS: {
        VERIFIED: "verified",
        PENDING: "pending",
        DRAFT: "draft",
    },

    SHOP_HOURS_TYPE: {
        BUSINESS: "business",
        OPERATION: "operation",
    },

    DAYS: {
        MONDAY: "Monday",
        TUESDAY: "Tuesday",
        WEDNESDAY: "Wednesday",
        THURSDAY: "Thursday",
        FRIDAY: "Friday",
        SATURDAY: "Saturday",
        SUNDAY: "Sunday",
    },

    PRICING_TYPE: {
        FIXED: "fixed",
        LABORS_AND_PARTS: "labor_&_parts",
    },

    ESTIMATE_SERVICE_TYPE: {
        LABOR: "labor",
        PARTS: "parts",
    },

    ESTIMATE_STATUS: {
        SENT: "sent",
        DRAFT: "draft",
    },

    ESTIMATE_REQUEST_STATUS: {
        SENT: "sent",
        DECLINE: "decline",
        ACCEPT: "accept",
        DRAFT: "draft",
        RESPONDED: "responded",
    },

    ESTIMATE_REQUEST_STATUS_TEXT: {
        WAITING: "waiting",
        ACCEPTED: "accepted",
        DECLINED: "declined",
    },

    INVOICE_STATUS: {
        SENT: "sent",
        DRAFT: "draft",
    },

    INVOICE_SERVICE_TYPE: {
        LABOR: "labor",
        PARTS: "parts",
    },

    CREATION_PLATEFORM: {
        ADMIN: "admin",
        CUSTOMER_APP: "customer_app",
        MECHANIC_APP: "mechanic_app",
        WEB_APP: "web",
        MOBILE: "mobile",
    },

    SHOP_HOLIDAY_TYPES: {
        SINGLE_FULL_DAY: "single_full_day",
        MULTIPLE_FULL_DAYS: "multiple_full_days",
        SINGLE_DAY_WITH_SOME_HOURS: "single_day_with_some_hours",
        MULTIPLE_DAYS_WITH_SOME_HOURS: "multiple_days_with_some_hours",
    },

    SHOP_SERVICE_PRICE_TYPES: {
        FIXED: "fixed",
        RANGE: "range",
        NO_PRICE: "no_price",
    },

    SEQUENCE_PREFIX: {
        EST: "EST",
        ESTR: "ESTR",
        INVOICE: "",
        APPOINTMENT: "",
    },

    PREFERANCES: {
        PHONE: "phone",
        EMAIL: "email",
        MESSAGE: "message",
    },

    TIMEZONE: {
        UTC: "UTC",
        CANADA: "Canada/Eastern",
    },

    NOTIFICATION_TYPE: {
        MOBILE: "mobile",
        EMAIL: "email",
    },

    SEND_NOTIFICATION: {
        SUCCESS: "success",
        ERROR: "error",
    },

    E_SIGNATURE: {
        ORG_ID: "800E1E9F64E99E0D0A495FB4@AdobeOrg",
        CLIENT_SECRETS: "p8e-R-U0TthUyVv11_aEGxSBDkn1VlGotqGQ",
        CLIENT_ID: "7e48726bc60e490eb468e63340c0dd0d",
        SCOPES: ["openid", "AdobeID", "DCAPI"],
        TECHNICAL_ACCOUNT_ID: "93B61E8E64EADA6E0A495CE2@techacct.adobe.com",
        TECHNICAL_ACCOUNT_EMAIL: "c7c04d1a-2da1-41a3-a15e-adb61e6af780@techacct.adobe.com",
        REDIRECT_URL: "https://www.myapp.com/OAuth/callback",
    },

    STRIPE_SUBSCRIPTION_SETTINGS: {
        PAYMENT_BEHAVIOR: "default_incomplete",
        SAVE_DEFAULT_PAYMENT_METHOD: "on_subscription",
        EXPAND: "latest_invoice.payment_intent",
    },

    SUBSCRIPTION_USER_MASTER_ENUM: {
        UNSUBSCRIBED: "unsubscribed",
        SUBSCRIBED: "subscribed",
        CANCELLED: "cancelled",
    },

    SUBSCRIPTION_INTERVAL: {
        ONCE: "once",
        DAY: "day",
        WEEK: "week",
        MONTH: "month",
        YEAR: "year",
        CUSTOM: "custom",
    },

    SHOP_SUBSCRIPTION_STATUS: {
        ACTIVE: "active",
        EXPIRED: "expired",
        NOT_ACTIVE: "not-active",
        DELETED: "deleted",
    },

    STRIPE_WEBHOOK_EVENTS: {
        INVOICE_PAYMENT_SUCCEEDED: "invoice.payment_succeeded",
        INVOICE_PAYMENT_FAILED: "invoice.payment_failed",
        CUSTOMER_SUBSCRIPTION_DELETED: "customer.subscription.deleted",
        CUSTOMER_SUBSCRIPTION_UPDATED: "customer.subscription.updated",
        INVOICE_UPDATED: "invoice.updated",
    },

    EMAIL_LOGS_STATUS: {
        SENT: "sent",
        FAILED: "failed",
    },

    CERTIFICATE_TYPES: {
        CERTIFICATE_310Q: "certificate_310Q",
        CERTIFICATE_310S: "certificate_310S",
        CERTIFICATE_310B: "certificate_310B",
        CERTIFICATE_310D: "certificate_310D",
    },

    STRIPE_PAYMENT_TYPES: {
        CARD: "card",
    },

    ESTIMATE_NOTIFICATION: {
        ESTIMATE_ACCEPTED: "Estimate Request Accepted",
        ESTIMATE_DECLINED: "Estimate Request Declined",
        ESTIMATE_SENT: "Estimate Request Sent",
        ESTIMATE_GENERATED: "Estimate Generated By Mechanic",
        ESTIMATE_PAYMENT_ON_HOLD: "Estimate Payment On Hold",
        ESTIMATE_PAYMENT_SUCCESSFUL: "Estimate Payment Successful",
        ESTIMATE_COMPLETED: "Estimate Complete",
    },

    INVOICE_NOTIFICATION: {
        // INVOICE_PREPARED: "Estimate Cost Invoice Pdf",
        INVOICE_PREPARED: "Invoice Created",
    },

    APPOINTMENT_CONTACT_PREFERENCES: {
        PHONE: "phone",
        EMAIL: "email",
        MESSAGE: "message",
    },

    APPOINTMENT_WAITING_ON_SITE: {
        WAIT_ON_SITE: "wait_on_site",
        DROPPING_OFF_CAR: "dropping_off_car",
    },

    APPOINTMENT_REQUEST_STATUS: {
        PENDING: "pending",
        ACCEPT: "accept",
        DECLINE_BY_SHOP_OWNER: "decline_by_shop_owner",
        DECLINE_BY_CUSTOMER: "decline_by_customer",
        PROPOSE_NEW_TIME_BY_SHOP_OWNER: "propose_new_time_by_shop_owner",
        PROPOSE_NEW_TIME_BY_CUSTOMER: "propose_new_time_by_customer",
        DECLINE: "decline",
        RESCHEDULE: "reschedule",
        NO_ACTION_CUSTOMER: "no_action_from_customer",
        NO_ACTION_SHOP_OWNER: "no_action_from_shop_owner",
        CANCELLED_BY_SHOP_OWNER: "cancelled_by_shop_owner",
        CANCELLED_BY_CUSTOMER: "cancelled_by_customer",
    },

    APPOINTMENT_STATUS: {
        WAITING_FOR_DROP_OFF: "waiting_for_drop_off",
        VEHICLE_DROPPED_OFF: "vehicle_dropped_off",
        IN_PROGRESS: "in_progress",
        READY_FOR_PICK_UP: "ready_for_pick_up",
        CUSTOMER_PAID: "customer_paid",
        MARK_AS_NO_SHOW: "mark_as_no_show",
    },

    ESIGNATURE_TYPE: {
        ESTIMATE: "estimate",
        APPOINTMENT: "appointment",
    },

    NOTIFICATION_MASTER_TYPES: {
        CANCELLATION: "Cancellations",
        APPOINTMENT_REQUESTS_RESCHEDULES: "Appointment Requests Reschedules",
        ESTIMATE_REQUESTS: "Estimate Requests",
        PROMOTIONS_AND_ANNOUNCEMENTS: "Promotions and Announcements",
        INVOICE: "Invoice pdf sent to customer's mail address",
        APPOINTMENT_REQUEST: "Appointment Requests",
        REMAINDER: "Remainder",
        ESTIMATE: "Estimate pdf sent to customer's mail address",
        APPOINTMENT_CREATED: "Appointment Created",
        PROPOSED_NEW_TIME: "Proposed new time by mechanic",
        READY_FOR_PICK_UP: "vehicle ready for pickup",
        PAYMENT: "Payment",
    },

    APPOINTMENT_SERVICE_TYPE: {
        LABOR: "labor",
        PARTS: "parts",
    },

    APPOINTMENT_NOTIFICATION: {
        APPOINTMENT_ACCEPTED: "Appointment Request Accepted",
        APPOINTMENT_DECLINED: "Appointment Request Declined",
        APPOINTMENT_REQUEST: "Appointment Request",
        APPOINTMENT_CANCEL: "Appointment Cancelled",
        // APPOINTMENT_RESCHEDULED: "Appointment Rescheduled Request",
        APPOINTMENT_RESCHEDULED: "Reschedule Request",
        // APPOINTMENT_RESCHEDULED_PAY_ON_HOLD: "Appointment Rescheduled Payment On Hold",
        APPOINTMENT_REMAINDER: "Appointment Reminder",
        APPOINTMENT_RESCHEDULE_REQUEST_DECLINED: "Appointment Reschedule Request Declined",
        APPOINTMENT_CREATED: "Appointment Created",
        PROPOSE_NEW_TIME_BY_SHOP_OWNER: "Proposed New Time",
        APPOINTMENT_RESCHEDULE_REQUEST_ACCEPTED: "Appointment Reschedule Request Accepted",
        READY_FOR_PICK_UP: "Ready For Pickup",
        APPROVAL_NEEDED: "Approval Needed",
        APPROVAL_REQUEST: "Approval Request",
        // PENDING_APPOINTMENT_REQUEST: "Pending appointment requests.",
        VEHICLE_DROPPED_OFF: "Vehicle Dropped Off",
        IN_PROGRESS: "In Progress",
        APPOINTMENT_RESCHEDULED_BY_MECHANIC: "Appointment Rescheduled",
        UNUSED_APPOINTMENT_REMINDER: "Outstanding Appointments",
        APPOINTMENT_MARK_AS_NO_SHOW: "No Show",
    },

    POLICY_UNTILL_TYPE: {
        DAYS: "days",
        HOURS: "hours",
    },

    REQUEST_TYPE: {
        APPROVAL_REQUEST: "approvalRequest",
    },

    APPOINTMENT_APPROVAL_STATUS: {
        WAITING: "waiting",
        APPROVED: "approved",
        DECLINED: "declined",
        DEFERRED: "deferred",
    },

    NS_WWFAQ_TYPE: {
        UP_VOTES: "up_votes",
        DOWN_VOTES: "down_votes",
    },

    FILE: {
        DOCUMENTS: "export",
    },

    NOTIFICATION_MODULE: {
        ESTIMATE_REQUEST: "estimateRequest",
        INVOICE: "invoice",
        ESTIMATE: "estimate",
        APPOINTMENT: "appointment",
    },

    NOTIFICATION_TYPES: {
        APPOINTMENT_CREATED: "appointmentCreated",
        NEW_APPOINTMENT_REQUEST: "newAppointmentRequest",
        ACCEPT_APPOINTMENT_REQUEST: "acceptAppointmentRequest",
        DECLINE_APPOINTMENT_REQUEST: "declineAppointmentRequest",
        APPOINTMENT_RESCHEDULE_REQUEST: "appointmentRescheduleRequest",
        ACCEPT_RESCHEDULE_APPOINTMENT: "acceptRescheduleAppointment",
        DECLINE_RESCHEDULE_APPOINTMENT: "declineRescheduleAppointment",
        ACCEPT_PROPOSE_NEW_TIME_APPOINTMENT: "acceptProposeNewTimeAppointment",
        DECLINE_PROPOSE_NEW_TIME_APPOINTMENT: "declineProposeNewTimeAppointment",
        CANCEL_APPOINTMENT: "cancelAppointment",
        PROPOSE_NEW_TIME_FOR_APPOINTMENT: "proposeNewTimeForAppointment",
        VEHICLE_READY_TO_PICKUP: "vehicleReadyToPickup",
        APPOINTMENT_REMINDER: "appointmentReminder",
        APPROVAL_NEEDED: "approvalNeeded",
        APPROVAL_REQUEST: "approvalRequest",
        APPROVAL_REQUEST_RESPONDED: "approvalRequestResponded",
        VEHICLE_DROPPED_OFF: "vehicleDroppedOff",
        IN_PROGRESS: "inProgress",
        NO_SHOW: "appointmentNoShow",

        NEW_ESTIMATE_REQUEST: "newEstimateRequest",
        ACCEPT_ESTIMATE_REQUEST: "acceptEstimateRequest",
        DECLINE_ESTIMATE_REQUEST: "declineEstimateRequest",
        ESTIMATE_INVOICE_COST_PDF_SENT_ON_EMAIL: "estimateInvoiceCostPdfSentOnEmail",
        ESTIMATE_PDF_SENT_ON_EMAIL: "estimatePdfSentOnEmail",

        ESTIMATE_PAYMENT_ON_HOLD: "estimatePaymentOnHold",
        CANCEL_APPOINTMENT_PAYMENT_SUCCESSFUL: "cancelAppointmentPaymentSuccessfulDeducted",
        CANCEL_APPOINTMENT_PAYMENT_SUCCESSFUL_RECIEVED: "cancelAppointmentPaymentSuccessfulRecieved",
        APPOINTMENT_RESCHEDULE_REQUEST_PAYMNET_ON_HOLD: "appointmentRescheduleRequestPaymnetOnHold",
        APPOINTMENT_RESCHEDULE_PAYMENT_SUCCESSFUL: "appointmentReschedulePaymentSuccessfullyDeducted",
        APPOINTMENT_RESCHEDULE_PAYMENT_SUCCESSFUL_RECIEVED: "appointmentReschedulePaymentSuccessfullyRecieved",

        ESTIMATE_PAYMENT_SUCCESSFUL: "estimatePaymentSuccessful",
        // PENDING_APPOINTMENT_REQUEST: "pendingAppointmentRequests",
        APPOINTMENT_RESCHEDULED_BY_MECHANIC: "appointmentRescheduled",
        UNUSED_APPOINTMENT_REMINDER: "outstandingAppointment",
    },
    STRIPE_OAUTH_OPTIONS: {
        AUTHORIZATION_CODE: "authorization_code",
    },
    STRIPE_HELPER: {
        CAD: "cad",
        CAPTURE_METHOD_MANUAL: "manual",
        RESPONSE_TYPE_CODE: "code",
        SCOPE_READ_WRITE: "read_write",
        PAYMENT_METHOD_CARD: "card",
    },
    STRIPE_MIN_PRICE: {
        USD: "0.50",
        AUD: "0.50",
        BGN: "1.00",
        BRL: "0.50",
        CAD: "0.50",
        CHF: "0.50",
        CZK: "15.00",
        DKK: "2.50",
        EUR: "0.50",
        GBP: "0.30",
        HKD: "4.00",
        INR: "0.50",
        //INR: "40.00",
        JPY: "50",
        MXN: "10.00",
        MYR: "2.00",
        NOK: "3.00",
        NZD: "0.50",
        PLN: "2.00",
        RON: "2.00",
        SEK: "3.00",
        SGD: "0.50",
    },
    TRANSACTION_MODEL_TYPE_ENUM_OPTIONS: {
        ESTIMATE_PAYMENT: "estimatePayment",
        CANCELLATION_PAYMENT: "cancellationPayment",
        RESCHEDULING_PAYMENT: "reschedulingPayment",
        PAYOUT_PAYMENT: "payoutPayment",
        SUBSCRIPTION_PAYMENT: "subscriptionPayment",
        NO_SHOW_PAYMENT: "noShowPayment",
    },
    TRANSACTION_MODEL_REFUND_STATUS: {
        NOT_INITIATED: "not_initiated",
        INITIATED: "initiated",
        COMPLETED: "completed",
    },
    TRANSACTION_MODEL_PAYOUT_STATUS: {
        NOT_APPROVED: "not_approved",
        APPROVED: "approved",
        REJECTED: "rejected",
    },
    PAYMENT_STATUS: {
        SUCCEEDED: "succeeded",
        REQUIRES_CAPTURE: "requires_capture",
    },

    STRIPE_ERROR_TYPES: {
        STRIPE_CARD_ERROR: "StripeCardError",
        STRIPE_INVALID_REQUEST_ERROR: "StripeInvalidRequestError",
        STRIPE_CONNECTION_ERROR: "StripeConnectionError",
        STRIPE_API_ERROR: "StripeAPIError",
        STRIPE_AUTHENTICATION_ERROR: "",
        STRIPE_IDEMPOTENCY_ERROR: "StripeIdempotencyError",
        STRIPE_PERMISSION_ERROR: "StripePermissionError",
        STRIPE_RATE_LIMIT_ERROR: "StripeRateLimitError",
        STRIPE_SIGNATURE_VERIFICATION_ERROR: "StripeSignatureVerificationErrors",
    },

    PAYMENT_TYPE: {
        CREDIT: "credit",
        DEBIT: "debit",
    },

    NOTIFICATION_TITLE: {
        APPOINTMENT_CANCELED_PAYMENT_SUCCESSFUL: "Appointment Cancelation Payment Successful",
        APPOINTMENT_CANCELED_PAYMENT_SUCCESSFUL_RECIEVED: "Appointment Cancelation Payment Successfully Recieved",
        APPOINTMENT_RESCHEDULED_PAY_ON_HOLD: "Appointment Rescheduled Payment On Hold",
        APPOINTMENT_RESCHEDULED_PAY_RECIEVED: "Appointment Rescheduled Payment SuccessfuLly Recieved",
        APPOINTMENT_RESCHEDULED_PAY_SENT: "Appointment Rescheduled Payment Successfully Sent",
    },

    ACTIVITY_TYPE: {
        LOGIN: "login",
        LOGOUT: "logout",
        CUSTOMER_CREATED: "customer created",
        CUSTOMER_UPDATED: "customer updated",
        VEHICLE_CREATED: "vehicle created",
        VEHICLE_UPDATED: "vehicle updated",
        VEHICLE_DELETED: "Vehicle deleted",
        MECHANIC_CREATED: "mechanic created",
        MECHANIC_UPDATED: "mechanic updated",
        ADMIN_CREATED: "admin created",
        ADMIN_UPDATED: "admin updated",
        SHOPOWNER_CREATED: "shop owner created",
        SHOPOWNER_UPDATED: "shop owner updated",
        SHOPOWNER_REQUESTED: "shop owner requested",
        SHOP_UPDATED: "Shop updated",
    },

    GENERATE_METHOD: {
        CREATE: "create",
        IMPORT: "import",
        NEW_CUSTOMER: "new customer",
    },

    SUBSCRIPTION_PLATFORMS: {
        WEB: "web",
        MOBILE: "mobile",
    },

    SUBSCRIPTION_EVENTS: {
        SUBSCRIPTION_CREATED: "Subscription created",
        SUBSCRIPTION_UPDATED: "Subscription updated",
        SUBSCRIPTION_DELETED: "Subscription deleted",
        SUBSCRIPTION_PAYMENT_RECEIVED: "subscription payment received",
    },

    CREATED_FROM: {
        SHOP_CREATED: "shop_created",
        SHOP_IMPORTED: "shop_imported",
        APEX_AUTO_APP: "apex_auto_app",
        ADMIN: "admin",
        WEB_APP: "web",
    },

    PAYMENT_STATUS_PAYOUT_MODEL: {
        APPROVAL_PENDING: "approval_pending",
        APPROVED_AND_INITIATED: "approved_and_initiated",
        REJECTED: "rejected",
    },
    SUPPORT: {
        MECHANIC: {
            EMAIL: "support@apexmechanic.com",
        },
        CUSTOMER: {
            EMAIL: "support@apexautoapp.com",
        },
        PHONE_NUMBER: "437-961-8836",
    },

    SUBSCRIPTION_PERIODS: {
        MONTHLY: "monthly",
        YEARLY: "yearly",
        CUSTOM: "custom",
    },

    DEEPLINK_TYPES: {
        CUSTOMER: {
            CREATE_ACCOUNT: "accountCreated", // API customer forgetPassword // render Page forgot password
            RESET_PASSWORD: "passwordReset", // API customer emailCodeVerification // render Page download apex app
            MECHANIC_CREATE_ACCOUNT: "createAccountByMechanic", // API customer createCustomer from mechanic // render Page download apex app
            APPOINTMENT_REMINDER: "appointmentReminder", // API customer job schedule appointment remainder// render Page appointment detail page
            APPOINTMENT_REQUEST_ACCEPT: "acceptAppointmentRequest", // API mechanic updateAppointmentStatus// render Page appointment detail page
            APPOINTMENT_REQUEST_DECLINE: "declineAppointmentRequest", // API mechanic updateAppointmentStatus// render Page appointment detail page
            APPOINTMENT_CREATE_FROM_MECHANIC: "appointmentCreated", // API mechanic appointment create// render Page appointment detail page
            PROPOSE_NEW_TIME_FOR_APPOINTMENT: "proposeNewTimeForAppointment", // API mechanic propostNewTime// render Page appointment detail page
            APPOINTMENT_CANCELLED: "cancelAppointment", // API customer cancelAppointment // render Page appointment detail page
            APPOINTMENT_NO_SHOW: "appointmentNoShow", // API mechanic update-appointment-status // render Page appointment detail page
            APPOINTMENT_RESCHEDULED_FROM_MECHANIC: "appointmentRescheduled", // API mechanic reshedule-appointment-mechanic // render Page appointment detail page
            ACCEPT_RESCHEDULE_APPOINTMENT: "acceptRescheduleAppointment", // API mechanic reschedule-accept-decline // render Page appointment detail page
            APPROVAL_NEEDED: "approvalNeeded", // API mechanic createApproval // render Page appointment additional service approval page
            APPROVAL_REQUEST: "approvalRequest", // API mechanic createApproval // render Page appointment additional service approval page
            INVOICE_RECEIVED: "invoiceReceived", // API mechanic createInvoice // render Page invoice detail page

            ESTIMATE_REQUEST_ACCEPT: "acceptEstimateRequest", // API mechanic estimateStatusManage // render Page estimate detail page
            ESTIMATE_REQUEST_DECLINE: "declineEstimateRequest", // API mechanic estimateStatusManage // render Page estimate detail page
            ESTIMATE_REQUEST_COMPLETE: "estimateComplete", // API mechanic create or createEstimateAsMechanic // render Page estimate detail page
            VEHICLE_READY_TO_PICKUP: "vehicleReadyToPickup", // API mechanic create or update-appointment-status // render Page appointment listing today page
        },
        MECHANIC: {
            ACCOUNT_CREATED: "accountCreated", // login Page// Generated From Admin Panel Render onto the Mechanic App
            PASSWORD_RESET: "passwordReset", // Generated from Api (Forgot Password) // render page Enter Recovery Page
            APPOINTMENT_REQUEST: "newAppointmentRequest", // API customer send Appointment Request // render Page Appointment request Accept/Decline/Propose new time
            ESTIMATE_REQUEST: "newEstimateRequest", //  API customer send Estimate Request // Render Page Estimate Request Accept & Decline page
            APPOINTMENT_CONFIRMED: "appointmentCreated", //  API  Mechanic accept appointment request //  render page dashboard
            ESTIMATE_COMPLETED: "estimateCompleted", //API Estimate create API // render estimate List Sent status
            APPROVAL_REQUEST_FOR_ADDITIONAL_SERVICE: "approvalRequest", // API customer approve services // render Detail Page with services
            PROPOSE_NEW_TIME_ACCEPTED: "acceptProposeNewTimeAppointment", // respond-to-request for accept status // render Appointment detail
            PROPOSE_NEW_TIME_DECLINED: "declineProposeNewTimeAppointment", // respond-to-request for accept status // render Appointment detail
            CREATE_APPOINTMENT: "createAppointment", // Mechanic creates appointment // detail page
            APPOINTMENT_CANCELLED: "cancelAppointment", // cancel Appointment // render detail page
            APPOINTMENT_RESCHEDULED_REQUEST: "appointmentRescheduleRequest", // appointment reschedule request by customer // render Page Appointment request Accept/Decline/Propose new time
            ACCEPT_RESCHEDULE_APPOINTMENT: "acceptRescheduleAppointment", // Appointment detail
            DECLINE_RESCHEDULE_APPOINTMENT: "declineRescheduleAppointment", // Appointment detail
            APPOINTMENT_RESCHEDULED: "appointmentRescheduled",
        },
    },

    DEEPLINK_MODULE: {
        ESTIMATE_REQUEST: "estimateRequest",
        INVOICE: "invoice",
        ESTIMATE: "estimate",
        APPOINTMENT: "appointment",
        USER: "user",
    },

    TWILIO_MESSAGE: {
        MECHANIC: "Apex Mechanic",
        CUSTOMER: "Apex Auto",
    },
    MONGO_FUNCTIONS_EDIT: {
        SAVE: "save",
        INSERT_ONE: "insertOne",
        INSERT_MANY: "insertMany",

        UPDATE_ONE: "updateOne",
        // UPDATE_MANY: "updateMany",
        REPLACE_ONE: "replaceOne",
        FIND_ONE_AND_UPDATE: "findOneAndUpdate",

        // DELETE_ONE: "deleteOne",
        // DELETE_MANY: "deleteMany",

        FIND_ONE_AND_DELETE: "findOneAndDelete",
        FIND_ONE_AND_REPLACE: "findOneAndReplace",
    },

    HOSTINGER_NAME: {
        APEX_AUTO: "Apex Auto Support",
        APEX_MECHANIC: "Apex Mechanic Support",
    },

    NEVER_BOUNCE_RESULT: {
        VALID: "valid",
        INVALID: "invalid",
        ACCEPT_ALL: "accept_all",
        UNKNOWN: "unknown",
        DISPOSABLE: "disposable",
    },

    SENSITIVE_USER_DATA: [
        "password",
        "isMechanicApproved",
        "createdFrom",
        "formattedShopOwnerPhoneNumber",
        "formattedCustomerPhoneNumber",
        "passwordUpdatedAt",
        "isLoginRestricted",
        "loginRestrictedAfter",
    ],

    USER_NOTIFICATION_DATA: [
        "mobilenotificationsPushNotification",
        "emailNotificationsNewAppointments",
        "emailNotificationsCancellations",
        "emailNotificationsMessagefromMechanics",
        "emailNotificationsPromotionsandAnnouncements",
        "emailNotificationsReschedules",
        "emailNotificationsMessagefromCustomer",
        "mobileNotificationsNewAppointments",
        "mobileNotificationsCancellations",
        "mobileNotificationsMessageFromMechanics",
        "mobileNotificationsPromotionsandAnnouncements",
        "mobileNotificationsReschedules",
        "mobileNotificationsMessageFromCustomer",
        "mobileNotificationsEstimates",
        "emailNotificationsEstimates",
    ],

    USER_OTHER_KEYS: [
        "deleted",
        "createdAt",
        "updatedAt",
        "__v",
        "fcmToken",
        "loginTime",
        "deviceId",
        "deviceName",
        "deviceType",
        "chatUserId",
        "chatRoleId",
        "profilePic",
        "otp",
        "isNotificationOn",
        "loginType",
        "status",
        "roleManagement",
        "role",
        "isFirstTimeLogin",
        "countryCode",
        "isShopOwnerApproved",
        "stripeCustomerId",
        "subscription",
        "addressLatLong",
    ],
};
