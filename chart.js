async function fetchData() {
    const response = await fetch("ZoAnn.csv");
    const data = await response.text();
    const rows = data.split("\n");
    const labels = [];
    const values = [];
  
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i].split(",");
      labels.push(row[0]);
      values.push(parseFloat(row[1]));
    }
  
    return { labels, values };
  }
  
  async function createChart() {
    const { labels, values } = await fetchData();
  
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Temperature Anomalies',
          data: values,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Global Temperature Change Over Time',
            font: {
              size: 24
            }
          }
        },
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });
  }
  
  createChart();  