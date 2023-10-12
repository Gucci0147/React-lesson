// // rafce
// //props destructuring
// //children
// const fifth = ({ myName, age, children}) => {
//   // console.log(props);
//   //const { myName, age } = props;
//   return (
//     <div>
//         <h1>My fifth component</h1>
//         <h1>{myName}</h1>
//         <p> {children} </p>
//     </div>
//   );
// };


//state management
//useState
import { useState } from "react";
// value, function

const Fifth = () => {
const [name, setName] = useState("User");
const [num, setNum] = useState(0);
const handleClick = ()  => {
    setName("Timileyin");
};

    return (
        <div>
            <h1> Welcome {name} </h1>
            <button onClick={handleClick}>Change Name</button>
       
            <h1 style={{textAlign: "center"}}> {num} </h1>
            <button onClick={() => setNum(num + 1)}>Increase</button>
            <button onClick={() => setNum(num - 1)}>Decrease</button>
        </div>
    );
};

export default Fifth;