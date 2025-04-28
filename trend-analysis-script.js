// 차트 데이터 및 설정
document.addEventListener('DOMContentLoaded', function() {
    // 계절별 관심도 차트
    const seasonalCtx = document.getElementById('seasonalTrendsChart').getContext('2d');
    const seasonalChart = new Chart(seasonalCtx, {
        type: 'line',
        data: {
            labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            datasets: [
                {
                    label: '관광 명소',
                    data: [40, 35, 50, 85, 95, 80, 75, 70, 85, 90, 70, 50],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    tension: 0.3
                },
                {
                    label: '축제 및 문화행사',
                    data: [20, 25, 45, 90, 100, 60, 40, 35, 65, 85, 40, 30],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    tension: 0.3
                },
                {
                    label: '지역 정책',
                    data: [60, 55, 40, 35, 30, 45, 50, 55, 40, 50, 65, 70],
                    borderColor: 'rgba(255, 206, 86, 1)',
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: '장성군 관련 시기별 검색 관심도 (2024-2025)'
                }
            }
        }
    });
    
    // 관광 명소 인기도 차트
    const attractionsCtx = document.getElementById('touristAttractionsChart').getContext('2d');
    const attractionsChart = new Chart(attractionsCtx, {
        type: 'bar',
        data: {
            labels: ['백양사', '황룡강', '홍길동 테마파크', '방장산', '필암서원'],
            datasets: [{
                label: '인기도 지수',
                data: [85, 90, 75, 65, 70],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: '장성군 주요 관광 명소 인기도'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
});