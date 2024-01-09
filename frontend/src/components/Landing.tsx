import { useState } from "react";
const Landing = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <button>Join</button>
    </div>
  );
};

export default Landing;
