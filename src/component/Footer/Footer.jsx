import { Link } from "react-router-dom";
import img1 from "../../assets/images/footer/facebook-48.png"
import img2 from "../../assets/images/footer/linkedin-48.png"
import img3 from "../../assets/images/footer/twitter-48.png"

const Footer = () => {
    return (
        <div className="p-32 bg-blue-950 text-white text-sm text-center">
            <h2 className="p-6">@Dont Copy the Page</h2>
            <hr />
            <div className="flex justify-center items-center gap-4 p-8">
                <Link to="/"><img className="w-8" src={img1} alt="" /></Link>
                <Link to="/"><img className="w-8" src={img2} alt="" /></Link>
                <Link to="/"><img className="w-10" src={img3} alt="" /></Link>
                
            </div>
        </div>
    );
};

export default Footer;