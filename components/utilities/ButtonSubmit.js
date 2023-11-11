const ButtonSubmit = ({ type = 'submit', className, ...props }) => (
    <button
        type={type}
        className={`${className} w-36 h-10 inline-block rounded border border-gray-200 px-6 pb-[6px] pt-2 text-lg font-semibold uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 `}
        {...props}
    />
)

export default ButtonSubmit