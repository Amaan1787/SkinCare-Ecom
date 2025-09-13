import axios from "axios";
import { createContext, useState } from "react";

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchAllProducts = async () => {
    try {
      let res = await axios.get(
        "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      );
      
     const productData = res.data;
     setData(productData);

     
    } catch (error) {
      console.log("Error");
    }
  };
  return (
    <Context.Provider value={{ data, setData, fetchAllProducts }}>
      {children}
    </Context.Provider>
  );
};
