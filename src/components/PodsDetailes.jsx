import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./LaptopDetails.css"; // Styling remains the same
import { useCart } from "../CartContext";
import CartIcon from "../CartIcon";

const PodsDetails = () => {
  const location = useLocation();
  const navigate = useNavigate(); // To navigate to the Dashboard
  const { Pods } = location.state || {}; // Access the passed state

  const { addToCart } = useCart();

  if (!Pods) {
    return <h1>No watches Details Found!</h1>;
  }

  const handleAddToCart = () => {
    addToCart({ ...Pods, qty });
  };

  const [qty, setQty] = useState(1); // Default qty is 1

  const handleIncrement = () => {
    if (qty < Pods.pqty) {
      setQty(qty + 1);
    }
  };

  const handleDecrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const handleBack = () => {
    navigate("/dashboard"); // Navigate back to Dashboard
  };

  return (
    <div className="laptop-details-container">
      <CartIcon />
      
      {/* Product Image */}
      <div className="laptop-image">
        <img src={Pods.pimage} alt={Pods.pname} />
      </div>

      {/* Product Details */}
      <div className="laptop-info">
        <h2 className="laptop-name">{Pods.pname}</h2>
        <p className="laptop-price">Price: ${Pods.pcost}</p>
        <div className="laptop-qty">
          <button onClick={handleDecrement} className="qty-btn">-</button>
          <span className="qty-display">{qty}</span>
          <button onClick={handleIncrement} className="qty-btn">+</button>
        </div>
        
        <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>
        
        {/* Back Button */}
        <button onClick={handleBack} className="back-btn">Back to Dashboard</button>
      </div>
    </div>
  );
};

export default PodsDetails;
