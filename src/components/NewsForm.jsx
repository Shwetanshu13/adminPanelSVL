import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import NewsContext from "../context/NewsContext";

const NewsForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const { newsData, setNewsData } = useContext(NewsContext);

  const saveNews = (data) => {
    // console.log("Form Submitted");
    setNewsData(data);
    // console.log(newsData);
    navigate("/preview");
  };

  useEffect(() => {
    if (newsData) {
      reset({
        title: newsData.title,
        content: newsData.content,
        category: newsData.category,
      });
    }
    console.log(newsData);
  }, [newsData]);

  return (
    <>
      <h1 className="text-xl text-center mt-7">News Form</h1>
      <form
        className="w-2/3 mx-auto mt-3 flex flex-col align-middle justify-center gap-5"
        onSubmit={handleSubmit(saveNews)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter title"
            {...register("title", { required: true })}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            placeholder="Enter content"
            {...register("content", { required: true })}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            type="text"
            placeholder="Enter Category"
            {...register("category", { required: true })}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            accept=".jpg, .png"
            placeholder="Upload Image"
            {...register("image", { required: true })}
          />
        </div>
        <div className="mx-auto">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Preview
          </button>
        </div>
      </form>
    </>
  );
};

export default NewsForm;
