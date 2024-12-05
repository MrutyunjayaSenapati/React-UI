import React from 'react'

function StopDefault() {
function handleSubmit(e){
    e.preventDefault();
    alert('Form Submited to Server');
}
  return (
    <div className='container-fluid'>
        <form  onSubmit={handleSubmit}>
            User Name:<input type="text" name='UserName'/>
            <button>Submit</button>

        </form>

    </div>
  )
}

export default StopDefault