import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Card />
      <Form />
    </div>
  );
}

export default App;
