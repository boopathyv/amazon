const products = require('../data/products.json');
const users = require('../data/users.json');
const Product = require('../models/productModel');
const User = require('../models/userModel');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database')

dotenv.config({path:'backend/config/config.env'});
connectDatabase();

const seedProducts = async ()=>{
    try{
        await Product.deleteMany();
        console.log('Products deleted!')
        await Product.insertMany(products);
        console.log('All products added!');
        await User.deleteMany();
        console.log('Users deleted!')
        await User.create(users);
        console.log('All users added!');
    }catch(error){
        console.log(error.message);
    }
    process.exit();
}

seedProducts();