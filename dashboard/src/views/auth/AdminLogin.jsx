import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { admin_login } from '../../store/Reducers/authReducer';
import { PropagateLoader } from 'react-spinners';



const AdminLogin = () => {

  const dispatch = useDispatch();
  const {loader} = useSelector(state => state.auth);

  const [email, setEmail] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(admin_login(email));
    // console.log(email);
  };


  return (
    <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[50px]">
              <img src="/images/logo.png" alt="logo" />
            </div>
          </div>
          <form onSubmit={submitForm}>

            {/* Add email field */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input onChange={handleChange} value={email.email} type="text" id="email" name="email" placeholder='Enter your Email' className='p-2 rounded-md bg-[#ffffff] text-black' required />
            </div>

            {/* Add password field */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Password</label>
              <input onChange={handleChange} value={email.password} type="password" id="password" name="password" placeholder='Password' className='p-2 rounded-md bg-[#ffffff] text-black' required />
            </div>

            {/* Add confirm password field */}
            <button disabled={loader ? true : false} className='bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>
            {
              loader ? <PropagateLoader /> : 'Login'
            }
              Login
            </button>


          </form>

        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
