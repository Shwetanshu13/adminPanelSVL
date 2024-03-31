import React from "react";

const ManageNewsItem = ({ title, source, publishedAt}) => {
  return (
    <>
      <div className="box w-2/3 flex justify-between mx-auto m-3 align-middle border border-gray-200 p-2 rounded-md">
        <div className="left flex flex-col p-1">
          <div className="title">
            <h1 className="sm:text-xl">{title}</h1>
          </div>
          <div className="src">
            <h3 className="sm:text-lg">{source} </h3>
          </div>
          <div className="sm:text-md">
            <p>{publishedAt}</p>
          </div>
        </div>
        <div className="btns flex flex-col gap-5 my-auto">
          <button className="btn p-1 sm:p-3 bg-green-500 text-white rounded-md">
            View
          </button>
          <button className="btn p-1 sm:p-3 bg-blue-500 text-white rounded-md">
            Edit
          </button>
          <button className="btn p-1 sm:p-3 bg-red-500 text-white rounded-md">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ManageNewsItem;
