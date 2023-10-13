import { createContext, useState } from "react";

export  const contex=createContext({});

const CatContex=({children})=>{
    const [cats,setCat]=useState([]);
    console.log(cats);
    return(
        <contex.Provider value={{cats,setCat}}>
            {children}
        </contex.Provider>
    );
};
export default CatContex;