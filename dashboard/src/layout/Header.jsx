import React from 'react';
import { FaList } from 'react-icons/fa6';

const Header = ({showSidebar, setShowSidebar}) => {
  return (
    <div className='fixed top-0 left-0 w-full py-5 pl-2 lg:px-8 z-40'>
      <div className='ml-0 lg:ml-[260px] rounded-md h-[64px] flex justify-between items-center bg-[#b1addf] px-5 trasition-all'>
        <div  onClick={() => {setShowSidebar(!showSidebar)}} className='w-[35px] flex lg:hidden h-[35px] rounded-sm bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 justify-center items-center cursor-pointer '>
          <span><FaList/></span>
        </div>
        <div className='hidden md:block '>
          <input className='px-3 py-2 outline-none border border-slate-700 rounded-md focus:border-indigo-300 overflow-hidden' type="text" name='search' placeholder='Search' />
        </div>
        <div className='flex justify-center items-center gap-8 relative'>
          <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center gap-3'>
              <div className='flex justify-center items-center flex-col text-end'>
                <h2>Doug The Boss</h2>
                <span>Admin</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
