import React , {useState, useEffect,useRef} from 'react';


export default function UseRef({max,step}){
    const [count, setCount] = useState(0);
    const reference = useRef();

    let msg = "";
    if(reference.current < count ) msg = "higher";
    if(reference.current > count ) msg = "lower";

    reference.current = count;

    console.log(reference);

    // const inc = () => setCount(count+1);

    const inc = () => setCount(c => c+1 );
    const dec = () => setCount(count-1);
    const res = () => setCount(0);
    return (
        <div>
            <h1>{count}</h1>
            <p>{msg}</p>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
            <button onClick={res}>Reset</button>
        </div>
    )
};
