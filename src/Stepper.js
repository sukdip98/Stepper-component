import { useState } from "react";
const Stepper = ({ list }) => {
  const [current, setCurrent] = useState(0);
  const nextButton = () => {
    if (current !== list.length - 1) {
      setCurrent(current + 1);
    }
  };
  const prevButton = () => {
    if (current !== 0) {
      setCurrent(current - 1);
    }
  };
  const width = (100 / (list.length - 1)) * current;
  return (
    <>
      <div className="stepper">
        <div className="wrapper">
          {list.map((el, i) => (
            <div className={`step ${current >= i ? "active" : ""}`}>
              {i + 1}
            </div>
          ))}
        </div>
        <div
          className="progress"
          style={{ width: `${width}%`, backgroundColor: "skyblue" }}
        ></div>
      </div>
      <div>{list[current]}</div>
      <button onClick={prevButton}>prev</button>
      <button onClick={nextButton}>next</button>
    </>
  );
};
export default Stepper;
