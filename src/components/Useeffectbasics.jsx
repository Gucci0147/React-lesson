import React from "react";
import { useEffect, useState } from "react";
// by default runs after every re-render
// side effects
// two parameters - function, dependency array list
// [] - use effect run once
// [values, ]

const Useeffectbasics = () => {
    const [value, setValue] = useState(0);
    const [age, setAge] = useState(20)
        useEffect(() => {
            console.log("Use effect ran");
        }, [value, age]);

  return ( 
  <div>
    <h1> Use Effect Basics </h1>
    <h1> {value} </h1>
    <h1> {age} </h1>
    <button onClick={() => setValue(value + 2)}>Change Value</button>
    <button onClick={() => setAge(age + 2)}>Change Age</button>
</div>
  );
};

export default Useeffectbasics;