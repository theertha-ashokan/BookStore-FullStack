import React from "react";

function Preloader() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <img
        src="https://i.pinimg.com/originals/5b/f0/a3/5bf0a3e0601d35349c5451fa52138ea6.gif"
        alt="preloader"
        className="w-80 h-80"
      />
    </div>
  );
}

export default Preloader;
