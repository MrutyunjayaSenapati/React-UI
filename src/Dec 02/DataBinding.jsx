    import React from 'react'
    
    function DataBinding() { 
        function handleClick(e,name,price,stock){
            alert(`Name=${name}\n Price=${price} \n Stock=${stock}\n X Position=${e.clientX} \nY Position ${e.clientY} \n ButtonId=${e.target.id}`);
        }

      return (
        <div className='container-fluid'>
            <button onClick={(e)=>handleClick(e,'TV',10000,true)}id='btnInsert' value="Insert">Click</button>
        </div>
      )
    }
    
    export default DataBinding