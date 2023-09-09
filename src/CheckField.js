import { useState } from "react";
const CheckField = ({ label, description, price }) => {

    const [isChecked, setIsChecked] = useState(false);

  const handleDivClick = () => {
    setIsChecked(!isChecked);
  }

    return (
        <>
                <div className="flex border-2 border-blue-900 p-4 rounded-md mt-8" onClick={handleDivClick}>
            <input type="checkbox" checked={isChecked} onChange={() => {}} />
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