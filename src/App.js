import React from 'react'
import {lazy,Suspense,useState} from 'react'
//import Form from './Form'
/*it means whenever user have requirements at that time only related component should be reflect in the network tab as because if 
we render all components without any usage of all time will be
 consumed a lot in the network section 
 this is condtional rendering
*/
const Form=lazy(()=>import('./Form'))
const App = () => {
  const [show,setshow]=useState(false);
    return (
    <>
    <div className='text-center'>
      <h2 className='text-primary'>Login Form_Lazy loading</h2>
      <button className='btn btn-primary ' onClick={()=>{
        setshow(true)
      }}>Open Form</button>
      
    </div>
    {
        show==true && (
         <Suspense>
          <Form/>
       </Suspense>
        )
    }
    </>
  )
}

export default App