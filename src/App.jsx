import "./App.css";
import Fifth from "./components/Fifth";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import User from "./components/User.";
import Usestate from "./components/Usestate";
import Useeffectbasics from "./components/Useeffectbasics";
import Useeffectcomplex from "./components/Useeffectcomplex";
import Conditional from "./components/Conditional";
import Simpleform from "./components/Simpleform";
import Multipleform from "./components/Multipleform";
import Sneakers from "./components/Sneakers";

//props - values from parent to child components
//props children
//handling user interaction- event listener, event handlers
//outputting list - arrays
// state management
//rEact hooks- useState

// function App() {
//   const handleClick = () => {
//     console.log("User clicked");
//   };

//   const handleClickAgain = (user) => {
//     console.log(`Welcome ${user}`);
//   };

//   const customers = [
//     "Lucky",  
//     "Segun", 
//     "Hamza", 
//     "Judy", 
//     "Judas",
//     "Peter",
//     "Ambrose",
//   ];
//   const data = [
//     { id: 1, name: "Hamza", job: "Backend Engineer", age: 26},
//     { id: 2, name: "Peter", job: "Frontend Engineer", age: 39},
//     { id: 3, name: "Judy", job: "Product Engineer", age: 20},
//     {id: 4, name: "Ambrose", job: "business man", age: 42},
//   ];
  
//   const handleClickAgainAgain = ( ) => {
//     console.log("User clicked");
//   };

//   return (
//     <>
//     <Navbar />
//     <Fifth />
//     <h1>Responding to User's Interaction</h1>
//     <button onClick={handleClick()}>Click Me</button>
//     <button onClick={() => handleClickAgain("Emma")}>Click Again</button>
//     {customers.map((person, index) => {
//       return (
//         <h1 key={index}>
//           {" "}
//           {person} {index}{" "}
//         </h1>
//       );
//     })}

//     {data.map((user) => {
//         return <User key={user.id} {...user} />;
//     })}
      

//     <Footer />
//     </>

// );

  
// };

function App(){
 return (
    <>
      <Layout>
        <Useeffectbasics />
        <Useeffectcomplex /> 
         <Simpleform /> 
        <Multipleform />
        <Conditional />
        <Sneakers />
      </Layout>
   
    </>

  );
};







export default App;