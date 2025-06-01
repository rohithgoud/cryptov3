import React, {  useState } from 'react'
import Navbar from './HomeComp/Navbar'




const Signup = () => {
 const [data,setData] = useState({
  email:"",
  password:""
 })
  
 const {email,password} = data;

 const changeHandler = (e)=>{
  setData({...data,[e.target.name]:e.target.value})
 }

 const signUp = (e)=>{
  e.preventDefault()
  // auth.createUserWithEmailAndPassword(email, password)
  alert("Signed in successfuly")
 }
 const signIn = (e)=>{
  e.preventDefault()
  //auth.signInWithEmailAndPassword(email,password)
  alert("Signed in")
 }

 

  return (
    <div >
  <Navbar/>
    <div className='flex flex-col items-center justify-center mt-28'>
      <h1 className="text-4xl lg:text-5xl md:text-5xl md:mb-6">Create an account</h1>


     <form className="lg:w-[35%] md:w-1/2  rounded-lg px-8  pb-8 pt-2 flex flex-col  w-full lg:mt-2 mt-2 md:mt-0" autoComplete='off'>
     <div className="mb-4">
        <label  className="text-gray-600 text-md">Email</label>
        <input type="email"  name="email" className="w-full px-3 py-1 text-base text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" value={email} onChange={changeHandler} />
      </div>
      <div className="mb-4">
        <label  className="text-gray-600 text-md">Password</label>
        <input type="password" name="password" className="w-full px-3 py-1 text-base text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" value={password}  onChange={changeHandler} />
      </div>
      
      <div className='flex mb-3'>
      <input id="link-checkbox" type="checkbox" value="" className=" mt-[1px]  w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded  "/>
        <p className='ml-2 text-gray-600 text-md'>
I certify that I am 18 years of age or older, I agree to the User Agreement, and I have read the Privacy Policy.</p>
      </div>
      <button className="px-8 py-2 text-lg text-white border-0 rounded bg-emerald-500 focus:outline-none" onClick={signUp}>Sign up</button>
      <p className='text-center text-gray-500 text-md'>or</p>
      <button className="px-8 py-2 text-lg text-white bg-black border-0 rounded focus:outline-none" onClick={signIn}>Login</button>
     </form>
    
  </div>
 
    </div>

  )
}

export default Signup
