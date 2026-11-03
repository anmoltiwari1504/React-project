import { useState } from "react"


function Authform({setShow}) {
  const [form, setForm] = useState(false);
  return (
  <div className=' fixed  inset-0 bg-black/70  flex justify-center items-center '>
      <div className='w-87.5  bg-gray-500/30 backdrop-blur-2xl p-6 rounded-lg shadow-lg relative z-10 '>
        <button className='absolute top-2 right-3' onClick={() => setShow(false)}>X</button>
        {/* title */}
        <h2 className='text-center p-1 mb-2 text-xl text-white font-bold underline pb-1'>{!form ? "Create account" : "Login"}</h2>
        <form onSubmit={(e) => {
          e.preventDefault()
        }}   className='flex flex-col gap-3'>
          {!form && (
            <input type="text" placeholder='Username' className='px-2 py-3  border rounded bg-gray-700  text-white'  required />
          )}
          <input type="email" className='px-2 py-3  border rounded bg-gray-700  text-white' placeholder='Enter Your Mail'required />
          <input type="password" className='px-2 py-3  border rounded bg-gray-700  text-white' placeholder='Enter Your Password'required />
          <button className='p-3 bg-blue-600 rounded ' type='submit'>Sign in</button>
          <p onClick={() => setForm(!form)} className=' hover:text-blue-500
        text-center text-white/50 mt-3 cursor-pointer'>
           {!form ? "Already have an account? Login"
: "Don't have an account? Signup"}
          </p>
        </form>
      </div>
    </div>
  )
}

export default Authform
