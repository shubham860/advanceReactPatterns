import React , {useState, useEffect} from 'react';

const getStateFromLocalStorage = () => {
    const storage = localStorage.getItem('Counter');
    if(storage) return JSON.parse(storage);
    return 0;
};

const setStateToLocalStorage = (c) => {
    localStorage.setItem('State',JSON.stringify(c));
};


export default function UseState({max,step}){
    const [count, setCount] = useState(getStateFromLocalStorage());

    // const inc = () => setCount(count+1);

    const inc = () => setCount(c => {
        if(count >= max) return c;
        return c + step;
    });

    useEffect(() => {
        setStateToLocalStorage(count);
    },[count]);

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
