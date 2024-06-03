import { useSelector } from "react-redux";
import { Button } from "./Button";
import { Bar } from "./Bar";

const User = () =>{
    const userData = useSelector((state)=>state.form.userObject)
   

    return (
        <div className="m-5 w-full lg:w-[40%] p-[2em] lg:p-[5em] rounded-lg border-white border 1px solid white shadow-lg shadow-white ">
            <p className="p-3 text-gray-50 text-lg mx-auto border-[#36B6EE] border-l border-r border-t border-b rounded-lg m-3 text-center">
                <span>User Data:</span>
                {JSON.stringify({
                    "name": userData.name,
                    "address": userData.address,
                    "email": userData.email,
                })}
            </p>
            <Bar text="Auto-generated Id:" content={JSON.stringify({"userId": userData.userId})}/>
            <input name="name" type="name" placeholder="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#36B6EE] focus:border-[#36B6EE] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-50 dark:focus:ring-[#36B6EE] dark:focus:border-[#36B6EE] m-3 mx-auto" required />
            <Button name="Save" width="w-full" type="submit" handler={(e) => console.log(e)}/>
        </div>
    )
}

export default User;