import Arcade from "./images/icon-arcade.svg"
import Advanced from "./images/icon-advanced.svg"
import Pro from "./images/icon-pro.svg"
import { useState } from "react"

const Plan = ({onPriceClick}) => {
    const [Sub, setSub] = useState(true)
    const [selectedDivIndex, setSelectedDivIndex] = useState(null);

  const handleDivClick = (index, label, priceText) => {
    const priceValue = parseInt(priceText.match(/\d+/)[0], 10);
    console.log(priceValue); // Log the extracted number value to the console

    setSelectedDivIndex(index); // Set the selected div index in state

    // Call the callback function to send the priceValue and label to the parent component
    onPriceClick({ label, priceValue });
  }
    const handleSub = ()=>{
        setSub(!Sub)
    }

    return ( 
        <>
             <h2 className="text-2xl mt-2 font-bold text-blue-900">Select your plan</h2>
                                                <p className="text-sm text-gray-300">You have the option of monthly or yearly billing</p>

                                                <div className={Sub ?"grid md:grid-cols-3 grid-cols-1 gap-3 mt-5":"hidden"} >

                                                <div
                                                           className={`p-4 flex md:grid border-2 rounded-md hover:border-blue-900 cursor-pointer ${
                                                            selectedDivIndex === 0 ? 'bg-blue-50 border-blue-900' : ''
                                                          }`}
                                                            onClick={() => 
                                                            handleDivClick(0, 'Arcade', "$9/mo")}
                                                            >
                                                            <div className="md:mr-0 mr-4">
                                                                <img src={Arcade} alt="Arcade" />
                                                            </div>
                                                            <div className="md:mt-6 Arcade">
                                                                <p className="font-bold text-blue-900">Arcade</p>
                                                                <p className="text-xs text-gray-400">$9/mo</p>
                                                            </div>
                                                            </div>

                                                            <div
                                                           className={`p-4 flex md:grid border-2 rounded-md hover:border-blue-900 cursor-pointer ${
                                                            selectedDivIndex === 1 ? 'bg-blue-50 border-blue-900' : ''
                                                          }`}
                                                            onClick={() => 
                                                            handleDivClick(1, 'Advanced', "$19/mo")}
                                                            >
                                                            <div className="md:mr-0 mr-4">
                                                                <img src={Advanced} alt="Advanced" />
                                                            </div>
                                                            <div className="md:mt-6">
                                                                <p className="font-bold text-blue-900">Advanced</p>
                                                                <p className="text-xs text-gray-400">$19/mo</p>
                                                            </div>
                                                        </div>

                                                        <div
                                                           className={`p-4 flex md:grid border-2 rounded-md hover:border-blue-900 cursor-pointer ${
                                                            selectedDivIndex === 2 ? 'bg-blue-50 border-blue-900' : ''
                                                          }`}
                                                            onClick={() => 
                                                            handleDivClick(2, 'Pro', "$29/mo")}
                                                            >
                                                            <div className="md:mr-0 mr-4">
                                                                <img src={Pro} alt="pro" />
                                                            </div>
                                                            <div className="md:mt-6">
                                                                <p className="font-bold text-blue-900">Pro </p>
                                                                <p className="text-xs text-gray-400">$9/mo</p>
                                                            </div>
                                                        </div>

                                                </div>
                                                <div className={Sub ?"hidden":"grid md:grid-cols-3 grid-cols-1 gap-3 mt-5"}>
                                                        <div className="p-4 flex md:grid border-2 rounded-md hover:border-blue-900 ">
                                                            <div className=" md:mr-0 mr-4">
                                                            <img src={Arcade} alt="Arcade" />
                                                            </div>
                                                            <div className="md:mt-6 ">
                                                                <p className="font-bold text-blue-900">Arcade</p>
                                                                <p className="text-xs text-gray-400">$90/yr</p>
                                                                <p className="text-xs text-blue-900">2 months free</p>

                                                            </div>
                                                        </div>

                                                        <div className="p-4 flex md:grid border-2 rounded-md hover:border-blue-900 ">
                                                            <div className="md:mr-0 mr-4">
                                                                <img src={Advanced} alt="Advanced" />
                                                            </div>
                                                            <div className="md:mt-6">
                                                                <p className="font-bold text-blue-900">Advanced</p>
                                                                <p className="text-xs text-gray-400">$120/mo</p>
                                                                <p className="text-xs text-blue-900">2 months free</p>

                                                            </div>
                                                        </div>
                                                        <div className="p-4 flex md:grid border-2 rounded-md hover:border-blue-900 ">
                                                            <div className="md:mr-0 mr-4">
                                                                <img src={Pro} alt="pro" />
                                                            </div>
                                                            <div className="md:mt-6">
                                                                <p className="font-bold text-blue-900">Pro</p>
                                                                <p className="text-xs text-gray-400">$150/mo</p>
                                                                <p className="text-xs text-blue-900">2 months free</p>

                                                            </div>
                                                        </div>

                                                </div>
                                                <div className="bg-blue-50 flex p-2 rounded-md mt-3 justify-center">
                                                    <p className={Sub?"text-sm  text-blue-900 font-bold":"text-sm text-gray-400 "}>Monthly</p>
                                                    <p className="bg-blue-900 rounded-full px-1 mx-4  flex items-center cursor-pointer" onClick={handleSub}>
                                                        <span className= {Sub ? "bg-white h-4 w-4 p-1  rounded-full":"bg-transparent h-4 w-4 p-1  rounded-full"}></span>
                                                        <span className={Sub ? "bg-transparent h-4 w-4 p-1  rounded-full":"bg-white h-4 w-4 p-1  rounded-full"}></span>
                                                    </p>
                                                    <p className={Sub? "text-sm text-gray-400  mr-3 ": "text-sm mr-3 text-blue-900 font-bold"}>Yearly</p>
                                                </div>
                                         
        </>
     );
}
 
export default Plan;