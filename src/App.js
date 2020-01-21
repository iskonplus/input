import React from "react";
import "./App.css";
import RequiredEmailInput from "./components/RequiredEmailInput";
import RequiredInput from "./components/RequiredInput";


function App() {

  return (

    <div className="container">

      <RequiredInput />
      <RequiredEmailInput />

    </div>

  )

}



export default App;
