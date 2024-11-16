const adminModel = require('../models/adminModel');
const { responseReturn } = require('../utils/response');
const bcrypt = require('bcrypt');
const { createToken } = require('../utils/tokenCreate');

class authControllers {
  admin_login = async(req, res) => {
    const { email, password } = req.body;
    try {
      const admin = await adminModel.findOne({email}).select('+password');
      // console.log(admin);
      if (admin) {
        const isMatch = await bcrypt.compare(password, admin.password)
        // console.log(isMatch);
        if (isMatch) {
          const token  = await createToken({
            id: admin._id,
            role: admin.role
          })
          res.cookie('accessToken', token {
            expire: new Date(Date.now() + 7*24*60*60*1000),
          })
        } else {
          responseReturn(res, 404, 'Invalid email or password')
        }
      } else {
        responseReturn(res, 404, 'Invalid email or password')
      }

    } catch (error) {
      responseReturn(res, 500, 'Internal server error',)

    }
  }
}


module.exports = new authControllers();
