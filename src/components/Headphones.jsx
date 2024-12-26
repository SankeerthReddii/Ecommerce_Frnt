import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./Dashboard.css";

const Headphones = ()=>{
    const [headphones,setHeadphones] = useState([]);
    const navigate = useNavigate();
    const { searchQuery } = useOutletContext();

    const get_headphones = async ()=>{
        const res = await axios.get("http://localhost:9090/earphones");
        const {data} = res;
        setHeadphones(data);
    };

  const display_singleitem = (headphone)=>{
    //console.log(laptop);
    navigate(`/headphonedetails`, { state: { headphone } }); 
}
    useEffect(()=>{
        get_headphones();
    },[]);

    // Filter laptops based on the search query
  const filteredheadphone = headphones.filter((headphone) =>
    headphone.pname.toLowerCase().includes(searchQuery.toLowerCase())
  );
    return(
        <>
             <div className="product-container">
                {filteredheadphone.map((headphone) => (
                    <div key={headphone.pid} className="product-card" onClick={()=> display_singleitem(headphone)}>
                    <img src={headphone.pimage} alt={headphone.pname} className="product-image" />
                    <div className="product-details">
                        <div className="product-name">{headphone.pname}</div>
                        <div className="product-price">Price: ${headphone.pcost}</div>
                    </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Headphones;