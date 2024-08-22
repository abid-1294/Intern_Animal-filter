const mongoose = require ('mongoose');
const {Schema} = mongoose;

const animalSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    imagePath: {
        type: String,
        required: true
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: "CategoryList"
    },
    created:{
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model("AnimalList", animalSchema)