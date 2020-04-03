import React , {useReducer} from 'react';

const initialState = {
    count : 0
};

const reducer = (currentState,action) => {
    const {type, payload} = action;
    const {count} = currentState;
    switch(type){
        case 'increment' :      const {maxValue, stepValue} = payload;
                                if(count >= maxValue) return {...currentState, count };
                                return  {...currentState, count : count + stepValue};

        case 'decrement' :       return  {...currentState, count : count - payload};

        case 'reset' :           return  {...currentState, count : 0};

        default :                return currentState;
    }

};

export default function UseReducer({max,step}){
    const [newState, dispatch] = useReducer(reducer, initialState);
    const { count } = newState;
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch({type : 'increment',payload : {maxValue : max, stepValue : step}})}>Increment</button>
            <button onClick={() => dispatch({type : 'decrement',payload : '1'})}>Decrement</button>
            <button onClick={() => dispatch({type : 'reset',payload : '0'})}>Reset</button>
        </div>
    )
};
