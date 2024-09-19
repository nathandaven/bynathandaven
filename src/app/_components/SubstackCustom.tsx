"use client";
import React, { FunctionComponent, ReactNode, useEffect } from "react";

// Props (type checked) -- use ? to make a prop optional
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode;
  className?: string;
};
const SubstackCustom: FunctionComponent<PropsWithChildren> = ({ className, children }) => {
  useEffect(() => {
    // Define the CustomSubstackWidget on the window object
    window.CustomSubstackWidget = {
      substackUrl: "nathandaven.substack.com",
      placeholder: "example@gmail.com",
      buttonText: "Subscribe",
      theme: "custom",
      colors: {
        primary: "#F2F1EA",
        input: "#0F0E0E",
        email: "#FFFFFF",
        text: "#0F0E0E",
      },
    };

    // Create a new script element
    const script = document.createElement("script");

    // Set the source of the script to the Substack widget script
    script.src = "https://substackapi.com/widget.js";
    script.async = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="custom-substack-embed" className={className}>
      {children}
    </div>
  );
};

export default SubstackCustom;
