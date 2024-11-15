const mogoose = require('mongoose');


module.exports.dbConnect = async () => {
  try {
    await mogoose.connect(process.env.DB_URL,{useNewUrlParser: true})
    console.log('Database connected')
  } catch (error) {
    console.log('Database connection failed')
  }
}
