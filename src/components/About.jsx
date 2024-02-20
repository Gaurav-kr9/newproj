import aboutImg from "../assets/ab1.png"
import aboutImg1 from "../assets/ab2.png"

//motion
import {motion} from "framer-motion"
//variants
import {fadeIn} from '../variants';

const About = () => {
    return (

        <div className=" md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
            <div className=" flex flec-col md:flex-row justify-between items-center gap-8">
                <motion.div 
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount: 0.7}}
                className="md:w-1/2">
                 <img src={aboutImg} alt="" />
                </motion.div>

                {/* about content*/}
                <motion.div 
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount: 0.7}}
                className="md:w-2/5">
                    <h2 className="md-text-5xl text-3xl font-bold text-primary
                     mb-5 leading-normal">We have been improving our product <span className="text-secondary">for many years.</span> </h2>
                     <p className="text-tartiary text-lg mb-7"> Another example paragraph for the 
                     service we provide with our product </p>
                     <button className="btnPrimary">Get Started</button>
                </motion.div>
            </div>

           
            {/* 2nd part"*/}     
            <div className=" flex flec-col md:flex-row-reverse justify-between items-center gap-8">
                <motion.div 
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount: 0.7}}
                
                className="md:w-1/2">
                 <img src={aboutImg1} alt="" />
                </motion.div>

                {/* about content*/}
                <motion.div 
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount: 0.7}}
                className="md:w-2/5">
                    <h2 className="md-text-5xl text-3xl font-bold text-primary
                     mb-5 leading-normal">You can practice at any<span className="text-secondary">time convenient for you.</span> </h2>
                     <p className="text-tartiary text-lg mb-7"> Another example paragraph for the 
                     service we provide with our product blah blah lanajsh hashh </p>
                     <button className="btnPrimary">Get Started</button>
                </motion.div>
            </div>     
       </div>
    );
};

export default About;