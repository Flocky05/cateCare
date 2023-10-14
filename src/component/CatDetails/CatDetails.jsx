import { useContext} from "react";
import { contex } from "../../context/CatContex.jsx";
/* import CatDetail from "./CatDetail";
 */


const CatDetails = () => {
const {catys}=useContext(contex);
console.log(catys);
    return (
        <div>
            {/* {
                catys.map(caty=><CatDetail
                key={caty.id}
                caty={caty}
                ></CatDetail>)
            } */}
                <img src={catys.img} alt="" />
        </div>
    );
};

export default CatDetails;