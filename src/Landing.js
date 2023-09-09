// import BackgroundDesk from "./images/bg-sidebar-desktop.svg"
import "./style.css"
import Arcade from "./images/icon-arcade.svg"
import Advanced from "./images/icon-advanced.svg"
import Pro from "./images/icon-pro.svg"
import Check from "./images/icon-checkmark.svg"
import { useState } from "react"


const LandingPage = () => {
    const [step, setStep] = useState(1); // Initialize step state to 1
    
//     const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
    const handleNext = (e) => {
        e.preventDefault();
        if (step < 4) {
            setStep(step + 1); // Move to the next step
        }
    //     const newErrors = {};
    // if (formData.name.trim() === '') {
    //   newErrors.name = 'Name is required';
    // }
    // if (formData.email.trim() === '') {
    //   newErrors.email = 'Email is required';
    // }
    // if (formData.phoneNumber.trim() === '') {
    //   newErrors.phoneNumber = 'Phone Number is required';
    // }

    // if (Object.keys(newErrors).length === 0) {
      // No errors, proceed to the next step or action
      // Add your logic here for what should happen when all fields are valid
      // For now, you can just console.log the form data
    //   console.log(formData);
     
    // } else {
    //   // There are errors, update the errors state
    //   setErrors(newErrors);
    // }

    if (step < 2) {
        setStep(step + 1); // Move to the next step
    }
            
        }
  
    const handleBack = () => {
      if (step > 1) {
        setStep(step - 1); // Move back to the previous step
      }
    };
    const DaStyles2 = [
        "p-1",
        "mr-3",
        "mt-2",
        "md:w-6",
        "w-10",
        "md:h-6",
        "h-10",
        "text-center",
        "text-white", 
        "text-xs", 
        "rounded-full",
        "cursor-pointer",
        "border-2",
        "border-white",
        "flex",
        "align-center",
        "justify-center",
        "items-center"
        
    ]
    const DaStyles1 = [
        "p-1",
        "mr-3",
        "mt-2",
        "md:w-6",
        "w-10",
        "md:h-6",
        "h-10",
        "text-center",
        "text-black", 
        "text-xs", 
        "rounded-full",
        "cursor-pointer",
        "border-2",
        "border-white",
        "flex",
        "align-center",
        "justify-center",
        "items-center",
        "bg-blue-50"
        
    ]
    return ( 
            <>
                    <section className=" Landing  align-center bg-white rounded-md">
                            <div className="grid md:grid-cols-3 md:p-2 grid-cols-1 ">
                                    <div className="LandingBg col-span-1 p-5 md:block flex md:justify-left justify-center ">
                                        <div className="md:block flex md:ml-0 md:mt-0 mt-2  justify-center ">
                                            <div className=" cursor-pointer flex" >
                                                <span className={ step === 1 ? `${DaStyles1.join(" ")} `:`${DaStyles2.join(" ")} ` }>1</span>
                                            <div className="md:block hidden">
                                            <p className="text-gray-300 text-sm ">STEP 1</p>
                                            <p className="text-xs text-white font-bold">YOUR INFO</p>
                                            </div>
                                            </div>
                                          
                                        
                                            
                                            <div className=" md:mt-4 cursor-pointer flex" >
                                                <span className={ step === 2 ? `${DaStyles1.join(" ")} `:`${DaStyles2.join(" ")} ` }>2</span>
                 
                 
                                            <div className="md:block hidden">
                                            <p className="text-gray-300 text-sm ">STEP 2</p>
                                            <p className="text-xs text-white font-bold">SELECT PLAN</p>
                                            </div>
                                            </div>
                                          
                                            
                                            <div className=" md:mt-4 cursor-pointer flex" >
                                                <span className={ step === 3 ? `${DaStyles1.join(" ")} `:`${DaStyles2.join(" ")} ` }>3</span>
                                            <div className="md:block hidden">
                                            <p className="text-gray-300 text-sm ">STEP 3</p>
                                            <p className="text-xs text-white font-bold">ADD ONS</p>
                                            </div>
                                            </div>

                                            <div className=" md:mt-4 cursor-pointer flex" >
                                                <span className={ step === 4 ? `${DaStyles1.join(" ")} `:`${DaStyles2.join(" ")} ` }>4</span>
                                            <div className="md:block hidden">
                                            <p className="text-gray-300 text-sm ">STEP 4</p>
                                            <p className="text-xs text-white font-bold">SUMMARY</p>
                                            </div>
                                            </div>
                                            
                                            </div>
                                            </div>

                                          
                                         < div className="col-span-2 pageBody " >
                                            {step === 1 && (
                                                <div>
                                                <h2 className="text-2xl mt-2 font-bold text-blue-900">Personal Info</h2>
                                                <p className="text-sm text-gray-300">Please provide name, email address, and phone number</p>
                                            <form>
                                                <div className="mb-3 mt-6">  
                                                <label className="my-1 text-sm label flex"><span>Name</span> <span className="ml-auto text-red-200"></span></label>
                                                    <div className="flex items-center border rounded-md px-3 mt-1 py-2">
                                                    <input type="text" 
                                                           className="w-full outline-none text-blue-900" 
                                                           placeholder="e.g, Stephen King" 
                                                          

                                                           autoFocus 
                                                        //    value={formData.name}
                                                        //    onChange={handleInputChange}
                                                           />
                                                    </div>
                                                </div>

                                                <div className="mb-3 mt-6">  
                                                <label className="my-1 text-sm label flex"><span>Email Address</span> <span className="ml-auto text-red-200"></span></label>
                                                    <div className="flex items-center border rounded-md px-3 mt-1 py-2">
                                                    <input type="Email" 
                                                           className="w-full outline-none text-blue-900" 
                                                           placeholder="e.g, stephenking@lorem.com" 
                                                         

                                                        //    value={formData.email} 
                                                        //    onChange={handleInputChange}
                                                           />
                                                    </div>
                                                </div>

                                                <div className="mb-3 mt-6">  
                                                <label className="my-1 text-sm label flex"><span>Phone Number</span> <span className="ml-auto text-red-200"></span></label>
                                                    <div className="flex items-center border rounded-md px-3 mt-1 py-2">
                                                    <input type="text" 
                                                           className="w-full outline-none text-blue-900" 
                                                           placeholder="e.g, +1 234 567 890"
                                                         
                                                        //    value={formData.phoneNumber}
                                                        //    onChange={handleInputChange}
                                                           />
                                                    </div>
                                                </div>

                                                        
                                                
                                                </form>
                                                </div>
                                                 )}
                                          
                                           
                                            
                                  {step === 2 && (       
                                
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
                                                
                                 </div>
                                    )}

                                { step === 3   && (
                                         <div>                                                  
                                                <h2 className="text-2xl mt-2 font-bold text-blue-900">Pick add-ons</h2>
                                                <p className="text-xs text-gray-300">Add-ons helps enhance your gaming experience</p>

                                                <div className="flex border-2 border-blue-900 p-4 rounded-md mt-8 ">
                                                    <input type="checkbox" />
                                                    <div className="ml-3">
                                                        <p className="text-blue-900 text-sm " >Online Service</p>
                                                        <p className="text-gray-300 text-xs ">Access to multi-player game</p>
                                                    </div>
                                                    <p className=" md:ml-32 ml-auto text-sm text-blue-700 mt-1">
                                                        +$1/mo
                                                    </p>
                                                </div>
                                                <div className="flex border-2 border-blue-900 p-4 rounded-md mt-8 ">
                                                    <input type="checkbox" />
                                                    <div className="ml-3">
                                                        <p className="text-blue-900 text-sm" >Large Storage</p>
                                                        <p className="text-gray-300 text-xs">Extra 1TB of cloud save</p>
                                                    </div>
                                                    <p className="md:ml-32 ml-auto text-sm text-blue-700 mt-1">
                                                        +$2/mo
                                                    </p>
                                                </div>
                                                <div className="flex border-2 border-blue-900 p-4 rounded-md mt-8 w-full">
                                                    <input type="checkbox" />
                                                    <div className="ml-3">
                                                        <p className="text-blue-900 text-sm" >Customizble Profile</p>
                                                        <p className="text-gray-300 text-xs">Custome theme on your profile</p>
                                                    </div>
                                                    <p className="md:ml-32 ml-auto  text-sm text-blue-700 mt-1">
                                                        +$2/mo
                                                    </p>
                                                </div>
                                                
                                            </div>
                                               
                                               
                                            )}

                                               {step === 4 && ( 
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
                                              
                                               
                                              )}  


                                    <div className="actionButton" >   
                                            <div className={step === 1 ? "hidden":" text-gray-400  hover:text-blue-900 mt-2 "}>
                                                        <button onClick={handleBack}>
                                                            Go Back
                                                        </button>
                                                    </div>
                                                    
                                                        <button onClick={handleNext} className={step === 4?"hidden":"ml-auto rounded-md bg-blue-900 px-4 h-10 py-2 w-32 text-center text-white "}>
                                                                Next Step
                                                        </button>
                                                        <button onClick={handleNext} className={step ===4 ? "ml-auto rounded-md bg-blue-600 px-4 py-2 h-10 w-32 text-center text-white " : "hidden"}>
                                                                Submit
                                                        </button>
                                                   
                                                </div>
                                                   
                                                </div>

                                                  </div>
                                  
                                                      
                                                  <div className="actionButton1" >   
                                            <div className={step === 1 ? "hidden":" text-gray-400  hover:text-blue-900 mt-2"}>
                                                        <button onClick={handleBack}>
                                                            Go Back
                                                        </button>
                                                    </div>
                                                    
                                                        <button onClick={handleNext} className={step === 4?"hidden":"ml-auto rounded-md bg-blue-900 px-4 h-10 py-2 w-32 text-center text-white "}>
                                                                Next Step
                                                        </button>
                                                        <button onClick={handleNext} className={step ===4 ? "ml-auto rounded-md bg-blue-600 px-4 py-2 h-10 w-32 text-center text-white " : "hidden"}>
                                                                Submit
                                                        </button>
                                                   
                                                </div>
                                
                    </section>
            </>
     );
}
 
export default LandingPage;