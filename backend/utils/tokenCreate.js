const jwt = require('jsonwebtoken');

module.exports.createToken = (data) => {
  try {
    const token = jwt.sign(data, process.env.SECRET, {
      expiresIn: '7d'
    });
    return token;
  } catch (error) {
    console.error('Error generating token:', error);
    throw new Error('Token generation failed');
  }
};
