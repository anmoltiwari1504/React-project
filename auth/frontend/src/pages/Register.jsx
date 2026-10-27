import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const[password , setPassword] = useState('')

  const navigate = useNavigate()
  const handleRegister = (e) => {
    e.preventDefault()
    if (!name || !email || !password) {
      toast.warning('fill all the field')
      return
      
    }
    //Email validation 
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.warning('Enter a valid mail')
      return 
    };
 const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.warning('Password must contain 8 characters, uppercase, lowercase, number and special character')
      return 
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // check if email is already exists

    const existingUser = users.find(
    (user) => user.email === email
    )
    if (existingUser) {
      toast.error("Email is already registered")
      setTimeout(() => {
        navigate('/login')
      }, 1000);
      return
    };

    //Create a new user 
    const newUser = {
      name,
      email,
      password,

    };
    // Add new user in the array
    users.push(newUser);


    // saved updated users array

    
    localStorage.setItem('users', JSON.stringify(users));

    toast.success("Registration Successfull!")


    // Go to login page 
    navigate('/login')


    
    localStorage.setItem("users", JSON.stringify(users))
  }

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form onSubmit={handleRegister} className="bg-white/20 backdrop-blur-lg p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 focus:border-none rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          className="w-full border border-gray-300 focus:border-none rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Register
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;