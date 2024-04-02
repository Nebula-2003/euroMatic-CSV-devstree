const cityModel = require('../models/city');
const provinceModel = require('../models/province');
const countryModel = require('../models/country');

exports.cityToId = async ({ city, provinceId }) => {
    const cityId = await cityModel.findOne({ city: city, province: provinceId }).collation({ locale: "en", strength: 2 }).select('_id');
    return cityId;
}

exports.provinceToId = async ({ province }) => {
    const provinceId = await provinceModel.findOne({ province: province }).collation({ locale: "en", strength: 2 }).select('_id');
    return provinceId;
}

exports.countryToId = async ({ country }) => {
    const countryId = await countryModel.findOne({ country: country }).collation({ locale: "en", strength: 2 }).select('_id');
    return countryId;

}

exports.getAddress = async (addressData) => {
    const { streetAddress, postalCode, city, province, country } = addressData;
    const countryId = (await this.countryToId({ country }))?._id;
    const provinceId = (await this.provinceToId({ province }))?._id;
    const cityId = (await this.cityToId({ city, provinceId }))?._id;
    return {
        streetAddress,
        postalCode,
        city: cityId,
        province: provinceId,
        country: countryId,
    }
}