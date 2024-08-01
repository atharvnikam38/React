
import AppName from "./components/name";
import AddContainer from "./components/addContainer";

import Todoitem1 from "./components/todoitem1";
import Todoitem2 from "./components/todoitem2";
import './App.css';
function App() {
  return <div>
    <center class='todoContainer'>
      <AppName />
        <AddContainer/> 
        <Todoitem1/>
        <Todoitem2/> 
  </center>

  </div>
}

export default App
