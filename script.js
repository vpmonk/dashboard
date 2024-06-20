
        const toggleButton = document.getElementById('toggleButton');
        const sidebar = document.getElementById('sidebar');
        const content = document.getElementById('content');

        toggleButton.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            content.classList.toggle('collapsed');
        });

        const ctx = document.getElementById('salesChart').getContext('2d');
        const salesChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['15 jun', '16 jun', '17 jun', '18 jun', '19 jun', '20 jun', '21 jun','22 jun','23 jun'],
                datasets: [
                    {
                        label: 'Templates',
                        data: [60, 81, 100, 90, 120, 130, 140,90,120],
                        borderColor: 'blue',
                        fill: false
                    },
                    {
                        label: 'Hosting',
                        data: [80, 79, 90, 85, 95, 110, 100,115,110],
                        borderColor: 'orange',
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Sales ($)'
                        }
                    }
                }
            }
        });

        const todaySalesCtx = document.getElementById('todaySalesChart').getContext('2d');
        new Chart(todaySalesCtx, {
            type: 'bar',
            data: {
                labels: ['09 AM', '10 AM', '11 AM', '12 PM', '01 PM', '02 PM', '03 PM'],
                datasets: [
                    {
                        label: 'Sales',
                        data: [1960, 2000, 2100, 2300, 2200, 2100, 2300],
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                       borderWidth: 1 }, { label: 'Profit', data: [1470, 1500, 1550, 1650, 1600, 1550, 1650], backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 1 } ] }, options: { responsive: true, scales: { x: { display: true, title: { display: true, text: 'Time' } }, y: { display: true, title: { display: true, text: 'Amount ($)' } } } } });

const todayVisitorsCtx = document.getElementById('todayVisitorsChart').getContext('2d'); new Chart(todayVisitorsCtx, { type: 'line', data: { labels: ['09 AM', '10 AM', '11 AM', '12 PM', '01 PM', '02 PM', '03 PM'], datasets: [ { label: 'Visitors', data: [500, 600, 700, 800, 900, 1000, 300], borderColor: 'rgba(255, 159, 64, 1)', backgroundColor: 'rgba(255, 159, 64, 0.2)', borderWidth: 1 } ] }, options: { responsive: true, scales: { x: { display: true, title: { display: true, text: 'Time' } }, y: { display: true, title: { display: true, text: 'Visitors' } } } } });

const deviceCtx = document.getElementById('deviceChart').getContext('2d'); const deviceChart = new Chart(deviceCtx, { type: 'doughnut', data: { labels: ['Desktop', 'Mobile'], datasets: [ { data: [55, 45], backgroundColor: ['#007bff', '#ffc107'], hoverOffset: 4 } ] }, options: { responsive: true, plugins: { legend: { position: 'bottom' } } } });

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]'); const popoverTemplate = `

<div class="popover" role="tooltip"> <div class="popover-arrow"></div> <h3 class="popover-header"></h3> <div class="popover-body"></div> </div> `;
popoverTriggerList.forEach(trigger => { const popover = new bootstrap.Popover(trigger, { html: true, content: trigger.getAttribute('data-bs-content'), template: popoverTemplate, placement: trigger.getAttribute('data-bs-placement') }); }); 