import Image from 'next/image'
import React, {FC} from 'react'


export interface ICardProps {
    subject: string;
    desc: string;
    icon: string;
}


const Card: FC<ICardProps> = ({subject, desc, icon}) => {
  return (
    <div className='border-[1px] w-[25%] border-borderGrey'>
          <div className="wrapper p-2 flex items-start">
              <div className="left flex items-start">
                  <div className="icon mt-[.4rem] mr-4">
                      <Image src="/images/svgs/Vector.svg" width= {28} height = {28} alt="card icon" />
                  </div>
                  <div className="text">
                      <h3 className='text-primary font-bold'>{subject}</h3>
                      <p className='w-[90%] text-[.8rem]'>{desc}</p>
                  </div>
              </div>
              <Image src={`/images/svgs/${icon}.svg`} width = {20} height = {20} alt = "card star" />
          </div>
    </div>
  )
}

export default Card