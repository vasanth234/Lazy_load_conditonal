import React from 'react'
import {useState,useRef} from 'react'
const Form = () => {
    const [data,setData]=useState('');
   const pwd=useRef();
    return (
      <div className='border w-25 mt-5 m-auto p-3'>
        <h2 className='text-primary text-center'>Login form</h2>
        <div>
          <label>Email</label>
          <input type='text' className='form-control' value={data} onChange={(e)=>{
            setData(e.target.value)
          }}/>
        </div>
        <div>
          <label>Password</label>
          <input type='text' className='form-control' ref={pwd}
          />
        </div>
        <div className='mt-3'>
          <button className='btn btn-primary w-100' onClick={()=>{
            console.log("email:",data);
            console.log("password:",pwd.current.value);
          }}>Login</button>
        </div>
      </div>
    )
  }
  
  

export default Form