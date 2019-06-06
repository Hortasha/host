const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

//Desktop location: C:\MongoDB\Server\4.0
//Desktop dev env
const server = '127.0.0.1';
const database = 'holidaze';
//const user = 'martin';
//const password = 'Kalle123';

mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true });

module.exports = mongoose;
