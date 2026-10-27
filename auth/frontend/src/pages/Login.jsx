import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault()
    if(!email || !password) {
      toast.warning("Fill all the field!");
      return
    }
    // Get Registered users

    const users = JSON.parse(localStorage.getItem('users')) || [];

    //Find Matching user

    const user = users.find((user) =>
      user.email.toLowerCase() === email.trim().toLowerCase()


    );
   
   
   if (!user) {
      toast.warning("User not found!");
      setTimeout(() => {
        navigate('/register')
      }, 1000);
      return 
    }
      if (user.password !== password) {
    toast.error("Incorrect password!");
    return;
  }


    //  login successfull
    localStorage.setItem("isLoggedIn", "true");

    // saved Current logged-in user   
    localStorage.setItem("currentUser", JSON.stringify({ name: user.name, email: user.email, }));
    toast.success("Login Successfull!");

    setTimeout(() => {
      navigate('/')
    },1000)

  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleLogin} className="bg-white/20 backdrop-blur-lg p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          className="w-full border outline-none border-gray-300 rounded-md p-2 mb-4 focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          className="w-full border outline-none border-gray-300 focus:border-none rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Login
        </button>

        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;