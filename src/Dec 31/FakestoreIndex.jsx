import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import FakestoreHome from './FakestoreHome';
import FakestoreProducts from './FakestoreProducts';
import FakestoreProductDetails from './FakestorProductDetails';

export default function FakestoreIndex() {
    return (
        <div className='container-fluid'>
            <BrowserRouter>
                <header className='d-flex justify-content-between p-2 border border-1 bg-light'>
                    <div className='fs-4 fw-bold'>
                        <Link to="/" className="text-decoration-none text-dark">Fakestore</Link>
                    </div>
                    <div className='fs-4 fw-bold'>
                        <nav>
                            <Link to="/" className="mx-2 text-decoration-none text-dark">Home</Link>

                            <Link to="/products/electronics" className="mx-2 text-decoration-none text-dark">Electronics</Link>

                            <Link to="/products/jewelery" className="mx-2 text-decoration-none text-dark">Jewelery</Link>

                            <Link to="/products/men's clothing" className="mx-2 text-decoration-none text-dark">Men Fashion</Link>

                            <Link to="/products/women's clothing" className="mx-2 text-decoration-none text-dark">
                            Women Fashion</Link>


                        </nav>
                    </div>
                </header>
                <section>
                    <Routes>
                        <Route path='/' element={<FakestoreHome />} />
                        <Route path='products/:category' element={<FakestoreProducts />} />
                        <Route path='details/:id' element={<FakestoreProductDetails />} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    );
}
