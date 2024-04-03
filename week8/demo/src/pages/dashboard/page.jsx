import { Link } from "react-router-dom";
import { useState, useRef } from "react";
const DashboardPage = () => {
  const [status, setStatus] = useState(false);
  const [name, setName] = useState("");
  const nameRef = useRef();
  nameRef.current = name;
  // difference between useRef and useState
  
  return (
    <div>
      <h1>Dashboard</h1>
      <h1>hihihi</h1>
      <Link className="cursor-pointer hover:underline" to="/">home</Link>
      <p>Welcome to the daasdffsdfasshboard page</p>
      <button onClick={() => setStatus(prev => !prev)}>toggle status</button>
      {status && <p>status asdffffdis true</p>}
      <br />
      <label htmlFor="name">Name</label>
      <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
  );
};

export default DashboardPage;
