import React, { useContext, useEffect } from "react";
import { Context } from "../context/Context";

const Category = () => {
  const { data, fetchAllProducts } = useContext(Context);

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property];
    });
    newVal = [...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUniqueCategory(data, "category");
  console.log(categoryOnlyData);

  useEffect(() => {
    fetchAllProducts();
  }, []);


  
  return( <div>
    <div className="bg-[#0000]">
        <div className="max-w-7xl  flex gap-4 items-center justify-around py-4 px-4">
       {
        categoryOnlyData.map((val,index)=>{
          return(
          <div key={index}>
            <button className="uppercase bg-[#bf70ff] px-3 py-1">
              {val}
            </button>
            </div>
        )})
       }
        </div>
    </div>

  </div>);
};

export default Category;
