// Grafik Traffic Site
var ctxTraffic = document.getElementById('trafficChart').getContext('2d');
var trafficChart = new Chart(ctxTraffic, {
    type: 'line', // Tipe grafik
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Visitors',
            data: [120, 190, 300, 500, 200, 300, 450],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});

// Grafik Pengguna Baru
var ctxUsers = document.getElementById('usersChart').getContext('2d');
var usersChart = new Chart(ctxUsers, {
    type: 'bar', // Tipe grafik
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'New Users',
            data: [50, 70, 110, 140, 60, 80, 120],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Grafik Pendapatan
var ctxRevenue = document.getElementById('revenueChart').getContext('2d');
var revenueChart = new Chart(ctxRevenue, {
    type: 'pie', // Tipe grafik
    data: {
        labels: ['Product A', 'Product B', 'Product C'],
        datasets: [{
            label: 'Revenue',
            data: [300, 150, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});