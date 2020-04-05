import React,{useEffect,useReducer} from "react";

const initialState = {
  loading : false,
  data : null,
  error : null
};

const reducer = (currentState,action) => {
    const {type, payload} = action;
    switch(type){
        case 'success' : return {...currentState, loading : false, data : payload };
        case 'error' : return {...currentState,loading: false, error : payload};
        default : return currentState;
    }
};

export default function useFetch(url){
    const [newState,dispatch] = useReducer(reducer,initialState);

    useEffect(() => {
        const  fetchUrl = async () => {
            try{
                const data = await fetch(url);
                const response  = await data.json();
                dispatch({type : 'success', payload : response});
            }
            catch (e) {
                dispatch({type : 'fail', payload : e});
            }
        };
        fetchUrl();
    },[]);

    return [newState.data, newState.error,newState.loading];
}
