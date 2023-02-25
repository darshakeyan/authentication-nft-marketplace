import React from "react";

type ImageProps = {
  children: JSX.Element;
};
const Image: React.FC<ImageProps> = ({ children }) => {
  return (
    <div
      className="bg-meta-horizon 
                 bg-no-repeat 
                 bg-cover 
                 bg-center 
                 bg-fixed 
                 h-screen
                 overscroll-y-none	"
    >
      {children}
    </div>
  );
};

export default Image;
