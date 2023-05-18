import "./App.css";
import Display from "./components/Display/Display";
import { useState} from "react";

function App() {
  const times = {h:0, m:59, s:58, ms:0};
  const [time, setTime] = useState(times);
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () =>{
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  }
  const resume = () => start();

  const stop = () =>{
    clearInterval(interv)
    setStatus(2)
  }
  const reset = () =>{
    clearInterval(interv)
    setTime(times)
    setStatus(0);
  }

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++
    return setTime({ms: updatedMs, s: updatedS, m: updatedM, h: updatedH});
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <Display time={time} start={start} resume={resume} stop={stop} reset={reset} status={status}/>
        </div>
      </header>
    </div>
  );
}

export default App;
