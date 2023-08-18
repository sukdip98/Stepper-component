import Stepper from "./Stepper";
import "./styles.css";

export default function App() {
  const steps = [<Example1 />, <Example2 />, <Example3 />, <Example4 />];
  return (
    <div className="App">
      <Stepper list={steps} />
    </div>
  );
}

const Example1 = () => {
  return (
    <div>
      <h1>Example 1</h1>
    </div>
  );
};
const Example2 = () => {
  return (
    <div>
      <h1>Example 2</h1>
    </div>
  );
};
const Example3 = () => {
  return (
    <div>
      <h1>Example 3</h1>
    </div>
  );
};
const Example4 = () => {
  return (
    <div>
      <h1>Example 4</h1>
    </div>
  );
};
