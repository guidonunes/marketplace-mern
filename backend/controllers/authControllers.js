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
          const token  = createToken({
            id: admin.id,
            role: admin.role
          })
          res.cookie('accessToken', token,{
            expire: new Date(Date.now() + 7*24*60*60*1000),
          })
          responseReturn(res, 200, {token}, {message:'Login success'})
        } else {
          responseReturn(res, 404, {error: 'Invalid email or password'})
        }
      } else {
        responseReturn(res, 404, {error: 'Invalid email or password'})
      }

    } catch (error) {
      responseReturn(res, 500, {error: 'Internal server error'})

    }
  }

  // Add the correct path for the route
  getUser = async(req, res) => {
    const { id, role } = req;
    try {
      if (roll === 'admin') {
        const user = await adminModel.findById(id);
        responseReturn(res, 200, {userInfor: user})
      } else {
        console.log('Seller info')
      }
    } catch (error) {
      responseReturn(error.message)
    }

  }
}


module.exports = new authControllers();
