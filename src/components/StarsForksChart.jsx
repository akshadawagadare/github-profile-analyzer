import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const StarsForksChart = ({ repos }) => {
  // Top 5 repos with highest stars
  const topRepos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5);

  const data = {
    labels: topRepos.map((repo) => repo.name),
    datasets: [
      {
        label: "Stars",
        data: topRepos.map((repo) => repo.stargazers_count),
      },
      {
        label: "Forks",
        data: topRepos.map((repo) => repo.forks_count),
      },
    ],
  };

  return (
    <div style={{ width: "100%", maxWidth: "700px", margin: "20px auto" }}>
      <h3>Top Repositories (Stars & Forks)</h3>
      <Bar data={data} />
    </div>
  );
};

export default StarsForksChart;