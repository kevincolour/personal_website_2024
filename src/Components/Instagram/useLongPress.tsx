import { useState, useEffect } from "react";

export default function useLongPress(
  callback = () => {},
  ms = 2000,
  setHoldCallback: any,
  forceStop: boolean
) {
  const [startLongPress, setStartLongPress] = useState(false);

  useEffect(() => {
    let timerId: any;
    // if (forceStop) {
    //   clearTimeout(timerId);
    // }
    if (startLongPress) {
      timerId = setTimeout(callback, ms);
    } else {
      clearTimeout(timerId);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [callback, ms, startLongPress]);
  console.log(startLongPress);
  const handler = (e: any) => {
    // setHoldCallback(true);
    console.log("here");
    setStartLongPress(false);
  };
  return {
    onMouseDown: (e: any) => {
      setStartLongPress(true);
    },
    onMouseUp: handler,
    // onMouseLeave: (e: any) => setStartLongPress(false),
    onTouchStart: (e: any) => {
      setStartLongPress(true);
    },
    onTouchEnd: () => handler,
    onContextMenu: (e: any) => {
      e.preventDefault();
      setStartLongPress(false);
      setHoldCallback(false);
      const ele = window.document.getElementById("wrapper");
      if (ele) ele.style.filter = "";
    },
  };
}
