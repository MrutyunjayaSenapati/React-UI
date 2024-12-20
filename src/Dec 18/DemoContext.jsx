import React, { useState } from 'react';
import ContextDemo from './ContextDemo.jsx';
import { searchContext } from './ContextDemo.jsx'; // Ensure `searchContext` is exported correctly

export default function DemoContext() {
    const [searchString, setSearchString] = useState('');
    const [contextMemory, setContextMemory] = useState('');

    function handleSearchChange(e) {
        setSearchString(e.target.value);
    }

    function handleSearchClick() {
        setContextMemory(searchString.trim()); // Trim whitespace
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            setContextMemory(searchString.trim());
        }
    }

    return (
        <div className="p-2 bg-black mt-2">
            <header className="d-flex justify-content-between text-white">
                <div className="h3">Shopper</div>
                <div>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Shopper"
                            onChange={handleSearchChange}
                            onKeyPress={handleKeyPress} // Add keypress event
                            aria-label="Search Shopper"
                        />
                        <button
                            className="bi bi-search btn btn-warning"
                            onClick={handleSearchClick}
                            aria-label="Search"
                        ></button>
                    </div>
                </div>
                <div>
                    <span className="bi bi-cart4" role="img" aria-label="Cart"></span>
                    <span className="bi bi-person-fill" role="img" aria-label="Profile"></span>
                </div>
            </header>
            <section className="bg-light p-3" style={{ height: '500px' }}>
                <searchContext.Provider value={contextMemory}>
                    <ContextDemo />
                </searchContext.Provider>
            </section>
        </div>
    );
}
