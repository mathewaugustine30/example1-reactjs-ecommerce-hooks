import React, { useEffect } from "react";

let Register = () => {

  //will get executed on initial render
  useEffect(()=>{
    document.title = "eCommerce - Register"
  },[]);

  return <div>Register</div>;
};

export default Register;
