<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: ["Dato 1", "Dato 2", "Dato 3", "Dato 4", "Dato 5"],
      datasets: [
        {
          label: "Total A",
          backgroundColor: "rgba(21, 38, 161, 0.5)",
          pointBackgroundColor: "rgba(21, 38, 161, 0.5)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(255,99,132,1)",
          data: [94, 75, 71, 49, 48],
          pointHitRadius: 20,
          pointRadius: 4,
        },
        {
          label: "Total B",
          backgroundColor: "rgba(172, 16, 81, 1.9)",
          pointBackgroundColor: "rgba(172, 16, 81, 1.9)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(179,181,198,1)",
          data: [34, 36, 34, 31, 22],
          pointHitRadius: 20,
          pointRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: "Line Chart",
        fontColor: "white",
        fontSize: 20,
      },
      legend: {
        labels: {
          fontColor: "white",
          fontSize: 16,
        },
      },
      tooltips: {
        bodyFontSize: 14,
        titleFontSize: 16,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              fontSize: 16,
              fontColor: "white",
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              fontSize: 16,
              fontColor: "white",
            },
          },
        ],
      },
    },
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>