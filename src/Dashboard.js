import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";

function Dashboard() {

  let userContextValueRetrieved = useContext(UserContext);
  console.log('Dashboard '+userContextValueRetrieved.currentUserName);
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