import React from "react";
import { Bar, Line } from "../components";

const Report = () => {
  return (
    <>
    <div className="heading-text my-5 text-center font-semibold">
      <h1 className="text-xl">Performance Report</h1>
    </div>
    <div className="flex flex-col mt-5 md:w-2/3 mx-auto">
      <div className="line sm:w-2/3 mx-auto m-3 md:my-3 border border-gray-400 rounded-sm p-1">
        <Line />
        <h3 className="text-center text-lg">Total views in the app on daily basis</h3>
      </div>
      <div className="bar sm:w-2/3 mx-auto m-3 md:my-3 border border-gray-400 rounded-sm p-1">
        <Bar />
        <h3 className="text-center text-lg">Total views on each news articles</h3>
      </div>
    </div>
    </>
  );
};

export default Report;
