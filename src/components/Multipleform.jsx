import React, { useState } from "react";
// firstname, lastname, email, password
// value, onchange

const Multipleform = () => {
    const [person, setPerson] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        title: "",
    });
        const[mail, setMail] = useState(false);
        const handleChange = (e) => {
            // name, value
            // console.log(e.target.name, e.target.value);
            setPerson({...person, [e.target.name]: e.target.value});
    };
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(person);
            // after doing anything you want to do
            if (person.password.length < 7) {
                console.log("The minimum password length is 7");
            }
            if (mail) {
                //add to mailling list
                console.log(mail);
            }


            if (person.firstName === "" || person.lastName === "" || person.email === "" || person.password === "") {
                console.log("please fill the field");
            }
        
            // clear the fields
            setPerson({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            });
        };

    return (
        <div>
         <form className="w-50 bg-secondary p-3 rounded-3 my-5">
         <h1 className="text-white"> Multiple Inputs</h1>
         <div className="my-2">
            <select 
            name="title" 
            id="title" 
            value={person.title}
            onChange={handleChange}
            >
                <option value="mr">Mr</option>
                <option value="mrs">Mrs</option>
                <option value="miss">Miss</option>
            </select>
         </div>
            <div className="my-2">
                <label htmlFor="name" className="form-label text-white">
                  First Name :
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="fname" 
                  value={person.firstName}
                  name="firstName"
                  onChange={handleChange}
                />
            </div>

            <div className="my-2">
                <label htmlFor="name" className="form-label text-white">
                  Last Name :
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="lname" 
                  value={person.lastName}
                  name="lastName"
                  onChange={handleChange}
                />
            </div>

            <div className="my-2">
                <label htmlFor="email" className="form-label text-white"> 
                    Email Address:{" "}
                </label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  value={person.email}
                  name="email"
                  onChange={handleChange}
                />
            </div>

            <div className="my-2">
                <label htmlFor="password" className="form-label text-white">
                  Password :
                </label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="password"
                  value={person.password} 
                  name="password"
                  onChange={handleChange}
                />
            </div>
                <div>
                    <input 
                    type="checkbox" 
                    className="form-check"
                    id="mail"
                            checked={mail}
                            onChange={(e) => setMail(e.target.checked)}
                 />
                    <label htmlFor="mail" className="form-label text-white">
                        Subscribe for mailing list
                    </label>
                </div>
            <button type="submit" 
                className="btn btn-primary btn-lg" 
                 onClick={handleSubmit}>
                    Register
            </button>
        </form>

    </div>
  );
}

export default Multipleform;