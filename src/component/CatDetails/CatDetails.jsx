import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { contex } from "../../context/CatContex";
import CatDetail from "./CatDetail.jsx";


const CatDetails = () => {
    const cats=useLoaderData();
    const {setCat}=useContext(contex);
    useEffect(()=>{
        setCat(cats);
    },[])
    return (
        <div>
            {
                cats.map(cat=><CatDetail
                key={cat.map}
                cat={cat}
                ></CatDetail>)
            }
        </div>
    );
};

export default CatDetails;