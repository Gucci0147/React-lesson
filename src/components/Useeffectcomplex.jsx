import React, { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";

//API - application programing interface
 //json - javascript object notation 
// fetch data - 
// asynchronous
// async/ await


const Useeffectcomplex = () => {
    const url = "https://jsonplaceholder.typicode.com/users";
        const [users, setUsers] = useState([]);
        const [loading, setLoading] = useState(true);
    // fetch data
    // const fetchData = () => {
    //     fetch(url).then((response) => {
    //         return response.json();
    //     }).then((data) => {
    //         console.log(data);
        
    //     });
    // };
    //  fetchData();

  
    //     // async/ await
    // const getData = async () => {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data);
    // }; 
    // getData();
    
    const getUsers = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setLoading(false);
        setUsers(data);
    };
        useEffect(() => {
            getUsers();
     }, []);

    //     return (
    //     <div>
    //     {users.map((user) => {
    //             const { id, name, email, website } = user;
    //             return (
    //                 <div key={id}>
    //                  <h1> {name} </h1>
    //                  <p> {email} </p>
    //                  <p> {website} </p>
    //             </div>
    //     );  
    //    })}
    // </div>
   
// );
// };

   return (
    <div className="container">
      {loading ?  (
      <ThreeCircles
        height="100"
        width="150"
        color="black"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
      ) : (
        users.map((user) => {
            const { id, name, email, website } = user;
            return (
              <div className="d-flex justify-content-between border border-2 rounded-2 px-2 my-3"
                    key={id}
            >
                <h3 className="text-primary"> {name} </h3>
                <p> {email} </p>
                <p> {website} </p>
          </div>
          );
        }) 
      )}
    </div>
  );
};

export default Useeffectcomplex;