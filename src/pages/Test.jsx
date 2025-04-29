import React from "react";
import Sparkle from "react-sparkle";

const StarCluster = () => {
  return (
    <div className="relative flex items-center space-x-2">
      {/* Star emoji cluster */}
      <div className="relative text-yellow-300 text-xl leading-none">
        ✨{/* Optional: smaller stars nearby (static) */}
        <Sparkle
          count={3}
          minSize={4}
          maxSize={20}
          fadeOutSpeed={12}
          flicker
          overflowPx={12}
          color="gold"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default StarCluster;
