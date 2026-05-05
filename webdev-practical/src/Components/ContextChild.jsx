import { useContext } from "react";
import { MyContext } from "./Context";

function ContextChild() {
  const data = useContext(MyContext);

  return (
    <div>
      <h2>{data}</h2>
    </div>
  );
}

export default ContextChild;