import React, {FC, useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Image from 'next/image';

export interface SupportedCountriesProps{
    supportedCountries: Country[]
}

export interface Country {
    name: string;
    code: string;
    flag: string
}

const SelectLabels= ({supportedCountries}: SupportedCountriesProps) => {
  const [country, setCountry] = useState<string>('naija');

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
    };

  
  return (
    <div>
      <FormControl className = "focus:outline-none focus:border-boderGrey" sx={{ m: 2, minWidth: 345, outline: "none" }}>
        <label className = "mb-2">Country</label>
        <Select
          value={country}
          onChange={handleChange}
          displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  className = "outline-none hover:outline-none hover:border-borderGrey focus:outline-none focus:border-borderGrey"
        >
         
         
          {supportedCountries.map((country: Country, index: number) => (
              <MenuItem key = {index} value={country.code} className='ml-3'>
                <div className='flex'>
                      <Image src={`/images/svgs/${country.flag}.svg`} alt="country flag" width={20} height={20} />  
                    <h3 className='ml-3'>{country.name}</h3>      
                  </div>  
            </MenuItem>  
            ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectLabels