import React from "react";
import { useState } from "react";

const Usestate = () => {
    const [text, setText] = useState("Hello Class");
    const handleClick = () => {
        setText("random text");
    };

        const clear = () => {
           setUsers([]); 
        };
    const data = ["Joan", "Ade", "Ola", "Emmanuel"];
    const [users, setUsers] = useState(data);
    
        const [person, setPerson] = useState({
            name: "Akinjide Faruk",
            age: 54,
            job: "Frontend Development",
        });

        const change = () => {
            setPerson({ 
                ...person, 
                job: "Computer Engineer",
                name: "Adeboye Faruk",
                age: 23,
             });
        };

    return (
      <div>
        <h1>Use State Basics</h1>
        <h2> {text} </h2>
        <button onClick={handleClick}>Change Text</button>
        {users.map((user, index) => {
            return <h3 key={index}> {user} </h3>;
        })}
            <button onClick={clear}>Clear All</button>
            <button onClick={() => setUsers(data)}>Refresh</button>
            <h2> {person.name} </h2>
            <p>
                {" "}
                {person.age} {person.job}{" "}
            </p>
            <button onClick={change}>Change Details</button>
    </div>
  );
};

export default Usestate;