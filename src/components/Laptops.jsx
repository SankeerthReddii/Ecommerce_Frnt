import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./Dashboard.css";

const Laptops = () => {
  const [laptops, setLaptops] = useState([]);
  const navigate = useNavigate();
  const { searchQuery } = useOutletContext();

  const get_laptops = async () => {
    const res = await axios.get("http://localhost:9090/laptops");
    const { data } = res;
    setLaptops(data);
  };

  useEffect(() => {
    get_laptops();
  }, []);

  // Filter laptops based on the search query
  const filteredLaptops = laptops.filter((laptop) =>
    laptop.pname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const display_singleitem = (laptop) => {
    navigate(`/laptopdetails`, { state: { laptop } });
  };

  return (
    <div className="product-container">
      {filteredLaptops.map((laptop) => (
        <div key={laptop.pid} className="product-card" onClick={() => display_singleitem(laptop)}>
          <img src={laptop.pimage} alt={laptop.pname} className="product-image" />
          <div className="product-details">
            <div className="product-name">{laptop.pname}</div>
            <div className="product-price">Price: ${laptop.pcost}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Laptops;










// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Dashboard.css";

// const Laptops = () => {
//   const [laptops, setLaptops] = useState([]);

//   const navigate = useNavigate();

//   const get_laptops = async () => {
//     const res = await axios.get("http://localhost:9090/laptops");
//     const { data } = res;
//     setLaptops(data);
//   };

//   const display_singleitem = (laptop)=>{
//         //console.log(laptop);
//         navigate(`/laptopdetails`, { state: { laptop } }); 
//    }

//   useEffect(() => {
//     get_laptops();
//   }, []);

//   return (
//     <div className="product-container">
//       {laptops.map((laptop) => (
//         <div key={laptop.pid} className="product-card" onClick={()=> display_singleitem(laptop)}>
//           <img src={laptop.pimage} alt={laptop.pname} className="product-image" />
//           <div className="product-details">
//             <div className="product-name">{laptop.pname}</div>
//             <div className="product-price">Price: ${laptop.pcost}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Laptops;






