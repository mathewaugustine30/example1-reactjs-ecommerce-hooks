import React, { useEffect } from "react";

function Dashboard() {

    //will get executed on initial render
    useEffect(()=>{
      document.title = "eCommerce - Dashboard"
    },[]);
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;