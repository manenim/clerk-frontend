import React, {FC} from 'react';

export interface IInputFieldProps {
    label?: string
    placeholder?: string;
}

const InputField: FC<IInputFieldProps>  = ({label, placeholder}) => {
  return (
      <div>
        <label className='block mb-2'>{label}</label>
          <input type="text" className='border-[1px] border-[#e0e3e6] outline-none rounded-[6px] py-1 px-4 w-[22rem]' placeholder={placeholder} />
    </div>
  );
}

export default InputField