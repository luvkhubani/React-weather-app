// type rfce to make react function component.
import React from "react";

import Temp from "./components/weather/temp";
function App() {
  return (
    <div>
      <Temp />
    </div>
  );
}

export default App;

/*
// Basics

function App() {
  return (
    <div>
      <MyName />
      Hello World.
      <p> Hello</p>
    </div>
  );
}

function MyName() {
  return "Luv Khubani";
}
export default App;

/*
There are Three things which are mandatory to be in a react app

1) import React from "react"; statement
2) Any one function (functional Component)

3) And the function should always return JSX in one element that is, it should either only return one <div> </div> or one <p> </p> or one react component like <React.component> data </React.component> or <> data</> 

Extra - 
1) properties of tags should always be in camel case like onClick property etc.
2) we can also make component and use it in another component and that is called nested component, here i have made an component using fn MyName and then used it in fn App, we can also wrap one components data into another like for layouts and ui.
*/
