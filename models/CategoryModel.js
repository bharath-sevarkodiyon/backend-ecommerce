const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
    }
})

const productCategory = mongoose.model("productCategory", categorySchema)

module.exports = {
    productCategory
}