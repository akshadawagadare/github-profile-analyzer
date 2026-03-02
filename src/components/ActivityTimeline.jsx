import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const ActivityTimeline = ({ repos }) => {
  const sorted = [...repos].sort(
    (a, b) => new Date(a.updated_at) - new Date(b.updated_at)
  );

  const data = {
    labels: sorted.map((repo) =>
      new Date(repo.updated_at).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Activity Updates",
        data: sorted.map((repo) => repo.stargazers_count),
        tension: 0.3,
      },
    ],
  };

  return (
    <div style={{ width: "100%", maxWidth: "700px", margin: "20px auto" }}>
      <h3>Repository Activity Timeline</h3>
      <Line data={data} />
    </div>
  );
};

export default ActivityTimeline;