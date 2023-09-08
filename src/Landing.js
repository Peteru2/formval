// import BackgroundDesk from "./images/bg-sidebar-desktop.svg"
import "./style.css"
import Arcade from "./images/icon-arcade.svg"
import Advanced from "./images/icon-advanced.svg"
import Pro from "./images/icon-pro.svg"
import Check from "./images/icon-checkmark.svg"
const LandingPage = () => {

    const DaStyles2 = [
        "p-1",
        "mr-3",
        "mt-2",
        "w-6",
        "h-6",
        "text-center",
        "text-white", 
        "text-xs", 
        "rounded-full",
        "cursor-pointer",
        "border-2",
        "border-white",
        "flex",
        "align-center",
        "justify-center"
        
    ]
    return ( 
            <>
                    <section className=" Landing p-2 my-auto align-center bg-white rounded-md">
                            <div className="grid grid-cols-3">
                                    <div className="LandingBg col-span-1 p-5 ">
                                        <div>
                                            <div className=" cursor-pointer flex" >
                                                <span className={DaStyles2.join(" ")}>1</span>
                                            <div>
                                            <p className="text-gray-300 text-sm ">STEP 1</p>
                                            <p className="text-xs text-white font-bold">YOUR INFO</p>
                                            </div>
                                            </div>
                                          
                                        
                                            
                                            <div className=" mt-4 cursor-pointer flex" >
                                                <span className={DaStyles2.join(" ")}>2</span>
                                            <div>
                                            <p className="text-gray-300 text-sm ">STEP 2</p>
                                            <p className="text-xs text-white font-bold">SELECT PLAN</p>
                                            </div>
                                            </div>
                                          
                                            
                                            <div className=" mt-4 cursor-pointer flex" >
                                                <span className={DaStyles2.join(" ")}>3</span>
                                            <div>
                                            <p className="text-gray-300 text-sm ">STEP 3</p>
                                            <p className="text-xs text-white font-bold">ADD ONS</p>
                                            </div>
                                            </div>

                                            <div className=" mt-4 cursor-pointer flex" >
                                                <span className={DaStyles2.join(" ")}>4</span>
                                            <div>
                                            <p className="text-gray-300 text-sm ">STEP 4</p>
                                            <p className="text-xs text-white font-bold">SUMMARY</p>
                                            </div>
                                            </div>
                                            
                                            </div>
                                            </div>

                                            < div className="flex justify-center align-center w-full col-span-2 hidden" >
                                                <div>
                                                <h2 className="text-2xl mt-2 font-bold text-blue-900">Personal Info</h2>
                                                <p className="text-sm text-gray-300">Please provide name, email address, and phone number</p>

                                                <div className="mb-3 mt-6">  
                                                <label className="my-5 text-sm label">Name</label>
                                                    <div className="flex items-center border rounded-md px-3 mt-1 py-2">
                                                    <input type="text" className="w-full outline-none" placeholder="Name" autoFocus/>
                                                    </div>
                                                </div>

                                                <div className="mb-3 mt-6">  
                                                <label className="my-5 text-sm label">Email Address</label>
                                                    <div className="flex items-center border rounded-md px-3 mt-1 py-2">
                                                    <input type="Email" className="w-full outline-none" placeholder="Email" />
                                                    </div>
                                                </div>

                                                <div className="mb-3 mt-6">  
                                                <label className="my-1 text-sm label flex"><span>Phone Number</span> <span className="ml-auto text-red-200">This field cannot be empty</span></label>
                                                    <div className="flex items-center border rounded-md px-3 mt-1 py-2">
                                                    <input type="Email" className="w-full outline-none" placeholder="Phone Number" />
                                                    </div>
                                                </div>

                                                <div className="ml-auto rounded-md bg-blue-800 px-4 py-2 w-24 text-center text-white">
                                                        <button>
                                                            Next
                                                        </button>
                                                </div>
                                                </div>
                                            </div>
                                   
                                   <div  className="flex justify-center align-center w-full col-span-2 mt-4 hidden">
                                    <div>                                                  
                                          <h2 className="text-2xl mt-2 font-bold text-blue-900">Select your plan</h2>
                                                <p className="text-sm text-gray-300">You have the option of monthly or yearly billing</p>

                                                <div className="grid grid-cols-3 gap-3 mt-5">
                                                        <div className="p-4 border-2 rounded-md hover:border-blue-900 ">
                                                            <div className="w-8 h-8 flex justify-center align- items-center bg-yellow-500 rounded-full">
                                                            <img src={Arcade} alt="Arcade" />
                                                            </div>
                                                            <div className="mt-6">
                                                                <p>Arcade</p>
                                                                <p className="text-xs text-gray-400">$9/mo</p>
                                                            </div>
                                                        </div>

                                                        <div className="p-4 border-2 rounded-md hover:border-blue-900 ">
                                                            <div className="w-8 h-8 flex justify-center align- items-center bg-yellow-500 rounded-full">
                                                                <img src={Advanced} alt="Advanced" />
                                                            </div>
                                                            <div className="mt-6">
                                                                <p>Arcade</p>
                                                                <p className="text-xs text-gray-400">$9/mo</p>
                                                            </div>
                                                        </div>
                                                        <div className="p-4 border-2 rounded-md hover:border-blue-900 ">
                                                            <div className="w-8 h-8 flex justify-center align- items-center bg-yellow-500 rounded-full">
                                                                <img src={Pro} alt="pro" />
                                                            </div>
                                                            <div className="mt-6">
                                                                <p>Arcade</p>
                                                                <p className="text-xs text-gray-400">$9/mo</p>
                                                            </div>
                                                        </div>

                                                </div>
                                                <div className="bg-blue-50 flex p-2 rounded-md mt-3 justify-center">
                                                    <p className="text-sm mr-3">Monthly</p>
                                                    <p><img src={Check} alt="Check" /></p>
                                                    <p className="text-sm text-gray-400 ">Yearly</p>
                                                </div>
                                                <div className="flex mt-32" >
                                                    <div className=" text-gray-400 mt-1 hover:text-blue-900">
                                                        <button>
                                                            Go Back
                                                        </button>
                                                    </div>
                                                    <div className="ml-auto rounded-md bg-blue-900 px-4 py-2 w-24 text-center text-white ">
                                                        <button>
                                                                Next
                                                        </button>
                                                    </div>
                                                </div>
                                                </div>
                                   </div>



                                   <div  className="flex justify-center align-center w-full col-span-2 mt-4 hidden">
                                         <div>                                                  
                                                <h2 className="text-2xl mt-2 font-bold text-blue-900">Pick add-ons</h2>
                                                <p className="text-xs text-gray-300">Add-ons helps enhance your gaming experience</p>

                                                <div className="flex border-2 border-blue-900 p-4 rounded-md mt-8 w-full">
                                                    <input type="checkbox" />
                                                    <div className="ml-3">
                                                        <p className="text-blue-900 text-sm" >Online Service</p>
                                                        <p className="text-gray-300 text-xs">Access to multi-player game</p>
                                                    </div>
                                                    <p className="ml-32 text-sm text-blue-700 mt-1">
                                                        +$1/mo
                                                    </p>
                                                </div>
                                                <div className="flex border-2 border-blue-900 p-4 rounded-md mt-8 w-full">
                                                    <input type="checkbox" />
                                                    <div className="ml-3">
                                                        <p className="text-blue-900 text-sm" >Large Storage</p>
                                                        <p className="text-gray-300 text-xs">Extra 1TB of cloud save</p>
                                                    </div>
                                                    <p className="ml-32 text-sm text-blue-700 mt-1">
                                                        +$2/mo
                                                    </p>
                                                </div>
                                                <div className="flex border-2 border-blue-900 p-4 rounded-md mt-8 w-full">
                                                    <input type="checkbox" />
                                                    <div className="ml-3">
                                                        <p className="text-blue-900 text-sm" >Customizble Profile</p>
                                                        <p className="text-gray-300 text-xs">Custome theme on your profile</p>
                                                    </div>
                                                    <p className="ml-32 text-sm text-blue-700 mt-1">
                                                        +$2/mo
                                                    </p>
                                                </div>

                                                </div>
                                                </div>

                                                <div  className="flex justify-center align-center w-full col-span-2 mt-4 ">
                                         <div>                                                  
                                                <h2 className="text-2xl mt-2 font-bold text-blue-900">Finishing Up</h2>
                                                <p className="text-xs text-gray-300">Double-check everything looks OK before confirming</p>

                                               
                                                    <div className="bg-blue-50 rounded-md p-4 mt-8">
                                                        <div className="flex pb-4 border-b-2">
                                                            <div>
                                                                <p className="text-blue-900 text-sm">Arcade(Monthly)</p>
                                                                <p className="text-blue-700 text-xs ">Change</p>
                                                            </div>
                                                            <p className="text-blue-900 text-xs ml-40 mt-2">+$9/mo</p>
                                                        </div>
                                                        <div className="pt-3">
                                                            <div className="flex">
                                                            <p className="text-xs text-gray-300">Online Service</p>
                                                            <p className="text-xs text-blue-900 ml-auto">+$1/mo</p>
                                                            </div>
                                                            <div className="flex mt-3">
                                                            <p className="text-xs text-gray-300">Large Storage</p>
                                                            <p className="text-xs text-blue-900 ml-auto ">+$2/mo</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex mt-4 p-2">
                                                        <p className="text-gray-400 text-sm">Total(per month)</p>
                                                        <p className="text-blue-900 ml-auto font-bold">+$12/mo</p>
                                                    </div>
                                                </div>
                                                </div>
                                                
                            </div>
                    </section>
            </>
     );
}
 
export default LandingPage;