import React, { useEffect, useState } from "react";
import { DashboardCard, MobileScreen } from "../components";
import axios from "axios";
import { set } from "react-hook-form";

const Dashboard = () => {
  const [totalNews, setTotalNews] = useState(0);
  const [totalViews, setTotalViews] = useState(0);

  // Fetching random data for the dashboard though open api

  const getData = async () => {
    const response = await axios.get(
      "/api/v1.0/random?min=100&max=1000&count=2"
    );
    setTotalViews(Math.max(...response.data));
    setTotalNews(Math.min(...response.data));
    // Max-Min used to make the data look more realistic
  };

  // Proxy Error Code Alternative
  // setTotalViews(1000);
  // setTotalNews(100);

  useEffect(() => {
    getData();
    // Comment the above getData() in case of Proxy Error
  }, []);


  return (
    <>
      <div className="flex flex-col md:flex-row justify-between md:justify-center md:gap-10 mt-5">
        <DashboardCard
          text="Total News Published"
          number={totalNews}
          btnText="Manage News"
          uri="/manage"
        />
        <DashboardCard
          text="Total Views"
          number={totalViews}
          btnText="View Analytics"
          uri="/report"
        />
      </div>
    </>
  );
};

export default Dashboard;
