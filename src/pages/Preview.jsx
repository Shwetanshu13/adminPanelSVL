import React, { useEffect, useState } from "react";
import { MobileScreen, NewsPreview } from "../components";


const Preview = () => {

  const [width, setWidth] = useState(screen.width);
  const [isMobile, setIsMobile] = useState(width < 640 ? true : false);

  useEffect(() => {
    setWidth(screen.width);
    window.addEventListener("resize", () => {
      setWidth(screen.width);
    });
    setIsMobile(width < 640 ? true : false);
    // console.log(isMobile, width);
  }, [width]);

  if (isMobile) {
    return <NewsPreview />;
  } else {
    return (
      <MobileScreen />
    )
  }
};

export default Preview;
