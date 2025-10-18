// /import React,{useState} from "react";
// /export const App= () =>{

// const students=["john","mary","alex","sara","sujan"];

// return(
<>
  {/* <div>
      <h2>conditional randering...</h2>
      { isloggedIn ? (
        <h3> welcome back ,user</h3>
      ):(
        <h3>please log in to continue...</h3>
      )}
      <button onClick={()=> setIsloggedIn(!isloggedIn)}>
        {isloggedIn ? "Log Out":"Log In"}
      </button> 
    </div> */}

  {/* <div>
        <h4>list rendering....</h4>
        <ul>
          {students.map((name,index) =>(
            <li key={index}>
              {index+1}.{name}
            </li>
          ))}
        </ul>
       </div> */}

</>
// )};
import React from "react";
import { Greeting } from "./components/greetings";

export const App = () => {
  const students = [
    { id: 1, name: "john", age: 22, course: "React" },
    { id: 2, name: "mary", age: 21, course: "Node.js" },
    { id: 3, name: "Alex", age: 23, course: "Javascript" },
  ];

  return (
    <>
      <div>
        <Greeting name="virat" age="36"></Greeting>
      </div>
      <div>
        <h4>student Details...</h4>
        {students.map((student) => (
          <p>
            Name:{student.name} | Age:{student.age} | course:{student.course}
          </p>
        ))}
      </div>
    </>
  );
};