import React from "react";
import useFetch from "./useFetch";

export default function ApiRequest() {
    const [data, error] = useFetch('https://jsonplaceholder.typicode.com/todos/');
    return(
        <div>
            { data.map(i => console.log(i))}
        </div>
    )
};
