const fs = require('fs');
const csv = require('csv-parser');
const dotenv = require('dotenv');
const shopCustomers = require('./models/shopCustomers');
const userModels = require('./models/users');

const mongoose = require('mongoose');
dotenv.config();

(async () => {
    await mongoose.connect(process.env.APEX_STAGING);
    mongoose.set('debug', true);
})()

async function a() {
    let av = await userModels.find()
        .sort({ createdAt: -1 }) // Sort in descending order (latest first)
        .limit(200) // Limit to the latest 200 documents

    const delfkxbete = await userModels.updateMany({ _id: { $in: av.map(a => a._id) } }, { $set: { deleted: true } })
    console.log("🚀 ~ a ~ delfkxbete:", delfkxbete)
}

a()