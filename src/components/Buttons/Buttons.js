import React from "react";
import "./Buttons.css";

function Buttons(props) {
  const { start, resume, stop, reset, lap, status } = props;

  return (
    <>
      {status === 0 ? (
        <button className="btn btn-start" onClick={start}>
          Start
        </button>
      ) : (
        ""
      )}
      {status === 1 ? (
        <div className="main-buttons">
          <button className="btn btn-stop" onClick={stop}>
            Stop
          </button>
          <button className="btn btn-reset" onClick={lap}>
            Lap
          </button>
        </div>
      ) : (
        ""
      )}
      {status === 2 ? (
        <div className="main-buttons">
          <button className="btn btn-resume" onClick={resume}>
            Resume
          </button>
          <button className="btn btn-reset" onClick={reset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Buttons;
