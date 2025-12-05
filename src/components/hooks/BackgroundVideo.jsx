import React from "react";

export default function BackgroundVideo({ overlayColor }) {
  return (
    <>
  
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-2]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/bg-dark.mp4" type="video/mp4" />
      </video>

 
      <div
        className="fixed inset-0 z-[-1] transition-colors duration-500"
        style={{ backgroundColor: overlayColor }}
      ></div>
    </>
  );
}
