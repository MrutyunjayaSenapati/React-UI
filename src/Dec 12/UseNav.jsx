import React from 'react'
import Navbar from './Navbar'

export default function UseNav() {
  return (
    <div className='container-fluid'>
        <header className='mt-4'>
            <Navbar theme="bg-danger text-white" title="Shopper" menuItems={["Home",'shop','Catlog','Blog','Docs']}shortcuts={['bi bi-person','bi bi-cart4']}></Navbar>

        </header>
        <section>
            <Navbar theme="bg-primary text-white" title="NIT" menuItems={["Home","Courses",'Offers']} shortcuts={['bi bi-heart','bi bi-person', 'bi bi-bell','bi bi-facebook']} />
        </section>
        
        <h2>Hello world</h2>

    </div>
  )
}
