import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate,useOutletContext } from "react-router-dom";
import "./Dashboard.css";
const Pods = ()=>{
    const navigate = useNavigate();
    const [Pods,setpods] = useState([]);
    const { searchQuery } = useOutletContext();

    const get_Pods = async ()=>{
        const res = await axios.get("http://localhost:9090/pods");
        const {data} = res;
        setpods(data);
    };

  const display_singleitem = (Pods)=>{
    //console.log(laptop);
    navigate(`/Podsdetails`, { state: { Pods } }); 
}
    useEffect(()=>{
        get_Pods();
    },[]);

    // Filter laptops based on the search query
  const filteredPods = Pods.filter((Pod) =>
    Pod.pname.toLowerCase().includes(searchQuery.toLowerCase())
  );
    return(
        <>
             <div className="product-container">
                {filteredPods.map((Pods) => (
                    <div key={Pods.pid} className="product-card" onClick={()=> display_singleitem(Pods)}>
                    <img src={Pods.pimage} alt={Pods.pname} className="product-image" />
                    <div className="product-details">
                        <div className="product-name">{Pods.pname}</div>
                        <div className="product-price">Price: ${Pods.pcost}</div>
                    </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Pods;