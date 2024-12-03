import { useState } from "react";
const User = (props)=>{
    const{name,location}=props;
    const[count1]=useState(0);
    const[count2]=useState(1);
    return (
        <div className="user-card">
            <h1>Functional Component</h1>
            <h2>name : {name} </h2>
            <h2>location :{location} </h2>
            <h3>count1:{count1}</h3>
            <h3>count2:{count2}</h3>
        </div>
    );
}
export default User;