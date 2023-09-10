import { useState } from "react";
const CheckField = ({ label, description, price }) => {

    const [isChecked, setIsChecked] = useState(false);

  const handleDivClick = () => {
    setIsChecked(!isChecked);
//     if(price =="+$2/mo"){
//         console.log(price);
//     }
// const check = document.querySelector(".check").value
// console.log(check)
//   }
// value={isChecked?"2":"3"}

    return (
        <>
                <div className={isChecked?"flex border-2 border-blue-900 p-4 rounded-md mt-8 cursor-pointer":"flex border-2 p-4 rounded-md mt-8 cursor-pointer"} onClick={handleDivClick}>
            <input type="checkbox" checked={isChecked} value={isChecked?"2":"3"} className="check" name="checkbox" onChange={() => {}} />
            <div className="ml-3">
                <p className="text-blue-900 text-sm">{label}</p>
                <p className="text-gray-300 text-xs">{description}</p>
            </div>
            <p className="md:ml-32 ml-auto text-sm text-blue-700 mt-1">{price}</p>
            </div>
        </>
      );
}
 
export default CheckField;