import './App.css';
import React, { useEffect, useState } from 'react';
import User from './User'

function App() {

  {/* fetch API | GET method */ }
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
  //     result.json().then((resp) => {
  //       // console.log("result",resp);
  //       setData(resp)
  //     });
  //   });
  // }, []);
  // console.log(data);

  {/* POST Method in Rest API */ }
  // const [id, setId] = useState(0);
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");

  // function saveUSer(){
  //   console.log({id,title,body});
  //   let data={id,title,body};
  //   fetch("https://jsonplaceholder.typicode.com/posts",{
  //     method:'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body:JSON.stringify(data)
  //   }).then((result)=>{
  //     // console.log("result",result)
  //     result.json().then((resp)=>{
  //       console.log("resp",resp)
  //     })
  //   })
  // }

  //Delete Method in React API
  // const [data, setData] = useState([]);
  // Pre-filled form Data
  // const [id, setId] = useState(0);
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  //Update Data with API | Put Method
  // const [userId, setUserId] = useState(null);
  // useEffect(() => {
  //   getList();
  // }, []);

  // function getList() {
  //   fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
  //     result.json().then((resp) => {
  //       // console.log("result",resp);
  //       setData(resp)
  //       setId(resp[0].id)
  //       setTitle(resp[0].title)
  //       setBody(resp[0].body)
  //       setUserId(resp[0].userId)
  //     });
  //   });
  // }

  // function deleteUser(id) {
  //   fetch(`https://jsonplaceholder.typicode.com/posts${id}`, {
  //     method: 'DELETE'
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.log(resp)
  //       getList();
  //     })
  //   })
  // }

  // function selectUser(id){
  //   console.log(data[id-1])
  //   let item=data[id-1]
  //   setId(item.id)
  //   setTitle(item.title)
  //   setBody(item.body)
  //   setUserId(item.userId)
  // }

  // function updateUser(){
  //  let item= {id,title,body,userId};
  //  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
  //   method: 'PUT',
  //   headers: {
  //     'Accept':'application/json',
  //     'Content-Type':'application/json'
  //   },
  //   body: JSON.stringify(item)
  // }).then((result) => {
  //   result.json().then((resp) => {
  //     console.log(resp)
  //     getList();
  //   })
  // })
  // }

  // Previous state in functional component
  // const [count, setCount] = useState(1);
  // function updateCounter() {
    // let rand = Math.floor(Math.random() * 10);
    // setCount((pre) => {
    //   console.log(pre)
    //   if (pre < 5) {
    //     alert("low value");
    //   }
    //   return rand;
    // });
 
  //   for (let index = 0; index < 5; index++) {
  //     setCount((pre)=>pre+1);
  //   }
  // }

   // Previous Props with Hooks
  // const [count, setCount] = useState(0);

  // State with Object | Reactjs Hooks
  // const [data,setData] = useState({name:'Anshul',age:23})

  return (
    <div className="App">
      {/* fetch API | GET method */}
      {/* <h1>fetch API | GET method</h1>
      <table border="1">
        <tbody>
          <tr>
            <td>USERID</td>
            <td>ID</td>
            <td>TITLE</td>
            <td>BODY</td>
          </tr>

          {
            data.map((item) =>
              <tr>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            )
          }
        </tbody>
      </table> */}

      {/* POST Method in Rest API */}
      {/* <h1>POST Method in Rest API </h1>
      <input type="text" value={id} onChange={(e) =>{setId(e.target.value)}} name="userId"/> <br/><br/>
      <input type="text" value={title} onChange={(e) =>{setTitle(e.target.value)}} name="title"/> <br/><br/>
      <input type="text" value={body} onChange={(e) =>{setBody(e.target.value)}} name="body"/> <br/><br/>
      <button type="button" onClick={saveUSer}>Save New User</button> */}

      {/* Delete Method in React API */}
      {/* <h1> Delete Method in React API</h1>
      <table border="1">
        <tbody>
          <tr>
            <td>USERID</td>
            <td>ID</td>
            <td>TITLE</td>
            <td>BODY</td>
            <td>OPERATIONS</td>
            <td>OPERATIONS</td>
          </tr>

          {
            data.map((item) =>
              <tr>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
                <td><button onClick={() => selectUser(item.id)}>Update</button></td>
              </tr>
            )
          }
        </tbody>
      </table> */}

      {/* Pre-filled form Data */}
      {/* <h1>Pre-filled form Data </h1>
      <div>
        <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/><br /> <br />
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/><br /> <br />
        <input type="text" value={body} onChange={(e)=>setBody(e.target.value)}/><br /> <br />
        <button onClick={updateUser}>Update User</button>
      </div> */}

      {/* Previous state in functional component */}
      {/* <h1>Previous state in functional component {count}</h1>
      <button onClick={updateCounter}>Click  me to Update Counter</button> */}

       {/* Previous Props with Hooks */}
       {/* <User count={count}/>
       <button onClick={()=>setCount(Math.floor(Math.random()*10))}>Update Counter </button> */}

        {/*  State with Object | Reactjs Hooks */}
        {/* <h1>State with Object | Reactjs Hooks</h1>
        <input type="text" placeholder="Enter Name" value={data.name} 
        onChange={(e)=>{setData({...data,name:e.target.value})}}/> */}
        {/* onChange={(e)=>{setData({age:data.age,name:e.target.value})}}/> */}
        {/* <input type="text" placeholder="Enter Age" value={data.age} 
        onChange={(e)=>{setData({...data,age:e.target.value})}}/> */}
        {/* onChange={(e)=>{setData({name:data.name,age:e.target.value})}}/> */}
        {/* <h1> {data.name}</h1>
        <h1> {data.age}</h1> */}

         {/*  Context API  */}
        










    </div>
  );
}

export default App;
