import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ClockMUI from '../Dec 28/ClockMUI'

export default function RouterDemo() {
  return (
    <div className='container-fluid'>
        <BrowserRouter>
        <header>
            <nav className='d-flex justify-content-between'>
                <div className='fs-5 fw-bold '> <Link to="/" className="text-decoration-none text-dark">Shopper</Link></div>
                <div>
                    <span className='mx-2'><Link to="/">Home</Link></span>

                    <span className='mx-2'><Link to="men">Men</Link></span>
                    <span className='mx-2'>
                        <Link to="women">Women</Link>
                    </span>

                    <span className='mx-2'>
                        <Link to="kid">Kid</Link>
                    </span>
                    <span className='mx-2'>
                        <Link to="clock">Clock</Link>
                    </span>
                </div>


            </nav>
        </header>
        <section>
            <Routes>
                <Route path='/' element={<div><h2>Shopper Home</h2><p>Offer for Men,Women and Kids fashion</p></div>}/>

                <Route path='mobile'element={<div><h3>Mobile</h3><img src="Image/m1.png" alt="" /></div>}/>

                <Route path='men' element={<div><h3>Men</h3> <img src="Image/man.jpg" height="250px" width="250px" alt="" /></div>}/>

                <Route path='women' element={<div><h3>Women</h3><img src="Image/woman.jpg"height="250"width={250} alt="" /></div>}/>

                <Route path="kid"element={<div><h3>Kid</h3><img src="Image/kid.jpg"height="200"width="200" alt="" /></div>}/>
                <Route path='clock' element={<ClockMUI/>}/>
                <Route path='*' element={<div> <h4 className='text-danger'>Not Found</h4></div>}/>

            </Routes>
        </section>
</BrowserRouter>
    </div>
  )
}
