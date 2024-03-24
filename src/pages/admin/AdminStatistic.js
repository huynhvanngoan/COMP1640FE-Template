import React from 'react'

const AdminStatistic = () => {
  return (
    <div className='relative bg-gray-100 rounded-md max-w-full pt-12 mx-4 overflow-y-auto'>
      <div class="pb-32">
        <div class="px-4 md:px-6 mx-auto">
          <div>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div class="flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">Traffic</h5>
                        <span class="font-bold text-xl">350,897</span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"><i class="far fa-chart-bar"></i></div>
                      </div>
                    </div>
                    <p class="text-sm text-blueGray-500 mt-4"><span class="text-emerald-500 mr-2"><i class="fas fa-arrow-up"></i> 3.48%</span><span class="whitespace-nowrap">Since last month</span></p>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">NEW USERS</h5>
                        <span class="font-bold text-xl">2,356</span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500"><i class="fas fa-chart-pie"></i></div>
                      </div>
                    </div>
                    <p class="text-sm text-blueGray-500 mt-4"><span class="text-red-500 mr-2"><i class="fas fa-arrow-down"></i> 3.48%</span><span class="whitespace-nowrap">Since last week</span></p>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">SALES</h5>
                        <span class="font-bold text-xl">924</span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500"><i class="fas fa-users"></i></div>
                      </div>
                    </div>
                    <p class="text-sm text-blueGray-500 mt-4"><span class="text-orange-500 mr-2"><i class="fas fa-arrow-down"></i> 1.10%</span><span class="whitespace-nowrap">Since yesterday</span></p>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">PERFORMANCE</h5>
                        <span class="font-bold text-xl">49,65%</span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-lightBlue-500"><i class="fas fa-percent"></i></div>
                      </div>
                    </div>
                    <p class="text-sm text-blueGray-500 mt-4"><span class="text-emerald-500 mr-2"><i class="fas fa-arrow-up"></i> 12%</span><span class="whitespace-nowrap">Since last month</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 md:px-6 mx-auto w-full -mt-24">
        <div class="flex flex-wrap">
          <div class="w-full xl:w-8/12 px-4">
            <div class="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-blueGray-800">
              <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
                <div class="flex flex-wrap items-center">
                  <div class="relative w-full max-w-full flex-grow flex-1">
                    <h6 class="uppercase mb-1 text-xs font-semibold text-blueGray-200">Overview</h6>
                    <h2 class="text-xl font-semibold text-white">Sales value</h2>
                  </div>
                </div>
              </div>
              <div class="p-4 flex-auto">
                <div class="relative h-350-px">
                  <canvas className="w-496 h-291 block box-border h-[350px] w-[595.5px]" id="line-chart"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full xl:w-4/12 px-4">
            <div class="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-white">
              <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
                <div class="flex flex-wrap items-center">
                  <div class="relative w-full max-w-full flex-grow flex-1">
                    <h6 class="uppercase mb-1 text-xs font-semibold text-blueGray-500">Performance</h6>
                    <h2 class="text-xl font-semibold text-blueGray-800">Total orders</h2>
                  </div>
                </div>
              </div>
              <div class="p-4 flex-auto">
                <div class="relative h-350-px">
                  <canvas className="w-221 h-291 block box-border h-[350px] w-[265.7px]" id="bar-chart"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminStatistic
