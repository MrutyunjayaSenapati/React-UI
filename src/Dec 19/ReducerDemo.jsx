import React from 'react'
import { useReducer } from 'react';

let initialState={
    viewersCount:0
}
function reducer(state,action){
    switch(action.type){
        case "join":
            return {viewersCount:state.viewersCount+1}
        case "exit":
            if (state.viewersCount===0){
                return state;
            }
            return {viewersCount:state.viewersCount-1}
    }
}

export default function ReducerDemo() {
    const [state,dispatch]=useReducer(reducer,initialState);
    function handleJoinClick(){
        dispatch({type:"join"});
    }
    function handleExitClick(){
        dispatch({type:'exit'});
    }

  return (
    <div className='container-fluid text-center'>
        <h2 className='text-center'>Watch Live</h2>
        <iframe src="https://youtube.com/embed/0kFGbZ9KrlI" ></iframe>
        <div className=' mt-4'>
            <div className='bi bi-eye'>[{state.viewersCount}]Viewing</div>
        </div>
        <div className='mt-4 row'>
            <div className='col'>
                <h3>User 1</h3>
                <button onClick={handleJoinClick} className='bi bi-camera-video btn btn-primary'> Join</button>
                <button onClick={handleExitClick} className='bi bi-door-open btn btn-danger ms-2'> Exit</button>

            </div>
            <div className="col">
                <h3>User2</h3>
                <button onClick={handleJoinClick} className='bi bi-camera-video btn btn-primary'> Join</button>
                <button onClick={handleExitClick} className='bi bi-door-open btn btn-danger ms-2'> Exit</button>

            </div>

        </div>

    </div>
  )
}
