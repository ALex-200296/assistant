const config = require('./config');
const mongoose = require('mongoose');
const app = require('./app');

async function start() {
  try {
      mongoose.Promise = global.Promise;
      mongoose.set('debug', true);
      await mongoose.connect(config.mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      })
      app.listen(config.PORT, () => console.log(`App has benn started on port ${config.PORT}`));
  }catch (e){
  console.log('Server Error', e.message);
  process.exit(1);
  }
}
start()