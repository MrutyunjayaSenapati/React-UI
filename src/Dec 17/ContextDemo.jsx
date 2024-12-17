import React, { createContext, useContext } from 'react'

let userContext=createContext(null);
export function Level1(){
    let context=useContext(userContext);
    return(
        <div className='p-4 bg-warning'>
            <h3>Level1/{context}</h3>
            <Level2/>

        </div>
    )

}
export function Level2(){
    let context=useContext(userContext);
    return(
        <div className='p-4 bg-danger'>
            <h3>Level-2/{context}</h3>
        </div>
    )
}


export default function ContextDemo() {
  return (
    <div className='p-4 bg-dark m-4 text-white'>
        <userContext.Provider value={'John'}>
            <h2>
                Parent
            </h2>
           {/* < Level1/>  */}
           <Level1/>

        </userContext.Provider>
        
    </div>
  )
}
