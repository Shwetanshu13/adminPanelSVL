import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import {Loader} from "../";

const Line = () => {
  const [views, setViews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Getting random numbers from open api to show analytics on a Line graph
  const getViews = async () => {
    const response = await axios.get(
      "/api/v1.0/random?min=100&max=1000&count=7"
    );
    setLoading(false);
    // console.log(response.data);
    setViews(response.data);
  };

  useEffect(() => {
    getViews();
  }, []);

  if (loading) {
    return (
      <Loader />
    );
  } else {
    return (
      <>
        <Chart
          options={{
            chart: {
              id: "basic-line",
            },
            xaxis: {
              categories: [
                "News 1",
                "News 2",
                "News 3",
                "News 4",
                "News 5",
                "News 6",
                "News 7",
              ],
            },
          }}
          series={[
            {
              name: "series-1",
              data: views,
            },
          ]}
          type="line"
        />
      </>
    );
  }
};

export default Line;
