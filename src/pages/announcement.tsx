import React from 'react'
import ClientLayout from "@/components/ClientLayout";
import AnnouncementCard from '@/components/AnnouncementCard';
import Box from "@mui/material/Box";

interface mockdatats{
    id: string;
    topic: string;
    detail: string;
    datePosted: string;
}

const mockdata: mockdatats[] = [
    {
       id: '1',
      topic: "NOTE SUBMISSION DEADLINE",
      detail: "Condimentum pellentesque nibh risus nam duis sit. Maecenas sed fames commodo at penatibus. Egestas id adipiscing lectus integer libero molestie facilisi placerat cras. Ullamcorper ut nec tortor nunc non vitae. Tortor pulvinar quam pellentesque nibh. Turpis arcu nam non",
      datePosted: "Jan 10, 2023 at 10:43am",
   },
    {
        id: '2',
      topic: "NOTE SUBMISSION DEADLINE",
      detail: "Condimentum pellentesque nibh risus nam duis sit. Maecenas sed fames commodo at penatibus. Egestas id adipiscing lectus integer libero molestie facilisi placerat cras. Ullamcorper ut nec tortor nunc non vitae. Tortor pulvinar quam pellentesque nibh. Turpis arcu nam non",
      datePosted: "Jan 10, 2023 at 10:43am",
   },
];


type Props = {}

const announcement = (props: Props) => {
    return (
       <ClientLayout>
          <Box sx={{ paddingX: "3rem", paddingY: "3.5rem" }}>
             <div className='flex flex-col gap-4'>
                {mockdata.map((data) => (
                   <div key={data.id}>
                      <AnnouncementCard
                         topic={data.topic}
                         detail={data.detail}
                         datePosted={data.datePosted}
                      />
                   </div>
                ))}
             </div>
          </Box>
       </ClientLayout>
    );
}

export default announcement