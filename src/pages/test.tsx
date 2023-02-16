import Appbar from '@/components/Appbar';
import InputField from '@/components/InputField';
import SelectLabels from '@/components/Select';
import AppBar from '@/components/Appbar';
import Card from '@/components/Card';
import * as React from 'react';

export interface ItestProps {
}

const test = (props: ItestProps) =>  {
    
     const supportedCountries = [
  {
    name: "Nigeria",
    code: "NGA",
    flag: "nga"
  }
]

  return (
    <div>
      <Appbar input notifications />
      <Card
        subject="English Language"
        desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        icon = "star"
      />
      <InputField label="Test" placeholder="Type Something" />
      <SelectLabels supportedCountries = {supportedCountries}/>
    </div>

  );
}


export default test