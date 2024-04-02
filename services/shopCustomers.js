const shopCustomersModel = require('../models/shopCustomers');

exports.insertOneShopCustomer = async (customer, shop,) => {
    const shopCustomer = await shopCustomersModel.create({
        customer,
        shop,
        isShopCreated: true
    });
    return shopCustomer;
}
