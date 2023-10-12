import React, { useState } from "react";
//Conditional rendering
// multiple returns
// short circuit evaluation && condition t && another t= true,    f && t= f
// ternary operators - condition ? action1 : action2

const Conditional = () => {
    const [isLoading, setIsloading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(!show)
    }

    if (isError) {
        return (
            <div>
                <h1>Error...</h1>
            </div>
        );
    }
    if (isLoading) {
      return (
        <div>
            <h1>Loading....</h1>
        </div>
      );
    }
  return (
  <div>
    <h2>Data...</h2>
    {false && <p>CONTENT</p>}
    {show ? <p>SHOW</p> : <p>HIDE</p>}
    <button className="btn btn-primary" onClick={toggle}> 
      {" "}
      {show ? "Hide" : "Show"}{" "}
    </button>
 </div>
  );


   // return <div>{isLoading && <h1>Loading...</h1>}</div>;
}; 

export default Conditional;