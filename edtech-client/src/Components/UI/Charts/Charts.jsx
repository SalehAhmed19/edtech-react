import { Chart as ChartJs } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function Charts() {
  const options = {
    responsive: true,
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
  };
  return (
    <div>
      {/* <Line data /> */}
      <Bar
        data={{
          labels: ["Assignment 1", "Assignment 2", "Assignment 3"],
          datasets: [
            {
              label: "Marks",
              data: [20, 34, 70],
              backgroundColor: "#f3f3f3",
            },
          ],
        }}
        options={options}
      />
    </div>
  );
}
