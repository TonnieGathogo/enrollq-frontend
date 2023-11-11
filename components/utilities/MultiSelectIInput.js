import { Select } from 'antd';

export default function MultiSelectIInput({disabled = false, className, ...props}) {
  return (
    <Select
      mode="multiple"
      allowClear
      placeholder="Please select"
      size='large'
      className={`${className}  bg-gray-50 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full   dark:placeholder-gray-400text-white`}
      {...props}
    />
  )
}
