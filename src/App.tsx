import React, { useState } from "react";
import BgImg from "@/asserts/imgs/2233background.jpg";

function App() {
  const [count, setCounts] = useState("");
  const onChange = (e: any) => {
    setCounts(e.target.value);
  };
  return (
    <>
      <h2>oooos</h2>
      <p>受控组件</p>
      <input type="text" value={count} onChange={onChange} />
      <br />
      <p>dddd</p>
      <input type="text" />
      <img style={{ width: 400 }} src={BgImg} />
    </>
  );
}
export default App;
