import React from 'react';
import { MdCurrencyExchange } from "react-icons/md";

const AdminDashboard = () => {
  return (
    <div className='px-2 md:px-7 py-5'>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
        <div className='flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
            <h2 className='text-3xl font-bold'>$3434</h2>
            <span className='text-md font-medium'>Total Sales</span>
          </div>
          <div className='w-[40px] h-[48px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl'>
            <MdCurrencyExchange className='text-[#fae8e8] shadow-lg' />
          </div>
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
