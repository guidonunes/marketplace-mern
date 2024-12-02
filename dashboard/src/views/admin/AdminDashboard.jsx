import React from 'react';
import { MdCurrencyExchange } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const  state ={
    series: [
      {
      name: 'Orders',
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 34, 56, 78]
      },
      {
      name: 'Revenue',
      data: [10, 20, 25, 30, 29, 40, 50, 71, 105, 54, 76, 98]
      },
      {
      name: 'Sellers',
      data: [28, 38, 43, 48, 47, 58, 68, 89, 123, 32, 54, 76]
      },
    ],
    options: {
      color: ['#6a5fdf', '#fa0305', '#038000'],
      plotOptions: {
        radius: 30
      },
      chart: {
        background: 'transparent',
        foreColor: '#d0d2d6'
      },
      dataLabels: {
        enabled: false
      },
      strock: {
        show: true,
        curve: ['smooth', 'straight', 'stepline'],
        lineCap: 'butt',
        colors: '#f0f0f0',
        width: .5,
        dashArray: 0
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      legend: {
        position: 'top',
      },
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true
              }
            },
            chart: {
              height: '550px',
            }
          }
        }
      ]
    }

  }


  return (
    <div className='px-2 md:px-7 py-5'>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
        {/* Cards */}
        <div className='flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
            <h2 className='text-3xl font-bold'>$3434</h2>
            <span className='text-md font-medium'>Total Sales</span>
          </div>
          <div className='w-[40px] h-[48px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl'>
            <MdCurrencyExchange className='text-[#fae8e8] shadow-lg' />
          </div>
        </div>
        {/* Cards */}
        <div className='flex justify-between items-center p-5 bg-[#fde2ff] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
            <h2 className='text-3xl font-bold'>50</h2>
            <span className='text-md font-medium'>Products</span>
          </div>
          <div className='w-[40px] h-[48px] rounded-full bg-[#760077] flex justify-center items-center text-xl'>
            <MdProductionQuantityLimits className='text-[#fae8e8] shadow-lg' />
          </div>
        </div>
        {/* Cards */}
        <div className='flex justify-between items-center p-5 bg-[#e9feea] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
            <h2 className='text-3xl font-bold'>10</h2>
            <span className='text-md font-medium'>Sellers</span>
          </div>
          <div className='w-[40px] h-[48px] rounded-full bg-[#038000] flex justify-center items-center text-xl'>
            <FaUsers className='text-[#fae8e8] shadow-lg' />
          </div>
        </div>
        {/* Cards */}
        <div className='flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3'>
          <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
            <h2 className='text-3xl font-bold'>264</h2>
            <span className='text-md font-medium'>Total Orders</span>
          </div>
          <div className='w-[40px] h-[48px] rounded-full bg-[#0200f8] flex justify-center items-center text-xl'>
            <MdOutlineShoppingCart className='text-[#fae8e8] shadow-lg' />
          </div>
        </div>

      </div>
      {/* Chart */}
      <div className='w-full flex flex-wrap mt-7 '>
        <div className='w-full lg:w-7/12 lg:pr-3'>
          <div className='w-full bg-[#6a5fdf] p-4 rounded-md'>
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height={350}
              />
          </div>
        </div>

        <div className='w-full lg:w-5/12 pl-4 mt-6 lg:mt-0'>
          <div className='w-full bg-[#6a5fdf] p-4 rounded-md text-[#d0d2d6]'>
            <div className='flex justify-between items-center'>
              <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3'>Recent messages</h2>
              <Link className='font-semibold text-sm text-[#d0d2d6]'>View All</Link>
            </div>
            <div className='flex flex-col gap-2 pt-6 text-[#d0d2d6]'>
              <ol className='relative border-1 border-slate-600 ml-4 '>
                <li>
                  <div className=""><img src="/images/admin.jpg" alt='admin img'/></div>
                  <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                    <div className='flex justify-between items-center mb-2'>
                      <Link className='font-semibold text-sm text-[#d0d2d6]'>Doug The Boss</Link>
                      <time>2 days ago</time>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
