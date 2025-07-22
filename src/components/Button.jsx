export const Button = ({
  onClick,
  type,
  placeholder,
  disabled
}) => {
  return <div>
    <button onClick={onClick} type={type} className={`${disabled ? "bg-green-400 text-black" : "bg-gray-400 text-white"}
    px-[150px] py-3 rounded-2xl font-medium`}>{placeholder}</button>
  </div >
}
