// import BackgroundDesk from "./images/bg-sidebar-desktop.svg"

import "./style.css"
import Arcade from "./images/icon-arcade.svg"
import Advanced from "./images/icon-advanced.svg"
import Pro from "./images/icon-pro.svg"
import CheckField from "./CheckField"
import Appreciation from "./Appreciation"
import { useState, useEffect } from "react"


const LandingPage = () => {
    const [step, setStep] = useState(1); 
    const [Sub, setSub] = useState(true)
    
  

    const [isDivClicked, setIsDivClicked] = useState(false);
    const [clickedPrice, setClickedPrice] = useState(null);
    const [clickedDivIndex, setClickedDivIndex] = useState(null);

  // Function to update the state when a div is clicked
  const handleDivClick = (price, index) => {
    setIsDivClicked(true);
    setClickedPrice(price);
    setClickedDivIndex(index); // Set the clicked div's index
  };


  useEffect(() => {
    if (isDivClicked) {
      console.log(`Div ${clickedDivIndex} is clicked. Price: ${clickedPrice}`);
    } else {
      console.log('No div is clicked.');
    }
  }, [isDivClicked, clickedPrice, clickedDivIndex]);

    
    const handleSub = ()=>{
        setSub(!Sub)
    }
    const handleArcade1 = () => {

        const arcadeElements = document.querySelectorAll(".Arcade p");
        arcadeElements.forEach((element, index) => {
          if (index === 0) {
            console.log("First Paragraph:", element.textContent);
          } else if (index === 1) {
            console.log("Second Paragraph:", element.textContent);
          }
        });
      };
   
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({
    name: '', 
    email: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
    const handleNext = (e) => {
        e.preventDefault();
        if(step===1){
                const newErrors = {};
            if (formData.name.trim() === '') {
            newErrors.name = 'Name is required';
            }

            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                if (!formData.email.trim()) {
                    newErrors.email = 'Email is required';
                } else if (!emailRegex.test(formData.email)) {
                    newErrors.email = 'Invalid email format';
                }

                // Phone number format validation using regex
                const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
                if (!formData.phoneNumber.trim()) {
                    newErrors.phoneNumber = 'Phone Number is required';
                } else if (!phoneRegex.test(formData.phoneNumber)) {
                    newErrors.phoneNumber = 'Invalid phone number format';
                }


            if (Object.keys(newErrors).length === 0) {
                setErrors({});

                    if (step < 5) {
                        setStep(step + 1); // Move to the next step
                    }
                console.log(formData);
            
            }
         else {
            setErrors(newErrors);
            }
        }
        if(step === 3){
            if (isDivClicked) {
                console.log(`Button clicked and div is clicked. Price: ${clickedPrice}`);
                if (step < 5) {
                    setStep(step + 1); // Move to the next step
                }
              } else {
                console.log('Button clicked but no div is clicked.');
              }
        }
        if (step < 5) {
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
                                            <div className=" cursor-pointer flex">
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
                                                <label className="my-1 text-sm label flex"><span>Name</span> <span className="ml-auto text-red-400">{errors.name}</span></label>
                                                    <div className="flex items-center border rounded-md px-3 mt-1 py-2">
                                                    <input type="text" 
                                                           className="w-full outline-none text-blue-900" 
                                                           placeholder="e.g, Stephen King" 
                                                           autoFocus 
                                                           name="name"
                                                           value={formData.name}
                                                           onChange={handleInputChange}
                                                           />
                                                    </div>
                                                </div>

                                                <div className="mb-3 mt-6">  
                                                <label className="my-1 text-sm label flex"><span>Email Address</span> <span className="ml-auto text-red-400">{errors.email}</span></label>
                                                    <div className="flex items-center border rounded-md px-3 mt-1 py-2">
                                                    <input type="Email" 
                                                           className="w-full outline-none text-blue-900 text-block" 
                                                           placeholder="e.g, stephenking@lorem.com"
                                                           name="email"
                                                           value={formData.email} 
                                                           onChange={handleInputChange}
                                                           />
                                                    </div>
                                                </div>

                                                <div className="mb-3 mt-6">  
                                                <label className="my-1 text-sm label flex"><span>Phone Number</span> <span className="ml-auto text-red-400">{errors.phoneNumber}</span></label>
                                                    <div className="flex items-center border rounded-md px-3 mt-1 py-2">
                                                    <input type="text" 
                                                           className="w-full outline-none text-blue-900" 
                                                           name="phoneNumber"
                                                           placeholder="e.g, +1 234 567 890"                                                      
                                                           value={formData.phoneNumber}
                                                           onChange={handleInputChange}
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

                                                <div className={Sub ?"grid md:grid-cols-3 grid-cols-1 gap-3 mt-5":"hidden"} onClick={handleArcade1}>
                                                        <div className="p-4 flex md:grid border-2 rounded-md hover:border-blue-900 ">
                                                            <div className=" md:mr-0 mr-4">
                                                            <img src={Arcade} alt="Arcade" />
                                                            </div>
                                                            <div className="md:mt-6 Arcade" >
                                                                <p className="font-bold text-blue-900">Arcade</p>
                                                                <p className="text-xs text-gray-400">$9/mo</p>
                                                            </div>
                                                        </div>

                                                        <div className="p-4 flex md:grid border-2 rounded-md hover:border-blue-900 " onClick={handleArcade1}>
                                                            <div className="md:mr-0 mr-4">
                                                                <img src={Advanced} alt="Advanced" />
                                                            </div>
                                                            <div className="md:mt-6">
                                                                <p className="font-bold text-blue-900">Advanced</p>
                                                                <p className="text-xs text-gray-400">$9/mo</p>
                                                            </div>
                                                        </div>
                                                        <div className="p-4 flex md:grid border-2 rounded-md hover:border-blue-900 " >
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
                                                
                                 </div>
                                    )}

                                { step === 3   && (
                                         <div>                                                  
                                                <h2 className="text-2xl mt-2 font-bold text-blue-900">Pick add-ons</h2>
                                                <p className="text-xs text-gray-300">Add-ons helps enhance your gaming experience</p>

                                                <CheckField onDivClick={handleDivClick}/>
                                                   
                                                    
                                                
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
                                              {step === 5 && ( 
                                                    <Appreciation />                                            
                                                
                                               
                                              )}  


                                    <div className={step === 5 ? "hidden":"actionButton" }>   
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
                                  
                                                      
                                                  <div className={step ===5 ? "hidden":"actionButton1"} >   
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