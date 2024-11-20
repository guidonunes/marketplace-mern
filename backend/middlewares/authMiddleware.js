const jwt = require('jsonwebtoken');

module.exports.authMiddleware = async (req, res, next) => {
  const {accessToken} = req.cookies;

  if(!accessToken){
    return res.status(409).json({error: 'Unauthorized'});
  } else {
    try {
      const decoded = jwt.verify(accessToken, process.env.SECRET);
      req.role = decoded.role;
      req.id = decoded.id;
      next()
    } catch(error) {
      return res.status(409).json({error: 'Unauthorized'});
    }
  }
}