import React from 'react'
import SideBar from './SideBar'
import { HiViewGridAdd } from 'react-icons/hi'
import { FaRegListAlt, FaUser } from 'react-icons/fa'
import Table from '../../../Components/Table'
import { Musics } from '../../../Data/MusicData'

function Dashboard() {
    const DashboardData = [
        {
            bg:'bg-orange-600',
            icon:FaRegListAlt,
            title:'Total Musics',
            total:90
        },{
            bg:'bg-blue-700',
            icon:HiViewGridAdd,
            title:'Total Categories',
            total:8
        },{
            bg:'bg-green-600',
            icon:FaUser,
            title:'Total Users',
            total:133
        }
    ]
  return (
    <SideBar>
        <h2 className='text-xl text-white font-bold'>Dashboard</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
            {DashboardData.map((data,index) => (
                <div key={index} className='p-4 rounded bg-dry border-border grid grid-cols-4 gap-2'>
                    <div className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}>
                        <data.icon/>
                    </div>
                    <div className='col-span-3'>
                        <h2 className='text-text'>{data.title}</h2>
                        <p className='text-text mt-2 font-bold'>
                            {data.total}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <h3 className='text-md font-medium my-6 text-border italic'>Recent Music</h3>
        <Table data={Musics.slice(0,6)}/>
    </SideBar>
  )
}

export default Dashboard