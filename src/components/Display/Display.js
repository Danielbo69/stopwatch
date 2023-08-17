import React from "react";
import Buttons from "../Buttons/Buttons";
import './Display.css';

function Display(props) {
    const {time, start, resume, stop, reset, status} = props;
    return (
      <div className="main-section">
      <div className="numbers">
        {time.h > 0 ? (
          <>
            <span>{(time.h >= 10) ? time.h : "0" + time.h}</span> 
            &nbsp;:&nbsp;
          </>
        ) : (
          ""
        )}
        <span>{(time.m >= 10)  ? time.m : "0" + time.m}</span>&nbsp;:&nbsp;
        <span>{(time.s >= 10) ? time.s : "0" + time.s}</span>&nbsp;:&nbsp;
        <span>{(time.ms >= 10) ? time.ms : "0" + time.ms}</span>
      </div>
      <Buttons start={start} resume={resume} stop={stop} reset={reset} status={status}/>
    </div>
  );
}

export default Display;
