const jsonWebToken = require('jsonwebtoken');
module.exports.createToken = async(data) =>{
  const token = await jsonWebToken.sign(data)
}
