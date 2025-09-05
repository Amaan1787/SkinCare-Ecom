import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Service from "./pages/Service";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useUser } from "@clerk/clerk-react";

function App() {
  let [location, setLocation] = useState();
  let [dropDown, setDropdown] = useState(false);
  // let { isSignedIn } = useUser();
  let getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { longitude, latitude } = position.coords;
      console.log(longitude, latitude);

      let url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      try {
        let response = await axios.get(url);
        console.log(response.data.address);
        let exactlocation = response.data.address;
        setLocation(exactlocation);
        setDropdown(false);
      } catch (error) {
        console.log(error);
      }
    });
  };
  // useEffect(() => {
  //   if (isSignedIn) {
  //     getLocation();
  //   }
  // }, [isSignedIn]);
  return (
    <BrowserRouter>
      <Navbar
        location={location}
        getLocation={getLocation}
        dropDown={dropDown}
        setDropdown={setDropdown}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
