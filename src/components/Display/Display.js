import Buttons from "../Buttons/Buttons";
import "./Display.css";
import DisplaySaveTime from "./DisplaySaveTime";

function Display(props) {
  const { time, start, resume, stop, reset, lap, saveTime, status } = props;
  return (
    <>
      <div className="main-section">
        <div className="numbers">
          {time.h > 0 ? (
            <>
              <span>{time.h ? time.h : time.h}</span>
              &nbsp;:&nbsp;
            </>
          ) : (
            ""
          )}
          <span>{time.m ? time.m : time.m}</span>&nbsp;:&nbsp;
          <span>{time.s ? time.s : time.s}</span>&nbsp;.&nbsp;
          <span>{time.ms ? time.ms : +time.ms}</span>
        </div>
        <DisplaySaveTime saveTime={saveTime} />
      </div>
      <Buttons
        start={start}
        resume={resume}
        stop={stop}
        reset={reset}
        lap={lap}
        status={status}
      />
    </>
  );
}

export default Display;
