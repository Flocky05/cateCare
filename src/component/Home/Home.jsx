
import { useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import img from "../../assets/images/home/home.avif"
import { contex } from "../../context/CatContex";
import Cat from "../Cat/Cat.jsx";


const Home = () => {
    const catys=useLoaderData();
    const {setCaty}=useContext(contex);
    useEffect(()=>{
        setCaty(catys);
    },[catys, setCaty])
    console.log(catys);
    const handelViewDetails=cat=>{
        setCaty(cat);
    }
       return (
        <div>
            <div className="grid grid-cols-2 items-center p-10 lg:p-20">
                <div className="p-20">
                    <h2 className="text-3xl font-bold">Catey</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quae exercitationem delectus impedit, sint nostrum dolorem quam a tempora quibusdam doloribus ipsum ex reiciendis eaque, eum maiores labore suscipit quis vitae incidunt vero quia praesentium atque. Dolore delectus corporis tempore!</p>
                    <Link className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-2 rounded-md mt-4 inline-block">Learn More</Link>
                </div>
                    <img className="m-10 w-3/5" src={img} alt="" />
            </div>
            <div>
                    <h2 className="text-3xl font-bold text-center uppercase">Some <span className="text-blue-500 ">Cats are</span> here</h2>
                {
                    catys.map(cat=><Cat
                    key={cat.id}
                    cat={cat}
                    handelViewDetails={handelViewDetails}
                    ></Cat>)
                }
            </div>
        </div>
    );
};

export default Home;