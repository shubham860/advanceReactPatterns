import React,{useEffect} from "react";
import useFetch from "./useFetch";

export default  function ApiRequest() {
    const [data, error] =  useFetch('https://jsonplaceholder.typicode.com/todos/');
    console.log(data);

    return(
       <div>
           {
               data && data.map((item,index) => <h1 key={index}>{item.title}</h1> )
           }
        </div>
    )
};
