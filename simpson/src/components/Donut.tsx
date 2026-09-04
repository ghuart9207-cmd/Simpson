import { useState } from "react";

interface UserProps {
 nbdonut : number
}

function Donut(props : UserProps) {
  const[nb, setNb] = useState(props.nbdonut);

  return (
    <button onClick={ () => setNb(nb + 1)}>
        <p>🍩{nb}</p>
    </button>
 );
}

export default Donut;