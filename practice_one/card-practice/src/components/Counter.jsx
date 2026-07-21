import { useState } from "react";

let Counter = () => {

    let [count, setCount] = useState(0);

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-1 bg-gray-950 p-2 text-center">
            <h1 className="w-2xs h-10 bg-gray-700 text-white text-2xl p-1.5 m-1.5 rounded">this is card file</h1>
            <h1 className="w-2xs p-1.5 m-1.5 text-2xl text-white bg-gray-700 rounded" >{count}</h1>
            <button onClick={() => setCount(prev => prev + 1)} className="p-2 bg-green-500 rounded ml-3 cursor-pointer hover:bg-green-700">click me</button>
        </div>
    )
}


export default Counter;