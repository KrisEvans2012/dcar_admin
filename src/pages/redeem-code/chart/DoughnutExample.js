import { Doughnut } from '@/assets/js/BaseCharts'

export default {
  extends: Doughnut,
  mounted () {
    this.renderChart({
      labels: ['已使用', '未使用', '已失效'],
      datasets: [
        {
          backgroundColor: [
            '#8275E5',
            '#FCA24A',
            '#383733'
          ],
          data: [65, 30, 5],
          borderWidth: 0
        }
      ]
    }, {
      legend: {
        position: 'right'
      },
      responsive: true,
      maintainAspectRatio: false
    })
  }
}
