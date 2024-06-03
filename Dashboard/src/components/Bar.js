export const Bar = ({text="", content, margin="", handler={}}) =>{
    return(
        <p
        className={`border-[#36B6EE] text-gray-50 border-l border-r border-t border-b rounded-lg p-3 text-center font-semibold overflow-x-auto text-xl bg-[#1E293B] flex gap-3 items-center justify-center cursor-pointer ${margin} text-sm`} onClick={handler}
      >
        {text}{content}
      </p>
    )

}