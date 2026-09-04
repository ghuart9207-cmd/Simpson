import { useState } from "react";

function Donut() {
  const[nb, setNb] = useState(0);

  return (
    <button onClick={ () => setNb(nb + 1)}>
        <p>🍩{nb}</p>
    </button>
 );
}

export default Donut;