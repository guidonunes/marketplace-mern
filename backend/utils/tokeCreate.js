const jsonWebToken = require('jsonwebtoken');
module.exports.createToken = async(data) =>{
  const token = await jsonWebToken.sign(data, process.env.SECRET_KEY, {
    expiresIn: '1h'});
    return token;
}
