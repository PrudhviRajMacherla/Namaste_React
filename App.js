/**  <div id="par">
    <div id="child1">
        <h1>h1 from child1</h1>
        <h2>h2 from child1</h2>
    </div>
    <div id="child2">
        <h1>h1 from child2</h1>
        <h2>h2 from child2</h2>
    </div>
    
</div> **/

// const heading = React.createElement("h1",{
//     id:"heading"
// },"This is from React");
// const root  = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client"
// const parent = React.createElement("div",{id:"parent"},
//     [
//         React.createElement("div",{id:"child1"},
//             [
//                 React.createElement("h1",{},"h1 from child1"),
//                 React.createElement("h2",{},"h2 from child1"),
//             ]
//         ),
//         React.createElement("div",{id:"child2"},
//             [
//                 React.createElement("h1",{},"h1 from child2"),
//                 React.createElement("h2",{},"h2 from child2"),
//             ]
//         )
//     ]
// )

const HeadingCompo1=()=>{
    return <h1>Functional component using different syntax 1</h1>
}
const Title =()=>(<h1 className="heading">
    Functional component using different syntax 2
</h1>);

const ele = <span>Using element inside react component</span>

const HeaderComponent=()=>(
    
    <>
    {ele}
    <Title/>
    <HeadingCompo1/>
    <h1>Functional component</h1>
    </>  
)
    

const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
