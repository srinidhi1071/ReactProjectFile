import React from "react";

 function Title() {
    console.log("Title Rendering")
  return (
    <div>
      <h1>Use CallBack Hook</h1>
    </div>
  );
}
export default React.memo(Title)