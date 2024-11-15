const adminModel = require('../models/adminModel');
const { responseReturn } = require('../utils/response');

class authControllers {
  admin_login = async(req, res) => {
    const { email, password } = req.body;
    try {
      const admin = await adminModel.findOne({email}).select('+password');
      // console.log(admin);
      if (admin) {

      } else {

      }

    } catch (error) {
      responseReturn(res, 500, 'Internal server error',)
    }
  }
}


module.exports = new authControllers();
