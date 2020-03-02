import React from "react";
import ReactDOM from "react-dom";

let n=0
const App=()=>{
  return(
  <div>
    <div>{n}</div>

    <button onClick={
     ()=>{
       n++;
    ReactDOM.render(<App />, document.getElementById('root'));
  }
    }>+1</button>
  </div>

  );
}

export default App;
