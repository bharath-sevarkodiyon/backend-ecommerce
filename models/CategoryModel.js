const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    categoryName: {
        type: String,
        unique: true,
        required: true,
    },
    image: {
        type: String
    },
})

const productCategory = mongoose.model("productCategory", categorySchema)

module.exports = {
    productCategory
}