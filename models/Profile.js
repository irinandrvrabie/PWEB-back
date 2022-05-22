const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'Please add a firts name'],
        trim: true,
        maxlength: [20, 'First name can not be longer than 20 characters']
    },
    last_name: {
        type: String,
        required: [true, 'Please add a last name'],
        trim: true,
        maxlength: [20, 'Last name can not be longer than 20 characters']
      },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        trim: true,
        maxlength: [50, 'Email can not be longer than 50 characters']
      },
      phone_number: {
        type: String,
        required: [true, 'Please add a phone number'],
        trim: true,
        maxlength: [14, 'Phone number can not be longer than 14 characters']
      },
      education: {
        type: String,
        required: [true, 'Please add education'],
        trim: true,
        maxlength: [150, 'Education description can not be longer than 150 characters']
      },
      required_skills: {
        type: String,
        required: [true, 'Please add required skills'],
        trim: true,
        maxlength: [150, 'Required skills description can not be longer than 150 characters']
      },
      experience: {
        type: String,
        required: [true, 'Please add job description'],
        trim: true,
        maxlength: [450, 'Experience description can not be longer than 450 characters']
      },
    },
    {
      toJSON: { virtuals: true },
      toObject: { virtuals: true }
    }
);
module.exports = mongoose.model('Profile', ProfileSchema);