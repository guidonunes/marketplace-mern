import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from "react-icons/fa";

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
            {/* Add link to login page */}
            <div className='flex item-center mb-3 gap-3 justify-center'>
              <p>Already have an account? <Link className='font-bold' to="/login">Sign In</Link></p>
            </div>
            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span>Or</span>
              </div>
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span><FaGoogle /></span>
              </div>
              <div className="w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span><FaFacebook /></span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
