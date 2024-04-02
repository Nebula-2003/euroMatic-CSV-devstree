const fs = require('fs');
const _ = require('lodash');
const { createUser } = require('./services/user.js');
const { insertManyVehicles } = require('./services/vehicle.js');
const { insertOneShopCustomer } = require('./services/shopCustomers');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

(async () => {
    await mongoose.connect(process.env.APEX_STAGING);
    mongoose.set('debug', true);
})()


function mergeUsers(usersArray) {
    const groupedUsers = _.groupBy(usersArray, "phoneNumber");
    const mergedUsers = [];
    Object.values(groupedUsers).forEach(users => {
        if (users[0].phoneNumber === null || users[0].phoneNumber === '') mergedUsers.push(...users);
        const vehicles = users.map(user => user.vehicles)
        const finalVehicleArray = _.uniqWith(vehicles, _.isEqual);
        users[0].vehicles = finalVehicleArray;
        mergedUsers.push(users[0]);
    });
    return mergedUsers;
}

fs.readFile("users.json", "utf8", (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
    } else {
        const users = JSON.parse(data);
        const mergedUsers = mergeUsers(users);
        console.log(mergedUsers);

        mergedUsers.forEach(async (user) => {
            const userFinal = await createUser(user);
            const vehicles = await insertManyVehicles(user.vehicles, userFinal._id);
            const shopCustomers =await  insertOneShopCustomer(userFinal._id, "65f66513fc0d52ca4896cbc4");
        });
        fs.writeFile("usersMerged.json", JSON.stringify(mergedUsers), (err) => {
            if (err) {
                console.error('Error writing JSON file:', err);
            }
        });
    }
});