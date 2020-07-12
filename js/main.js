// ============================================================= doughnut graph


let mobileUsers = document.getElementById("mobile-users");
// DOUGHNUT GRAPH
// https://www.chartjs.org/docs/latest/charts/doughnut.html
let mobileUsersY = {
    animation: {
      duration: 2500
    },
    legend: {
      position: "right",
      labels: {
        boxWidth: 15
      }
    }
    
  };

  let mobileUsersX = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
      data: [7000, 1750, 5200],
      // code below - set to 0 to remove white spacing
      borderWidth: 0,
      backgroundColor: [
        '#ff7a7a',
        '#25c46c',
        '#4b9ab0',
        'rgb(212, 0, 255)'
      ]
    }]
  };
  // EXECUTE GRAPH
  let mobileUsersData = new Chart( mobileUsers, {
    type: "doughnut",
    data: mobileUsersX,
    options: mobileUsersY
  });


  // =========================================================== traffic line graph
  
  let trafficData = document.getElementById("traffic-data");

  // LINE GRAPH
  
  let trafficDataY = {
    animation: {
      duration: 2500
    },
    legend: {
      position: "right",
      labels: {
        boxWidth: 15
      }
    }
  };

  let trafficDataX = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [{
      data: [7000, 1750, 5200, 3000, 4000, 7035, 5540, 6200, 1500, 1200, 1600, 6900],
      // code below - set to 0 to remove white spacing
      borderWidth: 0,
      backgroundColor: [
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
        'white'
      ],
      // add styling here v ===================
      tension: 0,  // anything above 1 starts to look loopy. keep it below .5
      pointRadius: 7,
      pointBorderWidth: 3,
      pointBorderColor: 'rgb(139, 132, 232)',
      pointBackgroundColor: 'white',	
      backgroundColor: 'rgb(139, 132, 232, .4)',
      label: 'Pages refreshed'
      // ======================================
    }]
  };
  // EXECUTE GRAPH
  var myLineChart = new Chart( trafficData, {
    type: 'line',
    data: trafficDataX,
    options: trafficDataY,
});
  
// ====================================================================== Bar chart
let dailyTraffic = document.getElementById("daily-traffic");
// BAR CHART
let dailyTrafficY = {
    animation: {
      duration: 2500
    },
    legend: {
      position: "right",
      labels: {
        boxWidth: 15
      }
    }
    
  };

  let dailyTrafficX = {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [{
      data: [3000, 1750, 5200, 4000, 3800, 6800, 5500],
      // code below - set to 0 to remove white spacing
      borderWidth: 1.5,
      backgroundColor: [
        '#8864eb',
        '#8864eb',
        '#8864eb',
        '#8864eb',
        '#8864eb',
        '#8864eb',
        '#8864eb'
      ],
      hoverBackgroundColor: '#25c46c',
      label: 'Minutes spent googling',
      barThickness: 30
    }]
  };
  // EXECUTE GRAPH
  let dailyTrafficData = new Chart( dailyTraffic, {
    type: "bar",
    data: dailyTrafficX,
    options: dailyTrafficY
  });