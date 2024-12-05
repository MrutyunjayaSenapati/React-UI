import React from 'react'

function DataStopPropagation() {
    function NavbarClick(){
        alert('Navbar Cliked');
    }

    function SearchClick(e){
        e.stopPropagation();
        alert('Search Clicked');
    }
  return (
    <div className='container-fluid'>
        <nav onClick={NavbarClick} className='bg-dark text-white p-3 m-2'>
            <span className='h3'>Navbar</span>
            <button onClick={SearchClick} className='bi bi-serch ms-4 btn btn-warning'>click</button>
        </nav>
        
    </div>
  )
}

export default DataStopPropagation