import ThanksImg from "./images/icon-thank-you.svg"
const Appreciation = () => {
    return (  
            <>
                <div className=" flex justify-center items-center align-center py-20 md:py-0 ">
                    <div>
                        <div className="flex justify-center mb-6">
                            <img src={ThanksImg} alt="Thanks" className=""/>
                        </div>
                        <p className="w-96 text-sm text-gray-500 text-center">
                                Thanks for confirming your subscribtion, we hope you have fun using our platform. If you ever need support, please fell free to email us at support@lorem.com
                            </p>
                            </div>
                </div>
            </>
    );
}
 
export default Appreciation;