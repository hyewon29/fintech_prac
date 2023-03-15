import React,{useState} from "react";

const List=()=>{

    const [users,setUsers]=useState([
        {name: "홍길동", age: 12, height: 180},
        {name: "동", age: 18, height: 180},
        {name: "길동", age: 16, height: 180},
    ]);
    console.log(users);

    return (
        <div>
            {users.map((user)=>{
                return(
                     <>
                      <p>{user.name}</p>
                      <p>{user.age}</p>
                      <p>{user.height}</p>
                     </>
                );
             })}
        </div>
    );

};

export default List;