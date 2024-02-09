const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usersSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true
    },
    residentialAddress: {
        houseNumber: {
            type: String,
            required: false
        },
        streetNumber: {
            type: String,
            required: false
        },
        streetName: {
            type: String,
            required: false
        },
        closeMark: {
            type: String,
            required: false
        },
        lga: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false
        },
        isNigerian: {
            type: Boolean,
            default: true
        },

    },
    kycData: {

        idType: {
            type: String,
            required: false
        },
        idNumber: {
            type: String,
            required: false
        },
        vehicleNumber: {
            type: String,
            required: false
        },
        isCourierCompany: {
            type: Boolean,
            default: false
        },
        businessOfficeAddress: {
            type: String,
            required: false
        },
        chargeAmount: {
            type: Number,
            default: 1000
        },
        isPaid: {
            type: Boolean,
            default: false
        },
        kycIsVerified: {
            type: Boolean,
            required: false
        },
        kycIsSubmitted: {
            type: Boolean,
            default: false
        }
    },
}, { timestamps: true });

module.exports = mongoose.model('User', usersSchema);