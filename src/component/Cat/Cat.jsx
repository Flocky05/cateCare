import { Link } from "react-router-dom";


const Cat = (props) => {
    const {img,cat_name,cat_age,price}=props.cat;
    return (
        <div className="grid grid-cols-2 gap-20 mt-20 bg-blue-200 rounded-lg m-20 items-center">
            <img className="w-3/5" src={img} alt="" />
            <div>
                <h2>Cat Name :<span className="text-2xl font-bold"> {cat_name}</span> </h2>
                <h2>Cat Age :{cat_age} </h2>
                <h3>Price:<span className="text-xl font-bold"> {price}</span> </h3>
                <Link to="/" className="bg-fuchsia-700 px-6 py-2 rounded-md text-white mt-3 inline-block" >Learn More</Link>
            </div>
        </div>
    );
};

export default Cat;