import React from 'react';

const Register = () => {
  return (
    <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className='text-x1 mb-3 font-bold'>Welcome to the E-Commerce Page </h2>
          <p className='text-sm mb-3 font-medium'>Please, register your account : </p>
          <form>
            {/* Add name field */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder='Enter your name' className='p-2 rounded-md bg-[#ffffff] text-black' required />
            </div>
            {/* Add email field */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" placeholder='Enter your Email' className='p-2 rounded-md bg-[#ffffff] text-black' required />
            </div>
            {/* Add password field */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Password</label>
              <input type="password" id="password" name="password" placeholder='Password' className='p-2 rounded-md bg-[#ffffff] text-black' required />
            </div>
            {/* Add confirm password field */}
            <div className="flex items-center w-full gap-3 mb-3">
              <input type="checkbox" name='checkbox' id='checkbox ' className='w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500' />
              <label htmlFor="checkbox" className='text-sm'>I agree to the terms and conditions</label>
            </div>
            <button className='bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
