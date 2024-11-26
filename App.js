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
const parent = React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child1"},
            [
                React.createElement("h1",{},"h1 from child1"),
                React.createElement("h2",{},"h2 from child1"),
            ]
        ),
        React.createElement("div",{id:"child2"},
            [
                React.createElement("h1",{},"h1 from child2"),
                React.createElement("h2",{},"h2 from child2"),
            ]
        )
    ]
)
// console.log(parent);
const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
