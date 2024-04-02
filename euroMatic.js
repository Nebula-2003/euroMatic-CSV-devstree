const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');
const vehicleServices = require('./services/vehicle');
const dotenv = require('dotenv');
const { getAddress } = require('./services/address');
dotenv.config();

(async () => {
    await mongoose.connect(process.env.APEX_STAGING);
    mongoose.set('debug', true);
})()

// Required headers for user and vehicle data
const requiredUserHeaders = ['Phone Number', 'Email Address'];
const requiredVehicleHeaders = ['Make', 'Model', 'Year'];

// Collection to store users
const users = [];
let a = 1;

// Function to check if all required headers are present
function validateHeaders(headers, requiredHeaders) {
    for (const requiredHeader of requiredHeaders) {
        if (!headers.includes(requiredHeader)) {
            return false;
        }
    }
    return true;
}

// Function to create a user
async function createUser(userData) {
    // You can customize this function to create users based on your specific requirements
    const address = await getAddress({
        streetAddress: userData['Street'],
        postalCode: userData['Postal Code'],
        city: userData['City'],
        province: userData['Province'],
        country: "canada",
    })
    console.log("🚀 ~ createUser ~ address:", address)
    return {
        ...address,
        firstName: userData['First Name'],
        lastName: userData['Last Name'],
        fullName: `${userData['First Name'].trim()} ${userData['Last Name'].trim()}`,
        phoneNumber: userData['Phone Number'],
        email: userData['Email Address'],
        company: userData['Company'],
        vehicles: [], // Initialize an empty array for vehicles
    };
}

// Function to create a vehicle
function createVehicle(vehicleData) {
    // You can customize this function to create vehicles based on your specific requirements
    return {
        make: vehicleData['Make'],
        model: vehicleData['Model'],
        trim: vehicleData['Trim'],
        year: vehicleData['Year'],
        vin: vehicleData['VIN'],
        licenseNumber: vehicleData['License Number'],
    };
}

// Path to your CSV file
const csvFilePath = './CSV/euromatic.csv'; // Change this to your file path

// Read the CSV file
fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('headers', (headers) => {
        // Check if all required headers are present
        const isUserValid = validateHeaders(headers, requiredUserHeaders);
        const isVehicleValid = validateHeaders(headers, requiredVehicleHeaders);
        if (!isUserValid || !isVehicleValid) {
            console.error('Invalid CSV headers. Please ensure all required headers are present.');
            process.exit(1); // Exit the script if headers are invalid
        }
    })
    .on('data', async (row) => {
        const user = await createUser(row);
        const vehicle = await vehicleServices.detailsToIds(createVehicle(row));
        user.vehicles.push(vehicle)
        users.push(user);
        fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.error('Error writing JSON file:', err);
            } else {
                console.log(`JSON file saved successfully.${a++}`);
            }
        });
    })
    .on('end', async () => {
        await new Promise(resolve => setImmediate(resolve));
        console.log('CSV file processed');
    })
    .on('error', (err) => {
        console.error('Error while reading CSV:', err);
        process.exit(1); // Exit the script if an error occurs
    });
