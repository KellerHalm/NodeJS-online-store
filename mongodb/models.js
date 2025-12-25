const { Schema, model } = require('mongoose');


const UserSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, defaultValue: "USER" },
});


const BasketSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    devices: [{
        device: { type: Schema.Types.ObjectId, ref: 'Device' },
        count: { type: Number, default: 1 } 
    }]
});


const TypeSchema = new Schema({
    name: { type: String, unique: true, required: true },
});


const BrandSchema = new Schema({
    name: { type: String, unique: true, required: true },
});


const DeviceSchema = new Schema({
    name: { type: String, unique: true, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    img: { type: String, required: true },
    type: { type: Schema.Types.ObjectId, ref: 'Type' },
    brand: { type: Schema.Types.ObjectId, ref: 'Brand' },
    info: [{
        title: { type: String, required: true },
        description: { type: String, required: true }
    }]
});

const RatingSchema = new Schema({
    rate: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    device: { type: Schema.Types.ObjectId, ref: 'Device' },
});


const User = model('User', UserSchema);
const Basket = model('Basket', BasketSchema);
const Device = model('Device', DeviceSchema);
const Type = model('Type', TypeSchema);
const Brand = model('Brand', BrandSchema);
const Rating = model('Rating', RatingSchema);

module.exports = {
    User,
    Basket,
    Device,
    Type,
    Brand,
    Rating
}
