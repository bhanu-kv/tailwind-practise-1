export const Typer = ({
  onChange,
  type,
  placeholder
}) => {
  return <div>
    <input onChange={onChange} type={type} placeholder={placeholder} className="text-gray-300 bg-blue-500 outline outline-1 outline-gray-600 p-3 w-[360px] rounded-2xl
      caret-white" />
  </div>
}
