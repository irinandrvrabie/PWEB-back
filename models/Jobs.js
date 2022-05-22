const mongoose = require('mongoose');

const JobsSchema = new mongoose.Schema({
    company_name: {
        type: String,
        required: [true, 'Please add a company name'],
        trim: true,
        maxlength: [50, 'Company name can not be longer than 50 characters']
    },
      job_title: {
        type: String,
        required: [true, 'Please add a job title'],
        trim: true,
        maxlength: [50, 'Job title can not be longer than 50 characters']
      },
      location: {
        type: String,
        required: [true, 'Please add a location'],
        trim: true,
        maxlength: [50, 'Location can not be longer than 50 characters']
      },
      exprerience: {
        type: String,
        required: [true, 'Please add minimum years of experience'],
        trim: true,
        maxlength: [5, 'Experience years can not be longer than 5 characters']
      },
      required_skills: {
        type: String,
        required: [true, 'Please add required skills'],
        trim: true,
        maxlength: [150, 'Required skills can not be longer than 150 characters']
      },
      job_description: {
        type: String,
        required: [true, 'Please add job description'],
        trim: true,
        maxlength: [450, 'Job description can not be longer than 450 characters']
      }
    },
    {
      toJSON: { virtuals: true },
      toObject: { virtuals: true }
    }
);
module.exports = mongoose.model('Jobs', JobsSchema);