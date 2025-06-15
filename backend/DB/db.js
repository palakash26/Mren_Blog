const mongoose = require('mongoose');

// MongoDB Connection


const DbConnection = () => {

    mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => console.error(err));

};


module.exports = DbConnection;