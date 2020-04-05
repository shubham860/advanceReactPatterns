import React,{useEffect} from "react";
import useFetch from "./useFetch";

export default  function ApiRequest() {
    const [loading, data, error] =  useFetch('https://jsonplaceholder.typicode.com/todos/ ');
    const asset = data || [];
    return(
       <div>
           {
               loading ? <h1>Loading...</h1> : asset.map((item,index) => <h1 key={index}>{item.title}</h1>)
           }
        </div>
    )
};
