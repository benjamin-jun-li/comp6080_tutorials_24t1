import "./App.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useState } from "react";
const LeftBtn = styled(Button)({
  color: "white",
  fontSize: "20px",
  backgroundColor: "pink",
  border: "none",
  "&:hover": {
    backgroundColor: "white",
    color: "pink",
    border: "none",
  },
});


function App() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState({
    msg: "hello"
  });
  const reduceCount = () => {
    setCount(prev => prev - 1);
  }  

  const increaseCount = () => {
    setCount(prev => prev + 1);
    setMsg(prev => ({
      ...prev,
      count
    }));
  }

  return (
    <main className="app">
      <div className="container">
        <LeftBtn onClick={reduceCount} variant="outlined">left</LeftBtn>
        <p
          style={{
            fontSize: "70px",
            color: "purple",
            margin: "0 100px",
          }}
        >
          {count}
        </p>
        <Button onClick={increaseCount} variant="contained">right</Button>
      </div>
      <p style={{ color: "white"}}>{JSON.stringify(msg)}</p> 
    </main>
  );
}

export default App;
