const mongoose = require ('mongoose');
const {Schema} = mongoose;

const categorySchema = new Schema({
    name:{
        type: String,
        require: true
    },
    animallist: [
        {
            type: Schema.Types.ObjectId,
            ref: "AnimalList"
        }
    ],
    created:{
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model("CategoryList", categorySchema)