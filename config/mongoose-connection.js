const mongoose = require('mongoose');
const config = require('config');
const dbgr = require('debug')('development:mongoose');

const dbUri = config.get('mongoURI');
const dbName = config.get('database');

mongoose.connect(`${dbUri}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  dbgr('MongoDB connected successfully!');
})
.catch(err => {
  dbgr(`MongoDB connection error: ${err}`);
});

module.exports = mongoose.Connection;
