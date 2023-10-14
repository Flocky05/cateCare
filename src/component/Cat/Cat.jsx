import { Link } from "react-router-dom";


const Cat = (cat,handelViewDetails) => {
    const {img,cat_name,cat_age,price}=cat.cat;
    const newLocal = "bg-fuchsia-700 px-6 py-2 rounded-md text-white mt-3 inline-block";
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-20 bg-blue-200 rounded-md m-20 items-center p-10  lg:p-0">
            <img className="w-full lg:w-3/5 rounded-md" src={img} alt="" />
            <div>
                <h2>Cat Name :<span className="text-2xl font-bold"> {cat_name}</span> </h2>
                <h2>Cat Age :{cat_age} </h2>
                <h3>Price:<span className="text-xl font-bold"> {price}</span> </h3>
                <Link to="/catDetails" className={newLocal} onClick={()=>handelViewDetails(cat)} >Learn More</Link>
            </div>
        </div>
    );
};

export default Cat;