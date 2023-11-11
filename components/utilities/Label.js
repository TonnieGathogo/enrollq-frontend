const Label = ({ className, children, ...props }) => (
    <label
        className={`${className} block text-lg text-gray-400"`}
        {...props} >
        {children}
    </label>
)

export default Label