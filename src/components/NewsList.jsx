import React, { useEffect, useState } from "react";
import env_import from "../env_import/env_import.js";
import {Loader, ManageNewsItem} from "./";
import { useNavigate } from "react-router-dom";

const NewsList = () => {
  const [listNews, setListNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const getlistNews = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${env_import.apiKey}`
    );
    const data = await response.json();
    // console.log(data);
    setListNews(data.articles);
    setLoading(false);
  };

  useEffect(() => {
    getlistNews();
  }, []);

  const navigate = useNavigate();

  // console.log(env_import.apiKey);
  if (loading) {
    return (
      <Loader />
    );
  }
  return (
    <>
      {listNews.map((listNews, index) => {
        return (
          <div className="flex flex-col gap-3" key={index}>
            <ManageNewsItem
              title={listNews.title}
              source={listNews.source.name}
              publishedAt={listNews.publishedAt}
            />
          </div>
        );
      })}
    </>
  );
};

export default NewsList;
