// import { EventEmitter } from "fbemitter";
import React, { useState } from "react";

function Notification() {
  //   export const emitter = new EventEmitter();

  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const notificationStyle = {
    padding: 10,
    border: "1px green solid",
    marginBottom: 15,
    backgroundColor: "#55c555",
    borderRadius: 8,
  };

  //   const reset = () => {
  //     setOpen(false);
  //   };

  const autoHideAfterTimeout = () => {
    setTimeout(() => setOpen(false), 5000);
  };

  //   emitter.addListener("NOTIFICATION", (msg) => {
  //     setMsg(msg);
  //     setOpen(true);
  //     autoHideAfterTimeout();
  //     console.log(msg);
  //   });

  setMsg(msg);
  setOpen(true);
  autoHideAfterTimeout();

  if (!open) {
    return null;
  }
  return (
    <div style={notificationStyle}>
      <span>{msg}</span>
    </div>
  );
}

export default Notification;
