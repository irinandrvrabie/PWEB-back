const mongoose = require('mongoose');

const CompaniesSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please add candidate email'],
        trim: true,
        maxlength: [50, 'Email can not be longer than 50 characters']
      },
      company_name: {
        type: String,
        required: [true, 'Please add company name'],
        trim: true,
        maxlength: [50, 'Company name can not be longer than 50 characters']
      },
    },
    {
      toJSON: { virtuals: true },
      toObject: { virtuals: true }
    }
);
module.exports = mongoose.model('Companies', CompaniesSchema);