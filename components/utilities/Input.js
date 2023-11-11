import { Input } from "antd"
const TextInput = ({ disabled = false, className, ...props }) => (
    <Input
        disabled={disabled}
        className={`${className} border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        {...props}
    />
)

export default TextInput