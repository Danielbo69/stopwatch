import React from "react";

function DisplaySaveTime(props) {
  const { saveTime } = props;
  return (
    <>
      {saveTime.length !== 0 ? (
        <>
          &nbsp;
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12}}>
            <span>Lap</span>
            <span>Lap times</span>
            <span>Overall Time</span>
          </div>
          {saveTime.map((saveTime, index) => (
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12}} key={index}>
              <span>{`${index + 1}`}</span>&nbsp;
              <span>{saveTime.time}</span>&nbsp;
              <span>{saveTime.time}</span>
            </div>
          ))}
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default DisplaySaveTime;
