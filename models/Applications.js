const mongoose = require('mongoose');

const ApplicationsSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'Please add candidate first name'],
        trim: true,
        maxlength: [20, 'First name can not be longer than 20 characters']
    },
    last_name: {
        type: String,
        required: [true, 'Please add candidate last name'],
        trim: true,
        maxlength: [20, 'Last name can not be longer than 20 characters']
      },
    email: {
        type: String,
        required: [true, 'Please add candidate email'],
        trim: true,
        maxlength: [50, 'Email can not be longer than 50 characters']
      },
      phone_number: {
        type: String,
        required: [true, 'Please add candidate phone number'],
        trim: true,
        maxlength: [14, 'Phone number can not be longer than 14 characters']
      },
      education: {
        type: String,
        required: [true, 'Please add candidate education'],
        trim: true,
        maxlength: [150, 'Education description can not be longer than 150 characters']
      },
      skills: {
        type: String,
        required: [true, 'Please add candidate skills'],
        trim: true,
        maxlength: [150, 'Skills description can not be longer than 150 characters']
      },
      experience: {
        type: String,
        required: [true, 'Please add candidate experience'],
        trim: true,
        maxlength: [450, 'Experience description can not be longer than 450 characters']
      },
      company_name: {
        type: String,
        required: [true, 'Please add company name'],
        trim: true,
        maxlength: [50, 'Company name can not be longer than 50 characters']
      },
      job_title: {
         type: String,
         required: [true, 'Please add job title'],
         trim: true,
         maxlength: [50, 'Job title can not be longer than 50 characters']
      },
    },
    {
      toJSON: { virtuals: true },
      toObject: { virtuals: true }
    }
);
module.exports = mongoose.model('Applications', ApplicationsSchema);