import { createContext, useState } from "react";

export  const contex=createContext({});

const CatContex=({children})=>{
    const [catys,setCaty]=useState([]);
    console.log(catys);
    return(
        <contex.Provider value={{catys,setCaty}}>
            {children}
        </contex.Provider>
    );
};
export default CatContex;