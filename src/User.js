import React,{useEffect,useRef} from 'react';

function User(props){
    const lastVal = useRef();
    useEffect(() =>{
        lastVal.current=props.count;
    })

    const previousProps=lastVal.current;
    return (
        <div>
            <h1>Previous Value {props.count}</h1>
            {/* <h1>Difference {props.count-previousProps}</h1> */}
            <h2>Previous Value {previousProps}</h2>
        </div>
    )
}

export default User;