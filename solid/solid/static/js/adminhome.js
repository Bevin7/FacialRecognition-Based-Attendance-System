// This is for able to see chart. We are using Apex Chart. U can check the documentation of Apex Charts too..
var options = {
  series: [
    {
      name: "Boys",
      data: [40, 60, 60, 50, 60, 60, 50, 60, 30],
    },
    {
      name: "Total Present",
      data: [70, 90, 100, 90, 80, 100, 90, 100, 70],
    },
    {
      name: "Girls",
      data: [30, 30, 40, 40, 20, 40, 40, 40, 40],
    },
  ],
  chart: {
    type: "bar",
    height: 250, // make this 250
    sparkline: {
      enabled: true, // make this true
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Monday", "Tuesday", "Wednesday", "Thusday"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#apex1"), options);
chart.render();

// Sidebar Toggle Codes;


