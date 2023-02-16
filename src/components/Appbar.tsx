import Image from 'next/image'
import React, {FC} from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Badge } from '@mui/material';
import { purple, red } from '@mui/material/colors';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

interface IAppbar {
  input?: boolean;
  notifications?: boolean;
}


const Appbar: FC<IAppbar> = ({input, notifications}) => {
  return (
    <nav className="bg-primary">
        <div className="w-[94%] mx-auto flex items-center justify-between h-16">
              <div className="logo">
                  <Image src="/images/svgs/Logo.svg" width={80} height={80} alt="logo" className=""/>
             </div>
              
        
                {input ? <div className='rounded-md flex items-center pl-4 bg-white w-[30%] h-[60%]'>
                    <SearchOutlinedIcon className='text-2xl mr-2 text-[rgba(0,0,0,.5)]'/>
                    <input type="text" className='w-[80%] border-l-[1px] pl-4 outline-none text-[rgba(0,0,0,1)] bg-transparent py-[.4rem]' placeholder='Input Search' />
                </div>
                  :
                <div className="text hidden md:block">
                  <h2 className="text-white">English (Oral-pronunctiation)</h2>
                </div>}
        
              <div className="avatar flex w-28 items-center justify-between">
                {notifications && <Badge badgeContent={4} color="error">
                  <CircleNotificationsIcon color="action" className='text-[2rem] text-white bg-primary' />
                </Badge>}
                <Image src="/images/avatar.jpg" width={30} height={30} alt="avatar" className="rounded-full"/>
             </div>
        </div>
    </nav>
  )
}

export default Appbar