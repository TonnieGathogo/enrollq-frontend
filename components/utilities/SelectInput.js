import React from 'react'
import { Select } from 'antd';
export default function SelectInput({ disabled = false, className, ...props }) {
  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  return (
    <Select
      disabled={disabled}
      showSearch
      size='large'
      optionFilterProp="children"
      filterOption={filterOption}
      className={`${className}  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full   dark:placeholder-gray-400 `}
      {...props}
    />
  )
}
