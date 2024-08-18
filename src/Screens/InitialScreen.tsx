import { CSSProperties } from "react";

export const InitialScreen = () => {
  return (
    <>
      <div>Hello, I am Kevin</div>
      <div style={styles} className="optionsLeft">
        <div>Personal</div>
        <div>Work</div>
      </div>
    </>
  );
};

const styles: CSSProperties = {
  position: "absolute",
  left: 0,
};
