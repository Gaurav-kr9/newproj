import Banner from "../shared/Banner";
import BannerImg from '../assets/nl.png'
const Newsletter = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
            {/*use our banner and pass props */}
            <Banner banner={BannerImg} heading="Each student an share their discount code for friends"
            subheading={"A sample paragraph is comproisedo three different types of discount coupon codes"} 
            btn1={"I have a code"} btn2={" Get Started"}/>

        </div>
    );
};
export default Newsletter;