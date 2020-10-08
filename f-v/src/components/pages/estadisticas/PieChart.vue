<script>
import { Pie } from "vue-chartjs";
export default {
  extends: Pie,
  data: () => ({
    chartdata: {
      type: "pie",
      labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
      datasets: [
        {
          label: "Total A",
          data: [94, 75, 71, 49, 28],
          backgroundColor: ["Red", "Blue", "Yellow", "Green", "Purple"],
        },
        {
          label: "Total B",
          backgroundColor: ["Red", "Blue", "Yellow", "Green", "Purple"],
          data: [34, 36, 34, 31, 22],
        },
        {
          label: "Total C",
          backgroundColor: ["Red", "Blue", "Yellow", "Green", "Purple"],
          data: [34, 36, 34, 31,12],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: "Pie Chart",
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
    },
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>