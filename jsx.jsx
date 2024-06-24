
import React from 'react'
function App ()
{return React.createElement(
    "div",
    null,
    React.createElement ("p", null,"This is sample list"),
        React.createElement("ul",null,
            React.createElement("li",null,"List item no.1"),
            React.createElement("li",null, "List item no 2")));
}