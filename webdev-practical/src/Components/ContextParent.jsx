import { MyContext } from "./Context";
import ContextChild from "./ContextChild";

function ContextParent() {
  const message = "Hello from Context API";

  return (
    <MyContext.Provider value={message}>
      <ContextChild />
    </MyContext.Provider>
  );
}

export default ContextParent;