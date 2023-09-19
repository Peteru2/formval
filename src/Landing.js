// import BackgroundDesk from "./images/bg-sidebar-desktop.svg"

import "./style.css"
import Plan from "./Plan"
import CheckField from "./CheckField"
import Appreciation from "./Appreciation"
import { useState } from "react"


const LandingPage = () => {
    const [step, setStep] = useState(1); 
    const [totalPrice, setTotalPrice] = useState({
        title: "",
        price:"",
        label:""
    });
    const [selectedDivIndex, setSelectedDivIndex] = useState(null);
    const [selectedItems, setSelectedItems] = useState([])
    const [subscriptionValue, setSubscriptionValue] = useState('Monthly');
    const [clickedDiv, setClickedDiv] = useState({ 
        label: null, 
        priceValue: null });
    
        const handlePriceClick = ({ label, priceValue }) => {
            setClickedDiv({ label, priceValue }); // Set the clicked div information in the parent component
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
        if (step === 2){
            if (step < 5) {
            setStep(step + 1); // Move to the next step
            }
        }
        if (step === 3){
            if (step < 5) {
            setStep(step + 1); // Move to the next step
            }
        }    
      
        }
  
  
    const handleBack = (e) => {
        e.preventDefault()
        setSelectedDivIndex(selectedDivIndex)
      if (step > 1) {
        setStep(step - 1); // Move back to the previous step
      }
    };
        const handleSubmit = ()=>{
         if(clickedDiv.label===null || selectedItems.length ===0 ){
            alert("Not all fields has been filled");
         }
         else{
            if(step === 4){
            if (step < 5) {
                setStep(step + 1); // Move to the next step
            }
        }
         }
        }
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
   
    const handleChange = () =>{
        setStep(2)
    }
     
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

                                        <Plan 
                                              onPriceClick={handlePriceClick}   
                                              subscriptionValue={subscriptionValue}
                                              setSubscriptionValue={setSubscriptionValue}/>

                                            </div>   
                                  )}
                            
                                                                         
                                         

                                { step === 3   && (
                                         <div>                                                  
                                                <h2 className="text-2xl mt-2 font-bold text-blue-900">Pick add-ons</h2>
                                                <p className="text-xs text-gray-300">Add-ons helps enhance your gaming experience</p>

                                                <CheckField  
                                                total={totalPrice} 
                                                setTotal={setTotalPrice}
                                                selectedItems={selectedItems} 
                                                setSelectedItems={setSelectedItems}
                                                />
                                                   
                                                    
                                                
                                            </div>
                                               
                                               
                                            )}

                                               {step === 4 && ( 
                                         <div>                                                  
                                                <h2 className="text-2xl mt-2 font-bold text-blue-900">Finishing Up</h2>
                                                <p className="text-xs text-gray-300">Double-check everything looks OK before confirming</p>

                                               
                                                    <div className="bg-blue-50 rounded-md p-4 mt-8">
                                                        <div className="flex pb-4 border-b-2">
                                                            <div>
                                                                <p className="text-blue-900 text-sm">{clickedDiv.label}({subscriptionValue})</p>
                                                                <p className="text-blue-700 text-xs underline cursor-pointer" onClick={handleChange}>Change</p>
                                                            </div>
                                                            <p className="text-blue-900 text-xs ml-40 mt-2">+${clickedDiv.priceValue}/mo</p>
                                                        </div>
                                                        <div className="pt-3">
                                                        {selectedItems.map((item, index) => (
                                                            <div className="flex mb-3" key={index}>
                                                            <p className="text-xs text-gray-300">{item.label}</p>
                                                            <p className="text-xs text-blue-900 ml-auto">+${item.price}/mo</p>
                                                           
                                                            </div>
                                                              ))}
                                                           
                                                        </div>
                                                    </div>
                                                    <div className="flex mt-4 p-2">
                                                        <p className="text-gray-400 text-sm">Total({subscriptionValue === "Yearly"? "per year" : "per month"})</p>
                                                        <p className="text-blue-900 ml-auto font-bold">+${selectedItems.reduce((acc, item) => acc + item.price, 0) +clickedDiv.priceValue}/mo</p>
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
                                                        <button onClick={handleSubmit} className={step ===4 ? "ml-auto rounded-md bg-blue-600 px-4 py-2 h-10 w-32 text-center text-white " : "hidden"}>
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
                                                        <button onClick={handleSubmit} className={step ===4 ? "ml-auto rounded-md bg-blue-600 px-4 py-2 h-10 w-32 text-center text-white " : "hidden"}>
                                                                Submit
                                                        </button>
                                                   
                                                </div>
                                
                    </section>
            </>
     );
}
 
export default LandingPage;
