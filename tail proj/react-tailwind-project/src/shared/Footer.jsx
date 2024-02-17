import logo from '../assets/pnk.png'
import fbImg from '../assets/facebook.png'
import Instagram from '../assets/insta.png'
import X from '../assets/x.png'
import Linkedin from '../assets/linkedin.png'

const Footer = () => { 
return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-scree-2xl mx-auto text-white">
        <div className='my-12 flex flex-col md:flex-row gap-10 '>
         <div className='md:w-1/2 space-y-8'>
         <a href ="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
    <img src={logo} alt="" className='w-10 inline-blocks items-center'/><span className='text-white'>XYZ</span>
    </a>
    <p className='md:w-1/2'>
        A simple paragraph with the following structure of the 
        website that we are building for ths aska wowbs  </p>
         <div>
            <input type="email" name="email" id="email" placeholder='Your email' 
            className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none'/>
            <input type="submit" value="Subscribe" className='px-4 py-2 bg-secondary rounded-md -ml-2
            cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all'/>
         </div>
         </div>
         {/* footer navigations*/}
         <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
            <div className='space-y-4 mt-5'>
                <h4 className='text-xl'>Platform</h4>
                <ul className='space-y-3'>
                    <a href="/" className='block hover:text-gray-300'>Overview</a>
                    <a href="/" className='block hover:text-gray-300'>Features</a>
                    <a href="/" className='block hover:text-gray-300'>About</a>
                    <a href="/" className='block hover:text-gray-300'>Pricing</a>
                </ul>
            </div>
            <div className='space-y-4 mt-5'>
                <h4 className='text-xl'>Help</h4>
                <ul className='space-y-3'>
                    <a href="/" className='block hover:text-gray-300'>How does it work</a>
                    <a href="/" className='block hover:text-gray-300'>Where to ask questions</a>
                    <a href="/" className='block hover:text-gray-300'>How to play?</a>
                    <a href="/" className='block hover:text-gray-300'>Pricing</a>
                </ul>
            </div>
            <div className='space-y-4 mt-5'>
                <h4 className='text-xl'>Contacts</h4>
                <ul className='space-y-3'>
                    <a href="/" className='block hover:text-gray-300'>+91-992-293-2823</a>
                    <a href="/" className='block hover:text-gray-300'>9826372563</a>
                    <a href="/" className='block hover:text-gray-300'>Gurugram, Delhi</a>
                    <a href="/" className='block hover:text-gray-300'>New Delhi</a>
                </ul>
            </div>
         </div>
      </div>
      <hr />
      <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
        <p>@XYZ 2024, All rights reserved.</p>
        <div className='flex items-center spce-x-5'>
            <img src={fbImg} alt="" className='w-8 cursor-pointer hover:-translate-y-4 transition-all suration-300' />
            <img src={Instagram} alt="" className='w-8 cursor-pointer hover:-translate-y-4 transition-all suration-300'/>
            <img src={X} alt=""  className='w-8 cursor-pointer hover:-translate-y-4 transition-all suration-300' />
            <img src={Linkedin} alt=""  className='w-8 cursor-pointer hover:-translate-y-4 transition-all suration-300'/>
        </div>
      </div>
    </div>
 );
};
export default Footer;
