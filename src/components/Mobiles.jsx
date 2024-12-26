import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./Dashboard.css";
const Mobiles = ()=>{
    const navigate = useNavigate();
    const [mobiles,setMobiles] = useState([]);
    const { searchQuery } = useOutletContext();

    const get_mobiles = async ()=>{
        const res = await axios.get("http://localhost:9090/mobiles");
        const {data} = res;
        setMobiles(data);
    };

  const display_singleitem = (mobile)=>{
    //console.log(laptop);
    navigate(`/mobiledetails`, { state: { mobile } }); 
}
    useEffect(()=>{
        get_mobiles();
    },[]);

    // Filter laptops based on the search query
  const filteredMobiles = mobiles.filter((mobile) =>
    mobile.pname.toLowerCase().includes(searchQuery.toLowerCase())
  );
    return(
        <>
             <div className="product-container">
                {filteredMobiles.map((mobile) => (
                    <div key={mobile.pid} className="product-card" onClick={()=> display_singleitem(mobile)}>
                    <img src={mobile.pimage} alt={mobile.pname} className="product-image" />
                    <div className="product-details">
                        <div className="product-name">{mobile.pname}</div>
                        <div className="product-price">Price: ${mobile.pcost}</div>
                    </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Mobiles;