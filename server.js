const express = require ('express');
const dotenv = require ('dotenv');
const morgan = require ('morgan');
const connectDB = require('./config/db');

//Load env vars
dotenv.config({path: './config/config.env'});

//Connect DB
connectDB();

//Route files 
const companies = require('./routes/company');
const jobs = require('./routes/jobs');
const profiles = require('./routes/profiles');
const applications = require('./routes/applications');

const app = express();

//Body parser
app.use(express.json());

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//Mount routers
app.use('/api/v1/companies', companies);
app.use('/api/v1/job', jobs);
app.use('/api/v1/application', applications);
app.use('/api/v1/profile', profiles);

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

//Handle rejections
process.on('unhandledRejections', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1)); 
}); 