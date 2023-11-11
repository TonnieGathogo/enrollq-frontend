import { Input } from 'antd';
const { TextArea } = Input;
const TextAreaInput = ({ disabled = false, className, ...props }) => (
    <TextArea 
        rows={2}
        className={`${className}   text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full   dark:placeholder-gray-400text-white`}
        {...props}
    />
)

export default TextAreaInput