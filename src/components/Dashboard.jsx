import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Dashboard.css";
import CartIcon from "../CartIcon";

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const logout = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      {/* Cart Icon */}
      <CartIcon />

      

      {/* Sidebar Menu */}
      <div className="dashboard-sidebar">
        <nav className="dashboard-nav">
          <Link to="dashboard/laptops" className="dashboard-link">Laptops</Link>
          <Link to="dashboard/mobiles" className="dashboard-link">Mobiles</Link>
          <Link to="dashboard/headphones" className="dashboard-link">Headphones</Link>
          <Link to="dashboard/watches" className="dashboard-link">Smart Watches</Link>
          <Link to="dashboard/pods" className="dashboard-link">Ear Pods</Link>
          <a href="/" onClick={logout} className="dashboard-link">Logout</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">

        {/* Search Bar */}
      <div className="dashboard-search-container">
        <input
          type="text"
          placeholder="Search Products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="dashboard-search-input"
        />
      </div>


        {/* Passing Search Query to Children */}
        <Outlet context={{ searchQuery }} />
      </div>
    </div>
  );
};

export default Dashboard;












// import { Link, Outlet, useNavigate } from "react-router-dom";
// import "./Dashboard.css";
// import CartIcon from "../CartIcon";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const logout = (event) => {
//     event.preventDefault();
//     navigate("/");
//   };

//   return (
//     <div className="dashboard-container">
//       <CartIcon />
//       {/* Sidebar Menu */}
//       <div className="dashboard-sidebar">
//         <nav className="dashboard-nav">
//           <Link to="dashboard/laptops" className="dashboard-link">Laptops</Link>
//           <Link to="dashboard/mobiles" className="dashboard-link">Mobiles</Link>
//           <Link to="dashboard/headphones" className="dashboard-link">Headphones</Link>
//           <a href="/" onClick={logout} className="dashboard-link">Logout</a>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="dashboard-content">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
