import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./Dashboard.css";
const Watches = ()=>{
    const navigate = useNavigate();
    const [Watches,setWatches] = useState([]);
    const { searchQuery } = useOutletContext();

    const get_watches = async ()=>{
        const res = await axios.get("http://localhost:9090/smart");
        const {data} = res;
        setWatches(data);
    };

  const display_singleitem = (watches)=>{
    //console.log(laptop);
    navigate(`/watchesdetails`, { state: { watches } }); 
}
    useEffect(()=>{
        get_watches();
    },[]);

    // Filter laptops based on the search query
  const filteredWatch = Watches.filter((Watche) =>
    Watche.pname.toLowerCase().includes(searchQuery.toLowerCase())
  );

    return(
        <>
             <div className="product-container">
                {filteredWatch.map((watches) => (
                    <div key={watches.pid} className="product-card" onClick={()=> display_singleitem(watches)}>
                    <img src={watches.pimage} alt={watches.pname} className="product-image" />
                    <div className="product-details">
                        <div className="product-name">{watches.pname}</div>
                        <div className="product-price">Price: ${watches.pcost}</div>
                    </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Watches;