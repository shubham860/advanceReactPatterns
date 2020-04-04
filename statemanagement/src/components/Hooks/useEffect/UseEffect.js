import React , {useState, useEffect,useRef} from 'react';


export default function UseEffect({max,step}){
    const [count, setCount] = useState(0);

    useEffect(() => {
       const id =  setInterval(()=>{
            console.log(count);
        },2000);

        return () => clearInterval(id);
    },[count]);


    const inc = () => setCount(c => c+1 );
    const dec = () => setCount(count-1);
    const res = () => setCount(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
            <button onClick={res}>Reset</button>
        </div>
    )
};
