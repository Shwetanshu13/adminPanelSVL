import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NewsContext from "../context/NewsContext";

// Mobile Screen Preview Component

const MobileScreen = () => {
  const { newsData } = useContext(NewsContext);
  const navigate = useNavigate();

  if (!newsData) {
    return <h1>No data to preview</h1>;
  } else {
    return (
      <div className="flex">
        <div
          className="mx-auto overflow-x-hidden overflow-y-auto border border-black my-5 rounded-lg pr-1"
          style={{ width: "300px", height: "600px"}}
        >
          <div className="news-preview flex flex-col gap-3">
            <div className="img w-full h-60 border border-blue-100 bg-blue-300 flex">
              <h1 className="text-lg m-auto">IMAGE WILL SHOW UP HERE</h1>
            </div>
            <div className="title">
              <h2 className="text-base font-semibold text-center">
                {newsData.title}
              </h2>
            </div>
            <div className="content mx-2">
              <p className="text-xs">{newsData.content}</p>
            </div>
          </div>
          <div className="back flex">
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mx-auto my-5"
              onClick={() => navigate("/create")}
            >
              Back to form
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default MobileScreen;
