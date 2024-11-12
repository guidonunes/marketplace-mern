import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const AdminLogin = () => {

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
    console.log(email);
  };


  return (
    <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className='text-x1 mb-3 font-bold'>Welcome to the E-Commerce Page </h2>
          <p className='text-sm mb-3 font-medium'>Please, enter your email and password : </p>

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
            <button className='bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Sign In</button>


          </form>

        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
