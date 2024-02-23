import featuredImg from '../assets/tn.png'

//motion
import {motion} from "framer-motion"
//variants
import {fadeIn} from '../variants';

const Features = () =>{
    return(
        <div className="my-24 md:px-14 px-4 ,max-w-screen-2xl mx-auto" id="feature">
            <div  className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <motion.div 
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount: 0.7}}
                className="lg:w-1/4">
                    <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">Why we are better then others</h3>
                    <p className="text-base text-tartiary">another paragraph about why we are better then our competitiors blah blah blah..</p>
                </motion.div>
                {/*featured cards*/}
                <motion.div 
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount: 0.7}}
                className="w-full lg:w-3/4">
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 item-start md:gap-12 gap-8">
                        <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] 
                    h-96 shadow-3xl p-8 items-center flex justify-center
                     items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer"> 
                        <div>
                            <img src={featuredImg} alt="" />
                            <h5 className='text-2xl font-semibold text-primary px-5 
                            text-center mt-5'>convenient study schedule</h5>
                        </div>
                    </div>
                    <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] 
                    h-96 shadow-3xl p-8 items-center flex justify-center
                     items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16"> 
                        <div>
                            <img src={featuredImg} alt="" />
                            <h5 className='text-2xl font-semibold text-primary px-5 
                            text-center mt-5'>convenient study schedule</h5>
                        </div>
                    </div>
                    <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] 
                    h-96 shadow-3xl p-8 items-center flex justify-center
                     items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer"> 
                        <div>
                            <img src={featuredImg} alt="" />
                            <h5 className='text-2xl font-semibold text-primary px-5 
                            text-center mt-5'>convenient study schedule</h5>
                        </div>
                    </div>
                    </div>
                </motion.div>
            </div>

        </div>
    );
};
export default Features;