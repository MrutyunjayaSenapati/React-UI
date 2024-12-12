import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`d-flex justify-content-between p-3 border border-1 ${props.theme}`}>
        <div>{props.title}</div>
        <div>
            {
                props.menuItems.map((item)=>( <span className='mx-3'key={item}>{item}</span>)
            )}
        </div>

        <div>
            {
                props.shortcuts.map((shortcut)=>(<button className={`mx-2 btn ${shortcut}`} key={shortcut}></button>)
            )}
        </div>


    </nav>
  );
}
