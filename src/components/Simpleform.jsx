import React, {useState} from "react";
// create two input fields, name and email
// get access to the value that user has typed
// controlled input - value
// onChange
// do sth on submission

const Simpleform = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email);
        if (name === "" || email === "") {
            setNameError("please fill this field");
            setEmailError("please fill this field");
            }

        if (name.length < 7) {
            setNameError("The minimum name length is 7")
        }

        // after doing everything we want to do
            setTimeout(() => {
                setNameError("");
                setEmailError("");
            }, 3000);

        setName("");
        setEmail("");
    };
  return (
    <div>
        <h1>Register On our platform</h1>
        <form className="w-50 bg-secondary p-3 rounded-3" onSubmit={handleSubmit}>
            <div className="my-2">
                <label htmlFor="name" className="form-label text-white">
                    Name :
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                />
                <small className="text-dark">{nameError}</small>
            </div>
            <div className="my-2">
                <label htmlFor="email" className="form-label text-white"> 
                    Email Address:{" "}
                </label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                />
                <small className="text-dark">{emailError}</small>
            </div>
            <button type="submit" className="btn btn-primary btn-lg">
                    Register
            </button>
        </form>
    </div>
    );
  
};

export default Simpleform;