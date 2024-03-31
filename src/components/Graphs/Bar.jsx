import axios from "axios";
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import {Loader} from "../";
// import axios from "axios";

const Bar = () => {
  const [views, setViews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Getting random numbers from open api to show analytics on a Bar graph
  const getViews = async () => {
    const response = await axios.get(
      "/api/v1.0/random?min=100&max=1000&count=7"
    );
    setLoading(false);
    // console.log(response.data);
    setViews(response.data);
  };

  // Proxy Error Code Alternative
  // setViews([100, 200, 300, 400, 500, 600, 700]);

  useEffect(() => {
    getViews();
    // Comment the above getViews() in case of Proxy Error 
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
              id: "basic-bar",
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
          type="bar"
        />
      </>
    );
  }
};

export default Bar;
