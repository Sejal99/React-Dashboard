export const Button = ({width, type="", name, handler}) =>{
    return(
        <button type={type} className={`rounded-md bg-gray-800 text-gray-50 border-[#1B3D58] border-l border-r border-b border-t p-3 hover:bg-[#36B6EE] duration-500 ${width}`} onClick={handler}>{name}</button>
    )
}